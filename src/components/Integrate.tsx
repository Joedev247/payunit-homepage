import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-12 md:py-16">
      <div className="max-w-[1060px] mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Content Section */}
        <div className="md:w-2/3">
          <h2 className="text-[#222F3E] text-2xl md:text-3xl font-bold mb-3">
            Ready to integrate PayUnit ?
          </h2>
          <div className="flex items-center gap-2 text-[#6B7280] text-base">
            <span>Still need to know how PayUnit can help you ?</span>
            <button className="text-[#F59E0B] hover:text-[#D97706] font-medium flex items-center gap-1 transition-colors group">
              See use cases
              <ArrowRight
                size={18}
                className="text-[#F59E0B] group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-3 md:w-1/3 md:justify-end">
          <Button className="bg-[#222F3E] text-white font-semibold text-sm px-4 py-2 hover:bg-[#1A252F] transition-colors flex items-center justify-center gap-1 min-h-[36px] min-w-[120px] leading-none">
            <span className="flex items-center">
              Our Fees
              <ArrowRight
                size={16}
                className="text-[#F59E0B] ml-2 align-middle transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Button>
          <Button className="bg-[#F59E0B] text-white font-semibold text-sm px-4 py-2 hover:bg-[#D97706] transition-colors flex items-center justify-center gap-1 min-h-[36px] min-w-[120px] leading-none">
            <span className="flex items-center">
              Start Integration
              <ArrowRight
                size={16}
                className="text-[#222F3E] ml-2 align-middle transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}