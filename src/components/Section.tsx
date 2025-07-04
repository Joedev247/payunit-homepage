import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  bg?: string;
  id?: string;
};

export default function Section({
  children,
  className = "",
  bg = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`${bg} py-12 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">{children}</div>
    </section>
  );
}
