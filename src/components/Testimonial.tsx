import Image from "next/image";
import React from "react";

export default function Testimonial() {
  return (
    <section className="w-full bg-[#E8F5F4] py-12 md:py-14">
      <div className="max-w-[960px] mx-auto px-4 flex flex-col items-center">
        <blockquote className="text-center font-medium text-lg md:text-[22px] leading-snug text-[#222F3E] mb-8 max-w-3xl">
          &quot;Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim.&quot;
        </blockquote>
        <div className="flex items-center gap-3">
          <Image
            src="/Connected world-amico 1.png"
            alt="Tiffany Monroe"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-left">
            <div className="text-[#222F3E] font-semibold text-base">
              Tiffany Monroe
            </div>
            <div className="text-[#6B7280] text-sm">
              Position at payunit
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}