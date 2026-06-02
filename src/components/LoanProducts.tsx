"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coins, Briefcase, HeartHandshake, ShieldCheck, Zap, ReceiptIndianRupee } from "lucide-react";

interface LoanProductProps {
  title: string;
  rate: string;
  desc: string;
  benefits: string[];
  icon: React.ReactNode;
  popular?: boolean;
}

function LoanCard({ title, rate, desc, benefits, icon, popular = false }: LoanProductProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="glass-panel rounded-3xl p-8 hover:scale-[1.03] hover:shadow-xl hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden h-full"
    >
      {/* Decorative colored glow in card corner */}
      <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-brand-gold/5 group-hover:bg-brand-gold/10 transition-all duration-500 filter blur-xl"></div>

      <div>
        {/* Loan Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 dark:bg-slate-800 flex items-center justify-center text-brand-blue dark:text-brand-gold group-hover:bg-brand-blue group-hover:text-white dark:group-hover:bg-brand-gold dark:group-hover:text-brand-blue transition-all duration-300 shadow-inner">
            {icon}
          </div>
          {/* Highlighted rate badge */}
          <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/25 text-xs font-heading font-black">
            Rates from {rate}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading font-black text-2xl text-brand-blue dark:text-white mb-3 group-hover:text-brand-gold-dark dark:group-hover:text-brand-gold transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {desc}
        </p>

        {/* Bullet details */}
        <ul className="space-y-3 mb-8">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2.5 text-xs font-medium text-slate-500 dark:text-slate-400">
              <Zap size={14} className="text-brand-gold flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button trigger */}
      <a
        href="#contact"
        className="w-full text-center font-bold text-xs py-3.5 rounded-xl border border-brand-blue/30 dark:border-brand-gold/30 hover:bg-brand-blue hover:text-white dark:hover:bg-brand-gold dark:hover:text-brand-blue text-brand-blue dark:text-brand-gold transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-95 shadow-sm"
      >
        <ShieldCheck size={15} />
        Apply Now
      </a>
    </motion.div>
  );
}

export default function LoanProducts() {
  const loans: LoanProductProps[] = [
    {
      title: "Gold Loan",
      rate: "9.50% p.a.",
      desc: "Fastest physical liquidity against your gold jewelry. Complete safety in our strongroom vaults with no hidden charges.",
      benefits: [
        "Instant approval and cash disbursement in 30 minutes",
        "Minimal paperwork (Only basic KYC needed)",
        "Zero pre-closure penalties or processing fees",
        "Secure physical custody with insurance coverage"
      ],
      icon: <Coins size={28} />,
    },
    {
      title: "Business Loan",
      rate: "12.00% p.a.",
      desc: "Fuel your enterprise growth, stock inventory, or fund business expansions with our custom MSME financial assistance.",
      benefits: [
        "High loan amount options for eligible members",
        "Flexible repayment tenures up to 60 months",
        "Doorstep documentation and personalized assistance",
        "Special interest concessions for female entrepreneurs"
      ],
      icon: <Briefcase size={28} />,
    },
    {
      title: "Emergency Loan",
      rate: "11.00% p.a.",
      desc: "Instant cash relief for medical expenses, child education fees, or urgent personal financial gaps without delays.",
      benefits: [
        "Ultra-fast processing within 24 hours of submission",
        "No high collateral requirements",
        "Transparent approval process and clear policies",
        "Flexible EMIs tailored to your monthly salary flow"
      ],
      icon: <HeartHandshake size={28} />,
    },
  ];

  return (
    <section id="loans" className="py-20 bg-white dark:bg-brand-blue-deep transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4"
          >
            <ReceiptIndianRupee size={12} />
            <span>Fast &amp; Flexible Financial Support</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-blue dark:text-white leading-tight"
          >
            Hassle-Free Low Interest <br />
            <span className="shimmer-text">Loan Products</span>
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
            Overcome financial boundaries. We offer quick disbursals and friendly repayments so you can capitalize on opportunities instantly.
          </motion.p>
        </div>

        {/* Loan Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {loans.map((loan, idx) => (
            <LoanCard key={idx} {...loan} />
          ))}
        </div>
      </div>
    </section>
  );
}
