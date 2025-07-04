import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "accent";
  children: React.ReactNode;
};

export default function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  let base =
    "px-6 py-3 rounded font-semibold transition-all duration-150 focus:outline-none";
  let variants = {
    primary: "bg-primary text-white hover:bg-blue-700",
    secondary: "border border-primary text-primary hover:bg-blue-50",
    accent: "bg-accent text-white hover:bg-orange-500",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}