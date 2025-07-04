import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return (
    <input
      className="px-4 py-3  border border-gray-300 focus:ring-2 focus:ring-accent transition-all w-full"
      {...props}
    />
  );
}
