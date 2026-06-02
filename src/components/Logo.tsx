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
        <img
          src="/KKNL.jpg"
          alt="KKNL Logo"
          className="w-full h-full object-cover rounded-lg border border-brand-gold/30 shadow-sm"
        />
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
