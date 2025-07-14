"use client";
import React from "react";
import Button from "./Button";
import Section from "./Section";

export default function Hero() {
  return (
    <Section bg="relative overflow-hidden" className="!pt-0 !pb-4 font-['Montserrat']">
      {/* Professional Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-gray-100"></div>
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gray-400/10 to-emerald-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      {/* Floating Payment & Wallet Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Credit Card Icons */}
        <div className="absolute top-32 left-20 w-10 h-6 bg-gradient-to-r from-gray-500 to-emerald-500 rounded-lg shadow-md animate-float opacity-60 transform rotate-12">
          <div className="absolute inset-0 bg-white/90 rounded-lg m-0.5 flex items-center justify-center">
            <svg className="w-5 h-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 4h20v16H2V4zm18 2H4v3h16V6zm0 5H4v7h16v-7z"/>
            </svg>
          </div>
        </div>
        
        <div className="absolute top-48 right-28 w-10 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-md animate-float-delayed opacity-60 transform -rotate-12">
          <div className="absolute inset-0 bg-white/90 rounded-lg m-0.5 flex items-center justify-center">
            <svg className="w-5 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2 4h20v16H2V4zm18 2H4v3h16V6zm0 5H4v7h16v-7z"/>
            </svg>
          </div>
        </div>
        
        {/* Wallet Icon */}
        <div className="absolute bottom-64 left-24 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-md animate-float-slow opacity-50 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 18v1a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v1h-9a2 2 0 00-2 2v8a2 2 0 002 2h9zM12 8h10v8H12V8zm2 2v4h2v-4h-2z"/>
          </svg>
        </div>
        
        {/* Mobile Payment Icon */}
        <div className="absolute bottom-80 right-20 w-6 h-10 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg shadow-md animate-float opacity-50">
          <div className="absolute inset-0 bg-white rounded-lg m-0.5 flex items-center justify-center">
            <svg className="w-3 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h1a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1h1zM9 3v1h6V3H9zm-2 3v12h10V6H7zm5 2a3 3 0 013 3v1h-6v-1a3 3 0 013-3zm-1 3h2v-1a1 1 0 00-2 0v1z"/>
            </svg>
          </div>
        </div>
        
        {/* Coin Icons */}
        <div className="absolute top-80 left-32 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-md animate-float-delayed opacity-40 flex items-center justify-center">
          <span className="text-white text-xs font-bold">$</span>
        </div>
        
        <div className="absolute bottom-96 right-32 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-md animate-float-slow opacity-40 flex items-center justify-center">
          <span className="text-white text-xs font-bold">£</span>
        </div>
        
        {/* Security Shield Icon */}
        <div className="absolute top-60 left-60 w-7 h-7 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-md animate-float-delayed opacity-45 flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1l3.09 4.26L22 5.86l-1.65 3.36L22 12.58l-6.91-.6L12 17.23 8.91 11.98 2 12.58l1.65-3.36L2 5.86l6.91.4L12 1z"/>
          </svg>
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 pb-4 min-h-[85vh]">
        <div className="flex-1 text-left flex flex-col justify-center animate-fade-in-up">
          {/* Enhanced Main Heading */}
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight font-['Montserrat']">
            <span className="bg-gradient-to-r from-green-900 via-blue-900 to-green-900 bg-clip-text text-transparent">
              Seamlessly
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-900 to-emerald-700 bg-clip-text text-transparent">
              Accept Payments
            </span>
          </h1>
          
          {/* Enhanced Description */}
          <div className="mb-8 space-y-3 font-['Montserrat']">
            <p className="text-base text-gray-700 font-medium leading-relaxed">
              PayUnit, the complete e-commerce and mobile payment solution
              <br />
              where <span className="text-gray-600 font-semibold">dematerialized payment becomes effortless</span>.
            </p>
            
            <p className="text-sm text-gray-600 leading-relaxed">
              Discover our intelligent payment solutions for each of your sales
              <br />
              channels and <span className="text-gray-700 font-medium">transform your business</span> with cutting-edge technology.
            </p>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 font-['Montserrat']">
            <Button className="group relative bg-gradient-to-r from-gray-600 to-emerald-600 text-white hover:from-gray-700 hover:to-emerald-700 font-semibold text-sm px-6 py-3 transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px] min-w-[140px] border-0 shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Get Started</span>
              <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            
            <Button variant="secondary" className="group bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-semibold text-sm px-6 py-3 transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px] min-w-[140px] shadow-lg hover:shadow-xl">
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Contact Sales</span>
            </Button>
          </div>
        </div>
        
        {/* Enhanced 3D Payment Animation */}
        <div className="flex-1 flex justify-center lg:justify-end relative animate-fade-in-right">
          <div className="relative group w-[600px] h-[500px]">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 transform group-hover:scale-110"></div>
            
            {/* 3D Payment Animation Container */}
            <div className="relative rounded-2xl p-4 transition-all duration-500 transform group-hover:scale-105 w-full h-full overflow-visible">
              
              {/* Main 3D Payment Animation SVG */}
              <svg 
                viewBox="0 0 400 320" 
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Elements */}
                <defs>
                  <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1f2937" />
                    <stop offset="100%" stopColor="#374151" />
                  </linearGradient>
                  <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                  <linearGradient id="successGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="rgba(0,0,0,0.3)"/>
                  </filter>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Animated Background Circles */}
                <circle cx="50" cy="50" r="30" fill="rgba(16, 185, 129, 0.1)" className="animate-pulse-slow">
                  <animate attributeName="r" values="30;40;30" dur="4s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="350" cy="80" r="25" fill="rgba(59, 130, 246, 0.1)" className="animate-pulse-slow">
                  <animate attributeName="r" values="25;35;25" dur="5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.1;0.2;0.1" dur="5s" repeatCount="indefinite"/>
                </circle>
                
                {/* Main Credit Card (3D perspective) */}
                <g className="payment-card" filter="url(#shadow)">
                  <rect x="80" y="120" width="180" height="110" rx="12" fill="url(#cardGradient)" transform="perspective(1000px) rotateY(-10deg)">
                    <animate attributeName="transform" values="perspective(1000px) rotateY(-10deg);perspective(1000px) rotateY(-15deg);perspective(1000px) rotateY(-10deg)" dur="6s" repeatCount="indefinite"/>
                  </rect>
                  
                  {/* Card Details */}
                  <rect x="90" y="140" width="40" height="25" rx="4" fill="#fbbf24" opacity="0.9">
                    <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite"/>
                  </rect>
                  <rect x="90" y="180" width="80" height="3" rx="1" fill="rgba(255,255,255,0.6)"/>
                  <rect x="90" y="190" width="100" height="3" rx="1" fill="rgba(255,255,255,0.4)"/>
                  <rect x="90" y="200" width="60" height="3" rx="1" fill="rgba(255,255,255,0.6)"/>
                  
                  {/* Card Number dots */}
                  <circle cx="140" cy="160" r="2" fill="rgba(255,255,255,0.8)"/>
                  <circle cx="150" cy="160" r="2" fill="rgba(255,255,255,0.8)"/>
                  <circle cx="160" cy="160" r="2" fill="rgba(255,255,255,0.8)"/>
                  <circle cx="170" cy="160" r="2" fill="rgba(255,255,255,0.8)"/>
                </g>
                
                {/* Mobile Phone with Payment Screen */}
                <g className="mobile-phone" filter="url(#shadow)">
                  <rect x="220" y="80" width="100" height="160" rx="20" fill="url(#phoneGradient)" transform="perspective(1000px) rotateY(10deg)">
                    <animate attributeName="transform" values="perspective(1000px) rotateY(10deg);perspective(1000px) rotateY(15deg);perspective(1000px) rotateY(10deg)" dur="5s" repeatCount="indefinite"/>
                  </rect>
                  
                  {/* Phone Screen */}
                  <rect x="230" y="100" width="80" height="120" rx="8" fill="rgba(255,255,255,0.95)"/>
                  
                  {/* Payment App UI */}
                  <rect x="235" y="110" width="70" height="8" rx="4" fill="#e5e7eb"/>
                  <rect x="235" y="125" width="50" height="6" rx="3" fill="#9ca3af"/>
                  
                  {/* Payment Amount */}
                  <text x="270" y="150" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1f2937">$127</text>
                  
                  {/* Payment Method Icons */}
                  <circle cx="245" cy="170" r="8" fill="#1f2937"/>
                  <circle cx="265" cy="170" r="8" fill="#059669"/>
                  <circle cx="285" cy="170" r="8" fill="#3b82f6"/>
                  
                  {/* Pay Button */}
                  <rect x="240" y="185" width="40" height="20" rx="10" fill="url(#successGradient)">
                    <animate attributeName="fill" values="url(#successGradient);#10b981;url(#successGradient)" dur="2s" repeatCount="indefinite"/>
                  </rect>
                  <text x="260" y="197" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">PAY</text>
                </g>
                
                {/* Floating Payment Icons */}
                <g className="floating-icons">
                  {/* Dollar Sign */}
                  <circle cx="60" cy="180" r="15" fill="rgba(16, 185, 129, 0.2)" filter="url(#glow)">
                    <animate attributeName="cy" values="180;170;180" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <text x="60" y="186" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#059669">$</text>
                  
                  {/* Security Shield */}
                  <g transform="translate(340, 160)">
                    <circle r="15" fill="rgba(59, 130, 246, 0.2)" filter="url(#glow)">
                      <animate attributeName="r" values="15;18;15" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <path d="M-6,-8 L0,-12 L6,-8 L6,4 C6,8 0,10 0,10 C0,10 -6,8 -6,4 Z" fill="#3b82f6"/>
                    <path d="M-3,-2 L-1,0 L3,-4" stroke="white" strokeWidth="1.5" fill="none"/>
                  </g>
                  
                  {/* WiFi Signal */}
                  <g transform="translate(30, 280)">
                    <circle r="12" fill="rgba(139, 69, 19, 0.2)">
                      <animate attributeName="r" values="12;15;12" dur="3.5s" repeatCount="indefinite"/>
                    </circle>
                    <path d="M-8,-4 C-8,-4 -4,-8 0,-8 C4,-8 8,-4 8,-4" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.8"/>
                    <path d="M-5,-1 C-5,-1 -2,-4 0,-4 C2,-4 5,-1 5,-1" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.9"/>
                    <circle cy="2" r="1.5" fill="#8b5cf6"/>
                  </g>
                </g>
                
                {/* Transaction Flow Animation */}
                <g className="transaction-flow">
                  {/* Animated connection lines */}
                  <path d="M170 175 Q200 160 220 160" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.7" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" values="0;-10" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
                  </path>
                  
                  {/* Success indicators */}
                  <circle cx="190" cy="140" r="4" fill="#10b981">
                    <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </g>
                
                {/* Success Animation */}
                <g className="success-animation" transform="translate(320, 240)">
                  <circle r="20" fill="rgba(16, 185, 129, 0.3)" className="success-circle">
                    <animate attributeName="r" values="20;25;20" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <path d="M-8,-2 L-3,3 L8,-8" stroke="#10b981" strokeWidth="4" fill="none" strokeLinecap="round">
                    <animate attributeName="stroke-dasharray" values="0,20;20,0;0,20" dur="3s" repeatCount="indefinite"/>
                  </path>
                </g>
                
                {/* Floating Particles */}
                <g className="particles">
                  <circle cx="100" cy="60" r="2" fill="#10b981" opacity="0.6">
                    <animate attributeName="cy" values="60;40;60" dur="4s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.6;0;0.6" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="300" cy="280" r="1.5" fill="#3b82f6" opacity="0.8">
                    <animate attributeName="cy" values="280;260;280" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="150" cy="40" r="1" fill="#8b5cf6" opacity="0.7">
                    <animate attributeName="cy" values="40;20;40" dur="3.5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.7;0;0.7" dur="3.5s" repeatCount="indefinite"/>
                  </circle>
                </g>
              </svg>
              
              {/* Floating Status Indicators */}
              <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                ✓ Secure
              </div>
              
              <div className="absolute bottom-2 left-2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-bounce">
                💳 Processing
              </div>
              
              <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                🔒 Encrypted
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="relative z-10 flex justify-center pb-2 font-['Montserrat']">
        <div className="group cursor-pointer">
          <div className="w-10 h-10 bg-white/80 backdrop-blur-sm border-2 border-gray-300 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:border-blue-400 transition-all duration-300 transform group-hover:scale-110">
            <svg 
              className="w-5 h-5 text-gray-500 group-hover:text-blue-500 animate-bounce transition-colors duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(12deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-20px) rotate(-12deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes pop-in {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
          100% { transform: scale(1) rotate(360deg); opacity: 0.8; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite 2s;
        }
        
        .animate-pop-in {
          animation: pop-in 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        /* Staggered animation delays for payment icons */
        .animate-float:nth-child(1) { animation-delay: 0s; }
        .animate-float:nth-child(2) { animation-delay: 0.5s; }
        .animate-float:nth-child(3) { animation-delay: 1s; }
        .animate-float:nth-child(4) { animation-delay: 1.5s; }
        .animate-float:nth-child(5) { animation-delay: 2s; }
        .animate-float:nth-child(6) { animation-delay: 2.5s; }
        
        /* Hover effects for payment icons */
        .payment-icon:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
        
        /* Professional grid animation */
        .grid-animate {
          animation: grid-move 20s linear infinite;
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </Section>
  );
}