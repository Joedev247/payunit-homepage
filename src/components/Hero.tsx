import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import Section from "../components/Section";

export default function Hero() {
  return (
    <Section bg="bg-[#F6F9FC]" className="!pt-0 !pb-4">
      <div className="flex flex-col lg:flex-row items-center gap-16 pb-4 min-h-[80vh]">
        <div className="flex-1 text-left flex flex-col justify-center animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Seamlessly
            <br />
            Accept Payments
          </h1>
          
          <div className="mb-8 space-y-4">
            <p className="text-lg text-gray-700 font-medium">
              PayUnit, e-commerce and mobile payment solution
              <br />
              where dematerialized payment becomes simple.
            </p>
            
            <p className="text-lg text-gray-600">
              Discover our payment solutions for each of your sales
              <br />
              channels and give a new dimension to your business.
            </p>
          </div>
          
          <div className="flex flex-row gap-3">
            <Button className="bg-[#2c3e50] text-white hover:bg-white hover:text-[#2c3e50] font-semibold text-sm px-4 py-2 transition-all duration-300 flex items-center justify-center gap-2 min-h-[36px] min-w-[120px] border-2 border-[#2c3e50]">
              Get Started
            </Button>
            <Button variant="secondary" className="font-semibold text-sm px-4 py-2 transition-all duration-300 flex items-center justify-center gap-2 min-h-[36px] min-w-[120px]">
              Contact Sale
            </Button>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center lg:justify-end relative animate-fade-in-right">
          <div className="relative">
            <Image
              src="/images/Group 104.png"
              alt="PayUnit Payment Interface"
              width={450}
              height={350}
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="flex justify-center pb-2 animate-bounce">
        <div className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center cursor-pointer hover:border-gray-600 transition-colors duration-300">
          <svg 
            className="w-4 h-4 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </Section>
  );
}
