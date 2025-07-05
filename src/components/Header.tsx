"use client";
import React, { useState } from "react";
import Button from "../components/Button";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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
        {/* Desktop Nav */}
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
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 ml-2 focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            // Cancel (X) icon
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-fade-in-down">
          <nav className="flex flex-col gap-4 px-6 py-4 font-medium text-gray-700 text-base">
            <a
              className="hover:text-primary transition"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </a>
            <a
              className="hover:text-primary transition"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              className="hover:text-primary transition"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Company
            </a>
            <a
              className="hover:text-primary transition"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Developers
            </a>
            <a
              className="hover:text-primary transition"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Help
            </a>
            <Button
              className="w-full mt-2 bg-[#222F3E] text-white py-2 text-sm font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Sign in
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
