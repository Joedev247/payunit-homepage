import React from "react";
import Button from "../components/Button";
import Section from "../components/Section";

export default function Hero() {
  return (
    <Section bg="bg-[#f8fafc] border-b">
      <div className="flex flex-col md:flex-row items-center gap-10 pt-8 pb-12">
        <div className="flex-1 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
            Seamlessly
            <br />
            Accept Payments
          </h1>
          <p className="mb-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Accept payments globally with a seamless experience for you and your
            customers.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Button className="px-8 bg-[#222F3E] py-3 text-lg">
              Get started
            </Button>
            <Button variant="secondary" className="px-8 py-3 text-lg">
              Contact Sales
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end relative">
          <img
            src="/Group 104.png"
            alt="Hero"
            className="w-[340px] h-[260px]  object-cover bg-gray-100"
          />
          <div className="absolute -top-10 right-8 w-20 h-20 -full border-4 border-primary overflow-hidden bg-white flex items-center justify-center shadow-lg">
            <img
              src="/file.svg"
              alt="Avatar"
              className="w-16 h-16 -full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
