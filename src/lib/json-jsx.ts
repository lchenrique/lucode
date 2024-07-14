
type HTMLProps = {
	[TTag in keyof JSX.IntrinsicElements]?: JSX.IntrinsicElements[TTag]
}
type HtmlTypes = keyof HTMLProps

export interface JsonElement<K extends string = any> {
  type: HtmlTypes;
  key?: K;
  props?: { [key: string]: any };
  render?:() => any
  child?: JsonElement<K>[];
}

type keyValueCode<S extends string, O> = O extends { child: JsonElement<S>[] } 
? O["child"][number]["key"] : O extends  JsonElement<S> ? O["key"] : never;

type ConfigOptions<S extends string> = {
  [K in S]: JsonElement["props"];
};

export const json = <K extends string, T extends JsonElement<K>>(json: T[]) => {
  return json
}

export function jsonFront(React: any) {
  const renderHtmlFromJson = <K extends string, T extends JsonElement<K>>(
    json:  T[] | T,
    options?: { config: Partial<ConfigOptions<Exclude<keyValueCode<K,T> | T["key"], undefined>> > }
  ): any => {
    // If json is an array, process each element in the array
    if (Array.isArray(json)) {
      return json.map((element) => {
        if (element.key) {
          element.props = element.props || {};
          const elementConfig =
            options?.config[element.key as keyof typeof options.config];
          if (elementConfig) {
            Object.assign(element.props, elementConfig);
          }
        }

        if(Array.isArray(element.child)){
          element.child.map((child)=> {
            if (child.key) {
              child.props = child.props || {};
              const childConfig =
                options?.config[child.key as keyof typeof options.config];
              if (childConfig) {
                Object.assign(child.props, childConfig);
              }
            }
            return renderHtmlFromJson(child);

          })
        }
        
        return renderHtmlFromJson(element);
      });
    }

    // If json is not an object or is null, return null
    if (typeof json !== "object" || json === null) {
      return null;
    }

    const { type, props, child, key } = json;
    const p = props || {};

    if (key) {
      const elementConfig = options?.config[key as keyof typeof options.config];

      if (elementConfig) {
        Object.assign(p, elementConfig);
      }
    }

    let childrenElements: any = "";
    if (typeof child === "string") {
      childrenElements = child;
      return React.createElement(type, p, childrenElements);
    }

    // Process children: if children is a string, pass it directly; if it's an array, map over it
    childrenElements = Array.isArray(child)
      ? child.map((child) => renderHtmlFromJson(child))
      : renderHtmlFromJson(child as any);

    // Create and return the React element

    return React.createElement(type, p, childrenElements);
  };

  return { renderHtmlFromJson };
}



// function minhafuncao<S extends string, O extends Objeto<S> >(
//   array: O[],
//   opcoes: Partial<ConfigOptions<Exclude<StatusCodeValue<S,O> | O["key"], undefined>> >
// ) {

//   return
// }


// // Demo


// minhafuncao([{
//   key: "header",
//   type: "div",
//   props: { className: "bg-blue-500 " },
//   child: [{
//     type:"a",
//     key:"aaa"
//   },{
//     type:"n",
//     key:"bbbb"
//   }]
// },
// ], {});


