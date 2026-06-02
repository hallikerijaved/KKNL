"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Landmark, PiggyBank, Sparkles, TrendingUp } from "lucide-react";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform mouse coordinates into degree rotations
  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const rotateY = useTransform(x, [-200, 200], [-15, 15]);

  // Transform coordinates for glare reflection effect
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useMotionValue(0);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coords from center
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    x.set(mouseX);
    y.set(mouseY);

    // Percentage of cursor inside card
    const pctX = ((event.clientX - rect.left) / width) * 100;
    const pctY = ((event.clientY - rect.top) / height) * 100;
    
    glareX.set(pctX);
    glareY.set(pctY);
    glareOpacity.set(0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    glareOpacity.set(0);
  }

  const glareBackground = useTransform(
    [glareX, glareY],
    (values) => {
      const gx = values[0] as number;
      const gy = values[1] as number;
      return `radial-gradient(circle at ${gx}% ${gy}%, rgba(212, 175, 55, 0.25) 0%, rgba(255, 255, 255, 0.15) 30%, transparent 60%)`;
    }
  );

  const holoBg = useTransform(
    [glareX, glareY],
    (values) => {
      const gx = values[0] as number;
      const gy = values[1] as number;
      return `linear-gradient(${gx + gy}deg, #ffd700, #ff007f, #00f0ff, #ffd700)`;
    }
  );

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-br from-[#0c0a24] via-[#151241] to-[#201c5c] text-white"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-brand-gold rounded-full filter blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brand-blue rounded-full filter blur-[200px] animate-pulse-slow animation-delay-2000"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center self-center lg:self-start gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold font-bold text-xs tracking-wider uppercase mb-6"
            >
              <Sparkles size={12} className="animate-spin-slow" />
              <span>Govt. of India Approved Nidhi Company</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-black text-4xl sm:text-5xl xl:text-6xl tracking-tight leading-[1.1] mb-6"
            >
              Your Trusted Partner for <br />
              <span className="shimmer-text">Savings, Deposits</span> <br className="hidden sm:inline" />
              &amp; <span className="text-white relative inline-block">
                Gold Loans
                <span className="absolute bottom-1 left-0 w-full h-1 bg-brand-gold rounded-full"></span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              Kusumbha Kalyan Nidhi Limited offers secure savings accounts, fixed deposits, recurring deposits, pigmi collection services, and gold loans with complete transparency, safety, and mutual growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-gold to-[#c39e2e] text-brand-blue shadow-lg shadow-brand-gold/15 hover:shadow-brand-gold/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                <ShieldCheck size={18} />
                Open Account
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-xl border border-brand-gold/40 text-brand-gold hover:bg-brand-gold/10 hover:border-brand-gold active:scale-[0.98] transition-all duration-300"
              >
                Apply for Loan
                <ArrowRight size={16} />
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 border-t border-slate-700/50 mt-10 pt-6 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <Landmark size={20} className="text-brand-gold mb-1" />
                <span className="font-heading font-extrabold text-sm">100% Legal</span>
                <span className="text-[10px] text-slate-400">MCA Compliant</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <PiggyBank size={20} className="text-brand-gold mb-1" />
                <span className="font-heading font-extrabold text-sm">Safe Returns</span>
                <span className="text-[10px] text-slate-400">High Interest FDs</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <TrendingUp size={20} className="text-brand-gold mb-1" />
                <span className="font-heading font-extrabold text-sm">Instant Loan</span>
                <span className="text-[10px] text-slate-400">Gold Loans in 30 Min</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right ATM Card Design */}
          <div className="lg:col-span-5 flex justify-center items-center relative perspective-[1200px]">
            {/* Background Glows */}
            <div className="absolute w-[350px] h-[350px] bg-brand-gold/10 rounded-full filter blur-[100px] pointer-events-none z-0"></div>
            <div className="absolute w-[250px] h-[250px] bg-brand-blue/30 rounded-full filter blur-[80px] pointer-events-none z-0"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[420px] aspect-[1.586/1] z-10 flex items-center justify-center"
            >
              {/* Interactive 3D ATM Card */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative w-full h-full rounded-2xl bg-gradient-to-br from-slate-950 via-[#1c194f] to-brand-blue-dark p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-brand-gold/45 cursor-pointer select-none overflow-hidden flex flex-col justify-between"
              >
                {/* Glare effect */}
                <motion.div
                  style={{
                    background: glareBackground,
                    opacity: glareOpacity,
                  }}
                  className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-200"
                />

                {/* Card Header: Logo & Card Type */}
                <div className="flex items-center justify-between z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-md overflow-hidden border border-brand-gold/30 bg-white">
                      <img src="/KKNL.jpg" alt="KKNL Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col leading-none text-left">
                      <span className="font-heading font-black text-sm tracking-wide text-white">
                        KKNL
                      </span>
                      <span className="font-heading font-bold text-[6.5px] tracking-[0.5px] text-brand-gold uppercase">
                        Kusumbha Kalyan Nidhi Ltd.
                      </span>
                    </div>
                  </div>
                  <div className="text-[8px] tracking-[1px] font-extrabold text-brand-gold bg-brand-gold/15 border border-brand-gold/30 rounded px-2 py-0.5 uppercase">
                    Platinum Member
                  </div>
                </div>

                {/* Card Chip & Contactless indicator */}
                <div className="flex items-center justify-between mt-3 z-20">
                  {/* EMV Chip */}
                  <div className="relative w-11 h-8 rounded-md bg-gradient-to-br from-[#f0dfa8] via-[#D4AF37] to-[#b39126] overflow-hidden border border-[#D4AF37]/50 shadow-inner flex items-center justify-center">
                    {/* Chip Lines */}
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-30">
                      <div className="border-r border-b border-black"></div>
                      <div className="border-r border-b border-black"></div>
                      <div className="border-b border-black"></div>
                      <div className="border-r border-b border-black"></div>
                      <div className="border-r border-b border-black"></div>
                      <div className="border-b border-black"></div>
                      <div className="border-r border-black"></div>
                      <div className="border-r border-black"></div>
                      <div></div>
                    </div>
                    <div className="w-3.5 h-3.5 rounded-full border border-black/20 absolute"></div>
                  </div>

                  {/* Contactless waves icon */}
                  <div className="w-6 h-6 flex items-center justify-center text-white/80">
                    <svg viewBox="0 0 24 24" className="w-full h-full stroke-current" fill="none" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M 5 12 A 4 4 0 0 1 5 6" transform="translate(14,0) scale(0.6)" />
                      <path d="M 5 12 A 8 8 0 0 1 5 4" transform="translate(10,0) scale(0.8)" />
                      <path d="M 5 12 A 12 12 0 0 1 5 2" transform="translate(6,0) scale(1)" />
                      <path d="M 5 12 A 16 16 0 0 1 5 0" transform="translate(2,0) scale(1.2)" />
                    </svg>
                  </div>
                </div>

                {/* Card Number */}
                <div className="mt-4 font-mono text-base sm:text-lg tracking-[3.5px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.85)] z-20 text-left select-text">
                  5399 &nbsp; 8812 &nbsp; 3456 &nbsp; 7890
                </div>

                {/* Card Footer: Holder name, Expiry, Hologram & Network */}
                <div className="flex justify-between items-end mt-2 z-20">
                  <div className="flex gap-5 text-left">
                    <div className="flex flex-col">
                      <span className="text-[6px] uppercase tracking-wider text-slate-400">Card Holder</span>
                      <span className="font-heading font-black text-[10px] tracking-wide text-white uppercase mt-0.5">
                        Valued Member
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[6px] uppercase tracking-wider text-slate-400">Valid Thru</span>
                      <span className="font-mono font-bold text-[9px] text-white mt-0.5">
                        12/30
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Shifting Hologram */}
                    <motion.div
                      style={{ background: holoBg }}
                      className="w-8 h-6 rounded opacity-90 border border-white/25 flex items-center justify-center overflow-hidden relative shadow-inner"
                    >
                      <span className="text-[7px] font-black text-white drop-shadow-md tracking-wider">KKNL</span>
                    </motion.div>

                    {/* Network Brand */}
                    <div className="flex flex-col items-end leading-none">
                      <span className="font-heading font-black text-[11px] text-brand-gold italic">Nidhi</span>
                      <span className="text-[5.5px] text-white/80 font-bold uppercase tracking-[1px] mt-0.5">Network</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating micro widgets outside ATM card */}
              <div className="absolute -top-[12%] -right-[5%] bg-slate-900 border border-brand-gold/30 rounded-2xl shadow-xl px-4 py-2 flex items-center gap-2 animate-float pointer-events-none">
                <span className="text-emerald-400 text-sm">✓</span>
                <span className="text-xs font-bold text-slate-200">100% Secure Saving</span>
              </div>
              <div className="absolute -bottom-[12%] -left-[5%] bg-slate-900 border border-brand-gold/30 rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-3 animate-float-delayed pointer-events-none">
                <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center text-[10px] text-brand-blue font-bold">
                  ★
                </div>
                <div className="leading-tight text-left">
                  <span className="text-[9px] text-slate-400 block">Trust Rating</span>
                  <span className="text-xs font-extrabold text-white">Excellent (4.9/5)</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
