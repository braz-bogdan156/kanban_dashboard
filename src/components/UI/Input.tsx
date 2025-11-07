import { type InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: Props) {
  return (
    <input
      {...props}
      className={`w-full px-3 py-2 border rounded-md outline-none text-sm 
        focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        ${props.className ?? ""}`}
    />
  );
}