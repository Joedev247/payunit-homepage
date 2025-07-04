import React from "react";
import Button from "../components/Button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-2 md:px-6">
        <div className="flex items-center gap-2">
          <Image
            src="/file.svg"
            alt="Payunit Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span
            className="font-extrabold text-lg tracking-tight text-primary"
            style={{ letterSpacing: "-0.03em" }}
          >
            Payunit
          </span>
        </div>
        <nav className="hidden md:flex gap-6 items-center font-medium text-gray-700 text-sm">
          <a className="hover:text-primary transition" href="#">
            Products
          </a>
          <a className="hover:text-primary transition" href="#">
            Pricing
          </a>
          <a className="hover:text-primary transition" href="#">
            Company
          </a>
          <a className="hover:text-primary transition" href="#">
            Developers
          </a>
          <a className="hover:text-primary transition" href="#">
            Help
          </a>
        </nav>
        <div className="hidden md:block">
          <Button className="px-4 bg-[#222F3E] py-1.5 text-xs shadow font-semibold">
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
}
