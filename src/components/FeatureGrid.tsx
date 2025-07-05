import React from "react";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";
import Section from "./Section";

const possibilities = [
  "Online payments",
  "Payment link", 
  "Mobile Cashiering",
  "Recurring payments",
  "Invoices",
  "Issuring virtual and physical card",
  "Pre-built checkout page",
  "Products and Marketplaces",
];

export default function FeatureGrid() {
  return (
    <Section>
      <div className="flex flex-col gap-20">
        {/* Top Row: User Experience & Infinite possibilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 xl:gap-16 items-start">
          {/* User Experience */}
          <div className="flex flex-col animate-fade-in-up">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">User Experience</h2>
              <p className="text-gray-600 mb-6 max-w-md">
                Offers to your customers an amazing customer experience: it&apos;s fast, easy, totally secure and above all with competitive transaction fees.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start w-full mt-4">
              <Image
                src="/images/phone network  sfawsaw-01 1.png"
                alt="User Experience"
                width={450}
                height={350}
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Infinite possibilities - offset to start where User Experience text ends */}
          <div className="flex flex-col animate-fade-in-right lg:mt-24 xl:mt-28">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Infinite possibilities</h2>
            <p className="text-gray-600 mb-6 max-w-xl">
              Whether you&apos;re a business or an individual, you&apos;ll find the solution that&apos;s right for you among the wide range of services offered by PayUnit.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 w-full">
              {possibilities.map((item) => (
                <div key={item} className="flex items-center text-base lg:text-lg text-gray-800">
                  <span className="inline-flex items-center justify-center w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-[#FFB800] mr-3 flex-shrink-0">
                    <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                  </span>
                  <span className="leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Middle Row: Across the world */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:items-center">
          {/* Across the world text */}
          <div className="flex flex-col justify-center animate-fade-in-up lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Across the world</h2>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              Connect with new clients across the world by adding more payment providers to your app or product.
              <br /><br />
              Collect payments from your users across the world by leveraging our rich network of payment providers working in Africa.
            </p>
          </div>
          
          {/* Globe illustration */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <Image
              src="/images/Connected world-amico 1.png"
              alt="Connected world"
              width={550}
              height={450}
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Row: Powerful and easy-to-use APIs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 xl:gap-16 items-center">
          {/* API illustration */}
          <div className="flex justify-center lg:justify-start animate-fade-in-up">
            <Image
              src="/images/Group 106.png"
              alt="Powerful APIs"
              width={550}
              height={350}
              className="object-contain"
            />
          </div>
          
          {/* API content - balanced text sizes to match image height */}
          <div className="flex flex-col justify-center animate-fade-in-right h-full">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">Powerful and easy-to-use APIs</h2>
            <p className="text-gray-600 mb-8 max-w-xl text-base lg:text-lg leading-relaxed">
              Designed to help developers save hours on integrating payment methods.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Prebuilt integrations */}
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">Prebuilt integrations</h3>
                <p className="text-gray-600 mb-4 text-sm lg:text-base leading-relaxed">
                  Use integrations for systems like WooCommerce and more.
                </p>
                <a href="#" className="inline-flex items-center text-[#FFB800] font-medium hover:underline text-base">
                  Explore
                  <ArrowRight className="ml-2 w-4 h-4 text-[#FFB800]" />
                </a>
              </div>
              
              {/* Popular Tools */}
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-3">Popular Tools</h3>
                <p className="text-gray-600 mb-4 text-sm lg:text-base leading-relaxed">
                  We offer libraries and SDKs to make it easier for developers to use our payment solution.
                </p>
                <a href="#" className="inline-flex items-center text-[#FFB800] font-medium hover:underline text-base">
                  See libraries
                  <ArrowRight className="ml-2 w-4 h-4 text-[#FFB800]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}