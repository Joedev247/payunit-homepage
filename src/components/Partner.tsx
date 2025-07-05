import React from "react";

export default function Partners() {
  return (
    <section className="w-full py-16 bg-white border-t border-[#F2F2F2]">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#2C3E50] mb-12">
          Our Partners
        </h2>
        <div className="flex flex-wrap gap-8 lg:gap-12 w-full justify-center items-center">
          {/* Logo placeholders matching Figma design */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-[80px] h-[40px] lg:w-[100px] lg:h-[50px] bg-[#F8F9FA] border-2 border-[#FFB800] flex items-center justify-center transition-all duration-200 hover:shadow-md"
            >
              <span className="text-xs text-[#C2C2C2] font-medium">Logo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}