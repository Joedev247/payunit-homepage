import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function NewsletterForm() {
  return (
    <section className="w-full bg-[#F494054D] py-12 md:py-16">
      <div className="max-w-[1060px] mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16">
        {/* Form Section */}
        <div className="md:w-1/2">
          <div className="flex flex-col gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="bg-white border border-[#F494054D] h-[46px] w-full px-4 text-base placeholder-[#9CA3AF] focus:ring-2 focus:ring-[#FFB800] transition"
            />
            <Button
              type="submit"
              className="h-[46px] px-6 text-base bg-[#222F3E] font-semibold shadow-none w-full"
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-[#222F3E] text-3xl md:text-3xl font-bold mb-3">
            Subscribe to our newsletter
          </h2>
          <p className="text-[#6B7280] text-base">
            Subscribe for exciting news about PayUnit
          </p>
        </div>
      </div>
    </section>
  );
}