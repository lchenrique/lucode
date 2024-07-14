import React from "react";
import { JsonElement, jsonFront, json } from "./lib/json-jsx";
const { renderHtmlFromJson } = jsonFront(React)
const Test = () => {


  return (
    <div>
      {renderHtmlFromJson([{
        type: "div",
        key: "header",
      },
      {
        type: "div",
        key: "body",
      }], {
        config: {

        }
      })}
    </div>
  );
};

export { Test };