import React from "react";

type FeatureProps = {
  title: string;
  description: string;
  imgSrc?: string;
  imgAlt?: string;
  children?: React.ReactNode;
  reverse?: boolean; // flips image/text order
  className?: string;
};

export default function Feature({
  title,
  description,
  imgSrc,
  imgAlt,
  children,
  reverse = false,
  className = "",
}: FeatureProps) {
  return (
    <div
      className={`
        flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-12
        ${reverse ? "md:flex-row-reverse" : ""}
        ${className}
      `}
    >
      {imgSrc && (
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] object-contain rounded-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
          />
        </div>
      )}
      <div className="flex-1 flex flex-col items-start md:items-start max-w-[420px]">
        <h3 className="font-semibold text-xl md:text-[22px] leading-tight mb-2 text-[#222F3E]">
          {title}
        </h3>
        <p className="text-base md:text-[16px] text-[#3C4257] mb-4">{description}</p>
        {children}
      </div>
    </div>
  );
}