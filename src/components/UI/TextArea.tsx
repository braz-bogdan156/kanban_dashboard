import { type TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea(props: Props) {
  return (
    <textarea
      {...props}
      className={`w-full px-3 py-2 border rounded-md outline-none text-sm 
        focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        ${props.className ?? ""}`}
    />
  );
}