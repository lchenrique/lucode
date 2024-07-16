import { ReactNode } from "react";

export interface IMainProps {
  children: ReactNode
}

const Main = (props: IMainProps) => {
  return (
    <div className="h-full max-w-[1365px] mx-auto w-full pt-20 p-5 relative pb-14 sm:pb-0">
      {props.children}
    </div>
  );
};

export { Main };