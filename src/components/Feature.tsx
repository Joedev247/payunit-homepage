import React from "react";

type FeatureProps = {
  title: string;
  description: string;
  imgSrc?: string;
  imgAlt?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  className?: string;
  accentColor?: string;
};

export default function Feature({
  title,
  description,
  imgSrc,
  imgAlt,
  children,
  reverse = false,
  className = "",
  accentColor = "#2563EB",
}: FeatureProps) {
  return (
    <div
      className={`
        relative group flex flex-col md:flex-row items-center md:justify-between gap-12 md:gap-24
        ${reverse ? "md:flex-row-reverse" : ""}
        ${className}
      `}
    >
      {imgSrc && (
        <div className="flex-1 flex justify-center md:justify-start relative">
          {/* Colored gradient “halo” behind image */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[260px] rounded-[32px] blur-2xl opacity-30 z-0"
            style={{
              background: `linear-gradient(135deg, ${accentColor} 0%, #FFB800 100%)`,
            }}
            aria-hidden
          ></div>
          <img
            src={imgSrc}
            alt={imgAlt}
            className="relative z-10 w-[340px] h-[260px] object-cover rounded-[28px] shadow-xl border border-[#e6ecf3] bg-white group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="flex-1 flex flex-col items-start md:items-start max-w-xl bg-white/80 backdrop-blur-[2px] rounded-[24px] shadow-lg px-10 py-10 border border-[#F1F4F9] hover:shadow-2xl transition-shadow duration-300">
        <h3 className="font-extrabold text-3xl md:text-4xl text-[#222F3E] mb-4 tracking-tight leading-tight">
          <span className="relative z-10">{title}</span>
          <span
            className="block mt-3 w-14 h-1.5 rounded bg-[#2563EB] opacity-80"
            style={{ background: accentColor }}
          ></span>
        </h3>
        <p className="text-lg text-gray-600 mb-6 font-medium">{description}</p>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}