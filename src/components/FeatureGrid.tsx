import React from "react";
import Feature from "./Feature";

export default function FeaturesGrid() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1060px] mx-auto px-4 flex flex-col gap-16">
        {/* 1st Row: Text left, Image right */}
        <Feature
          title="User Experience"
          description="Modern, intuitive payment flows designed to maximize conversions and delight your customers."
          imgSrc="/phone network  sfawsaw-01 1.png"
          imgAlt="User Experience"
        />
        {/* 2nd Row: Image left, Text right */}
        <Feature
          title="Infinite possibilities"
          description=""
          reverse
          imgSrc="/Connected world-amico 1.png"
          imgAlt="Infinite possibilities"
        >
          <ul className="grid gap-2 text-[#3C4257] text-base md:text-[16px]">
            {[
              "Accept cards, wallets, and more",
              "Fast settlements",
              "Recurring billing",
              "Fraud protection",
              "Detailed analytics",
              "API integrations",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-[#FFB800] block mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </Feature>
        {/* 3rd Row: Text left, Image right */}
        <Feature
          title="Across the world"
          description="Reach customers in over 100 countries with local payment methods and currencies."
          imgSrc="/Group 106.png"
          imgAlt="Across the world"
        />
        {/* 4th Row: Image left, Text right */}
        <Feature
          title="Powerful and easy-to-use APIs"
          description="Robust, developer-friendly APIs for every use case:"
          reverse
          imgSrc="/Software integration-amico 1.png"
          imgAlt="APIs"
        >
          <ul className="grid gap-2 text-[#3C4257] text-base md:text-[16px] mb-2">
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#FFB800] block mr-2"></span>
              Payments, refunds, subscriptions
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#FFB800] block mr-2"></span>
              Webhooks, SDKs, and docs
            </li>
          </ul>
          <a
            href="#"
            className="text-[#2563EB] underline text-sm font-medium hover:text-[#174ea6] transition"
          >
            Read docs →
          </a>
        </Feature>
      </div>
    </section>
  );
}