import { ReactNode } from "react";
interface CardProps {
  title: ReactNode;
  children: ReactNode;
}
export function Card(props: CardProps) {
  return (
    <div className="space-y-4 border bg-card border-gray-100/5 p-5 rounded-md shadow-lg">
      <h2 className="text-2xl mb-3">{props.title}</h2>
      <p className="text-gray-400 leading-6">{props.children}</p>
    </div>
  );
}
