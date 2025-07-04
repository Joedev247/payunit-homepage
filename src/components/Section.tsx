import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  bg?: string;
  id?: string;
};

export default function Section({ children, className = "", bg = "", id }: SectionProps) {
  return (
    <section
      id={id}
      className={`
        relative py-20 md:py-28
        ${bg ? bg : "bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc]"}
        rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_16px_64px_rgba(34,47,62,0.04)]
        ${className}
      `}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">{children}</div>
    </section>
  );
}