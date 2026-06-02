"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Flame, Landmark, Sparkles, TrendingUp } from "lucide-react";

interface DepositSchemeProps {
  name: string;
  interestRate: string;
  popular?: boolean;
  tagline: string;
  features: string[];
  ctaText: string;
  badge?: string;
  badgeColor?: string;
}

function DepositCard({ name, interestRate, popular = false, tagline, features, ctaText, badge }: DepositSchemeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`glass-panel rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 hover:scale-[1.03] ${
        popular
          ? "border-2 border-brand-gold shadow-xl shadow-brand-gold/10 lg:-translate-y-4 bg-gradient-to-b from-[#18144c] to-[#0f0d2d]"
          : "border border-slate-200 dark:border-brand-gold/10"
      } h-full`}
    >
      {/* Decorative Star for popular scheme */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-blue font-heading font-black text-xs px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg tracking-wider uppercase">
          <Sparkles size={12} className="animate-pulse" />
          <span>{badge || "Highest Yield"}</span>
        </div>
      )}

      <div>
        {/* Header Details */}
        <div className="mb-6">
          <h3 className={`font-heading font-black text-2xl mb-1 ${popular ? "text-white" : "text-brand-blue dark:text-white"}`}>
            {name}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">{tagline}</p>
        </div>

        {/* Big Highlighted Interest Rate */}
        <div className="mb-8 bg-brand-blue/[0.03] dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.04] rounded-2xl p-5 text-center relative overflow-hidden">
          <span className="text-[10px] text-slate-400 dark:text-slate-400 uppercase tracking-widest block font-bold mb-1">
            Interest Rate Yield
          </span>
          <span className="font-heading font-black text-4xl sm:text-5xl text-brand-gold block">
            {interestRate}
          </span>
          <span className="text-[10px] text-slate-400 dark:text-slate-400 block mt-1">
            *per annum yield rates
          </span>
        </div>

        {/* Feature Checkmarks */}
        <ul className="space-y-4 mb-10">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <ShieldCheck size={18} className="text-brand-gold flex-shrink-0 mt-0.5" />
              <span className={`text-sm ${popular ? "text-slate-200" : "text-slate-600 dark:text-slate-300"}`}>
                {feat}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <a
        href="#contact"
        className={`w-full text-center font-bold text-sm py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
          popular
            ? "bg-brand-gold text-brand-blue hover:bg-[#b39126] shadow-lg shadow-brand-gold/15 active:scale-95"
            : "bg-brand-blue text-white dark:bg-brand-gold/10 dark:text-brand-gold hover:bg-brand-blue-light dark:hover:bg-brand-gold/20 active:scale-95 border border-transparent dark:border-brand-gold/20"
        }`}
      >
        <TrendingUp size={16} />
        {ctaText}
      </a>
    </motion.div>
  );
}

export default function DepositSchemes() {
  const schemes: DepositSchemeProps[] = [
    {
      name: "Savings Account",
      interestRate: "Up to 4.50%",
      tagline: "High liquidity daily banking savings",
      features: [
        "Earn up to 4.5% interest on account balance",
        "Absolutely transparent - zero hidden fees",
        "Instant cash withdrawal and deposits at branches",
        "Free monthly account statement upon request",
        "Access deposit funds easily anytime you need"
      ],
      ctaText: "Open Savings Account",
    },
    {
      name: "Fixed Deposit (FD)",
      interestRate: "Up to 8.25%",
      popular: true,
      badge: "Highest Return",
      tagline: "Lock in capital for ultimate risk-free growth",
      features: [
        "Premium interest rates up to 8.25% p.a.",
        "Guaranteed safety of principal under Nidhi regulations",
        "Flexible investment tenures from 1 year to 5 years",
        "Extra 0.50% interest bonus for senior citizens",
        "Loan facility available up to 90% of FD balance"
      ],
      ctaText: "Invest in Fixed Deposit",
    },
    {
      name: "Recurring Deposit (RD)",
      interestRate: "Up to 7.75%",
      tagline: "Disciplined monthly deposits compound wealth",
      features: [
        "Start saving with as low as ₹500 every month",
        "High interest yield compounding quarterly",
        "Hassle-free standing instruction setups",
        "Nomination facilities to safeguard family future",
        "Flexible maturity options with guaranteed payouts"
      ],
      ctaText: "Start Recurring Deposit",
    },
  ];

  return (
    <section id="deposits" className="py-20 bg-slate-50 dark:bg-brand-blue-deep/30 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Landmark size={12} />
            <span>Secure Savings &amp; Investment Plans</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-blue dark:text-white leading-tight"
          >
            Compare Our High-Yield <br />
            <span className="shimmer-text">Deposit Schemes</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-20 h-1 bg-brand-gold rounded-full mx-auto my-5"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base"
          >
            Choose the right investment vehicle that aligns with your financial milestones. We offer completely transparent charges and maximized returns for our members.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch pt-4">
          {schemes.map((scheme, index) => (
            <DepositCard key={index} {...scheme} />
          ))}
        </div>
      </div>
    </section>
  );
}
