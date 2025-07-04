import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function NewsletterForm() {
  return (
    <section className="w-full bg-[#FDEACC] py-8">
      <div className="max-w-[1060px] mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <form className="flex flex-col md:flex-row md:items-center w-full md:w-auto gap-3 md:gap-0">
          <Input
            type="email"
            placeholder="Enter your email"
            required
            className="bg-white border border-[#E5E7EB] h-[46px] w-full md:w-[260px] -[8px] px-4 text-base placeholder-[#9CA3AF] focus:ring-2 focus:ring-[#FFB800] transition md:mr-3"
          />
          <Button
            type="submit"
            className="h-[46px] -[8px] bg-[#222F3E] px-6 text-base font-semibold shadow-none md:w-auto w-full"
          >
            Subscribe to our newsletter
          </Button>
        </form>
        <div className="hidden md:block w-px h-12 bg-[#E5E7EB] mx-6"></div>
        <div className="md:w-[280px] text-[#3C4257] text-base font-medium text-center md:text-left">
          Stay updated! No spam. Only the latest news &amp; offers.
        </div>
      </div>
    </section>
  );
}