import React from "react";

export default function Testimonial() {
  return (
    <section className="w-full bg-[#E6F6F5] py-12 md:py-14">
      <div className="max-w-[960px] mx-auto px-4 flex flex-col items-center">
        <svg
          width="38"
          height="29"
          viewBox="0 0 38 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-6"
        >
          <path
            d="M16.425 0C10.96 0 5.835 3.038 2.689 8.64C0.812 11.905 0 15.145 0 19.455C0 25.67 3.33 30.45 10.052 34.053L13.291 37.5L14.728 36.09C15.671 35.117 18.267 31.997 19.891 29.91C23.037 25.67 25.45 22.47 25.45 17.11C25.45 7.74 19.891 0 16.425 0ZM36.425 0C30.96 0 25.835 3.038 22.689 8.64C20.812 11.905 20 15.145 20 19.455C20 25.67 23.33 30.45 30.052 34.053L33.291 37.5L34.728 36.09C35.671 35.117 38.267 31.997 39.891 29.91C43.037 25.67 45.45 22.47 45.45 17.11C45.45 7.74 39.891 0 36.425 0Z"
            fill="#2563EB"
            fillOpacity="0.15"
          />
        </svg>
        <blockquote className="text-center font-medium text-lg md:text-[22px] leading-snug text-[#222F3E] mb-6 max-w-3xl">
          “Seamlessly enabled us to collect and validate new and recurring payments, while keeping our business and our customers happy. Product and support are world-class.”
        </blockquote>
        <div className="text-[#222F3E] font-semibold text-base md:text-lg">
          Jane Smith, Head of Payments, Modern Minds
        </div>
      </div>
    </section>
  );
}