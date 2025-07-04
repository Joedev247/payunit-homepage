import React from "react";
import Feature from "./Feature";
import Section from "./Section";

const accentColors = [
  "#2563EB", // blue
  "#FFB800", // yellow
  "#1FC5A8", // teal
  "#FF805D", // orange
];

export default function FeaturesGrid() {
  const features = [
    {
      title: "User Experience",
      description:
        "Modern, intuitive payment flows designed to maximize conversions and delight your customers.",
      imgSrc: "/phone network  sfawsaw-01 1.png",
      imgAlt: "User Experience",
    },
    {
      title: "Infinite possibilities",
      description: "",
      imgSrc: "/Connected world-amico 1.png",
      imgAlt: "Infinite possibilities",
      children: (
        <ul className="grid gap-3 text-lg text-gray-600 mb-2">
          {[
            "Accept cards, wallets, and more",
            "Fast settlements",
            "Recurring billing",
            "Fraud protection",
            "Detailed analytics",
            "API integrations",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#FFB800] block mr-3"></span>
              {item}
            </li>
          ))}
        </ul>
      ),
      reverse: true,
    },
    {
      title: "Across the world",
      description:
        "Reach customers in over 100 countries with local payment methods and currencies.",
      imgSrc: "/Group 106.png",
      imgAlt: "Across the world",
    },
    {
      title: "Powerful and easy-to-use APIs",
      description: "Robust, developer-friendly APIs for every use case:",
      imgSrc: "/Software integration-amico 1.png",
      imgAlt: "APIs",
      children: (
        <>
          <ul className="grid gap-3 text-lg text-gray-600 mb-2">
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#FFB800] block mr-3"></span>
              Payments, refunds, subscriptions
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-[#FFB800] block mr-3"></span>
              Webhooks, SDKs, and docs
            </li>
          </ul>
          <a
            href="#"
            className="text-[#2563EB] underline text-lg font-semibold hover:text-[#174ea6] transition"
          >
            Read docs →
          </a>
        </>
      ),
      reverse: true,
    },
  ];

  return (
    <Section>
      <div className="flex flex-col gap-24">
        {features.map((f, i) => (
          <Feature
            key={f.title}
            {...f}
            accentColor={accentColors[i % accentColors.length]}
            className="hover:-translate-y-2 transition-transform duration-300"
          />
        ))}
      </div>
    </Section>
  );
}