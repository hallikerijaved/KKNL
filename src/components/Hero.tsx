"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Landmark, PiggyBank, Sparkles, TrendingUp } from "lucide-react";

export default function Hero() {
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

          {/* Hero Right Dashboard Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[450px] aspect-square flex items-center justify-center"
            >
              {/* Spinning background circles */}
              <div className="absolute inset-0 border border-brand-gold/15 rounded-full animate-[spin_40s_linear_infinite]"></div>
              <div className="absolute inset-8 border border-dashed border-slate-600/30 rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>

              {/* Dynamic CSS Mockup Dashboard */}
              <div className="absolute w-[85%] h-[85%] rounded-3xl bg-slate-900/60 dark:bg-brand-blue-deep/60 backdrop-blur-md border border-brand-gold/20 shadow-2xl p-6 flex flex-col justify-between overflow-hidden group">
                
                {/* Dashboard Top bar */}
                <div className="flex items-center justify-between border-b border-slate-700/50 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">
                    Secure Server
                  </div>
                </div>

                {/* Growth Chart Panel */}
                <div className="my-4 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-slate-400 text-xs block">KKNL Account Net Asset Growth</span>
                      <span className="font-heading font-black text-2xl text-brand-gold">₹500,432.80</span>
                    </div>
                    <span className="text-[10px] bg-brand-gold/10 text-brand-gold font-bold px-2 py-0.5 rounded border border-brand-gold/20">
                      +14.8%
                    </span>
                  </div>
                  
                  {/* SVG Chart */}
                  <div className="w-full h-24 relative overflow-hidden">
                    <svg viewBox="0 0 300 100" className="w-full h-full">
                      <defs>
                        <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      {/* Grid Lines */}
                      <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
                      <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
                      <line x1="0" y1="80" x2="300" y2="80" stroke="rgba(255,255,255,0.05)" strokeDasharray="3" />
                      
                      {/* Chart Path */}
                      <path
                        d="M 0 90 Q 50 60 90 75 T 180 30 T 260 15 T 300 10 L 300 100 L 0 100 Z"
                        fill="url(#chart-fill)"
                      />
                      <path
                        d="M 0 90 Q 50 60 90 75 T 180 30 T 260 15 T 300 10"
                        fill="none"
                        stroke="#D4AF37"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className="animate-[dash_3s_ease-out_infinite]"
                      />
                      
                      {/* Moving glowing node */}
                      <circle cx="300" cy="10" r="4.5" fill="#D4AF37" className="animate-ping" />
                      <circle cx="300" cy="10" r="3" fill="#FFFFFF" />
                    </svg>
                  </div>
                </div>

                {/* Dashboard Bottom Overlay Cards */}
                <div className="grid grid-cols-2 gap-3 mt-1.5 border-t border-slate-700/50 pt-3">
                  <div className="bg-brand-blue-dark/50 border border-slate-700/40 rounded-xl p-2.5 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/15 flex items-center justify-center text-brand-gold">
                      💰
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 block uppercase">FD Rate</span>
                      <span className="font-heading font-extrabold text-xs text-white">Up to 8.25%</span>
                    </div>
                  </div>
                  <div className="bg-brand-blue-dark/50 border border-slate-700/40 rounded-xl p-2.5 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/15 flex items-center justify-center text-brand-gold">
                      ⚡
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 block uppercase">Gold Loan</span>
                      <span className="font-heading font-extrabold text-xs text-white">Quick Disburse</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating micro widgets outside dashboard card */}
              <div className="absolute top-[8%] -right-[4%] bg-slate-900 border border-brand-gold/30 rounded-2xl shadow-xl px-4 py-2 flex items-center gap-2 animate-float">
                <span className="text-emerald-400 text-sm">✓</span>
                <span className="text-xs font-bold text-slate-200">100% Secure Saving</span>
              </div>
              <div className="absolute bottom-[10%] -left-[6%] bg-slate-900 border border-brand-gold/30 rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-3 animate-float-delayed">
                <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center text-[10px] text-brand-blue font-bold">
                  ★
                </div>
                <div className="leading-tight">
                  <span className="text-[10px] text-slate-400 block">Trust Rating</span>
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
