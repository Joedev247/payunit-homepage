import React from "react";

export default function Partners() {
  return (
    <section className="w-full py-12 bg-white border-t border-[#F2F2F2]">
      <div className="max-w-[1060px] mx-auto px-4 flex flex-col items-center">
        <h4 className="text-base font-medium text-[#3C4257] mb-8">Our Partners</h4>
        <div className="flex gap-6 md:gap-8 w-full justify-center">
          {/* Logo placeholders with border and subtle shadow, matching Figma */}
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-[64px] h-[40px] bg-white rounded-[8px] border border-[#FFB800]/30 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex items-center justify-center"
            >
              <span className="text-xs text-[#C2C2C2]">Logo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}