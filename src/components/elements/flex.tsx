import { ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  className?: string;
  direction?: "row" | "col";
  justify?: "center" | "between" | "around" | "evenly";
  align?: "center" | "start" | "end";
  wrap?: "wrap" | "nowrap";
  gap?: string;
}

export const Flex: React.FC<FlexProps> = ({ children, className, direction, justify, align, wrap, gap }) => {
  const props= {
   className: `flex ${direction ? `flex-${direction}` : ""} ${justify ? `justify-${justify}` : ""} ${align ? `items-${align}` : ""} ${wrap ? `flex-${wrap}` : ""} ${gap ? `gap-${gap}` : ""} ${className}`,
  }

  return <div {...props}>{children}</div>;
};


