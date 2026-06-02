"use client";

import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-11", showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-2 select-none cursor-pointer">
      <div className={`${className} aspect-square relative flex items-center justify-center`}>
        {/* Crest SVG emblem */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" className="w-full h-full">
          <defs>
            <linearGradient id="crest-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F3D97B" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#AA821C" />
            </linearGradient>
            <linearGradient id="crest-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A44C4" />
              <stop offset="100%" stopColor="#2E2A7B" />
            </linearGradient>
          </defs>
          {/* Outer Crest Shield */}
          <path d="M 40 5 L 72 20 Q 72 52 40 78 Q 8 52 8 20 Z" fill="url(#crest-blue)" stroke="url(#crest-gold)" strokeWidth={2.5} />
          {/* Wealth Growth Sprout */}
          <path d="M 40 60 L 40 28 M 40 43 Q 32 38 25 47 M 40 36 Q 48 31 55 40" fill="none" stroke="url(#crest-gold)" strokeWidth={3} strokeLinecap="round" />
          {/* Golden Coin Shield Core */}
          <circle cx="40" cy="22" r="5" fill="url(#crest-gold)" />
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-heading font-black text-2xl tracking-wide text-brand-blue dark:text-white transition-colors">
            KKNL
          </span>
          <span className="font-heading font-bold text-[8.5px] tracking-[1.5px] text-brand-gold-dark dark:text-brand-gold transition-colors mt-0.5 uppercase">
            Kusumbha Kalyan Nidhi Ltd.
          </span>
          <span className="text-[6.5px] tracking-[1px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
            Govt. Registered Nidhi Company
          </span>
        </div>
      )}
    </div>
  );
}
