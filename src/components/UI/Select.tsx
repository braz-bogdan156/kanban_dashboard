import { type SelectHTMLAttributes } from "react";

type Props = SelectHTMLAttributes<HTMLSelectElement>;

export function Select(props: Props) {
  return (
    <select
      {...props}
      className={`w-full px-3 py-2 border rounded-md outline-none text-sm 
         focus:ring-2 focus:ring-blue-500 focus:border-blue-500
         ${props.className ?? ""}`}
    />
  );
}