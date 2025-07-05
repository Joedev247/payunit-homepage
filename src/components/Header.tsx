"use client";
import React, { useState } from "react";
import Button from "../components/Button";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/Frame.png" 
            alt="Payunit Logo"
            width={75} 
            height={32} 
            className="h-8"
          />
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-gray-800 text-sm">
          <div className="flex items-center gap-1">
            <a className="hover:text-teal-600 transition" href="#">
              Product
            </a>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <div className="flex items-center gap-1">
            <a className="hover:text-teal-600 transition" href="#">
              Use Case
            </a>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <div className="flex items-center gap-1">
            <a className="hover:text-teal-600 transition" href="#">
              Learn
            </a>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <div className="flex items-center gap-1">
            <a className="hover:text-teal-600 transition" href="#">
              Developer
            </a>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <a className="hover:text-teal-600 transition" href="#">
            Pricing
          </a>
        </nav>
        
        <div className="hidden md:block">
          <Button className="px-6 bg-slate-700 hover:bg-slate-800 py-2 text-sm text-white font-medium transition-colors">
            Sign In
          </Button>
        </div>
        
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 ml-2 focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in-down">
          <nav className="flex flex-col gap-4 px-6 py-4 font-medium text-gray-700 text-base">
            <a
              className="hover:text-teal-600 transition"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Product
            </a>
            <a
              className="hover:text-teal-600 transition"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Use Case
            </a>
            <a
              className="hover:text-teal-600 transition"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Learn
            </a>
            <a
              className="hover:text-teal-600 transition"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Developer
            </a>
            <a
              className="hover:text-teal-600 transition"
              href="#"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </a>
            <Button
              className="w-full mt-2 bg-slate-700 hover:bg-slate-800 text-white py-2 text-sm font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}