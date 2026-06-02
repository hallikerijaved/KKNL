"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coins, CircleDollarSign, CalendarDays, BarChartHorizontal, BadgeCent, ShieldAlert, ArrowRight } from "lucide-react";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
  color: string;
}

function ServiceCard({ icon, title, desc, features, color }: ServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="glass-panel rounded-3xl p-8 hover:scale-[1.03] hover:shadow-xl hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full"
    >
      {/* Decorative backdrop glow */}
      <div className={`absolute -right-10 -top-10 w-24 h-24 rounded-full bg-brand-gold/5 group-hover:bg-brand-gold/10 transition-all duration-500 filter blur-xl`}></div>

      <div>
        {/* Animated Icon Container */}
        <div className={`w-14 h-14 rounded-2xl bg-brand-blue/5 dark:bg-slate-800 flex items-center justify-center text-brand-blue dark:text-brand-gold mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white dark:group-hover:bg-brand-gold dark:group-hover:text-brand-blue transition-all duration-300 shadow-inner`}>
          {icon}
        </div>

        {/* Title */}
        <h3 className="font-heading font-black text-2xl text-brand-blue dark:text-white mb-3 group-hover:text-brand-gold-dark dark:group-hover:text-brand-gold transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {desc}
        </p>

        {/* Bullet Key Points */}
        <ul className="space-y-2 mb-8">
          {features.map((feat, index) => (
            <li key={index} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0"></span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button Action Trigger */}
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue dark:text-brand-gold group-hover:translate-x-1.5 transition-transform"
      >
        <span>Learn More &amp; Apply</span>
        <ArrowRight size={16} />
      </a>
    </motion.div>
  );
}

export default function Services() {
  const services: ServiceProps[] = [
    {
      title: "Gold Loan",
      desc: "Get instant cash liquidity against your gold ornaments with minimal documentation and safe physical vault custody.",
      features: [
        "Gold evaluation on-the-spot",
        "Very attractive rates starting at 9.5% p.a.",
        "Zero hidden processing charges",
        "Safe & secured strongroom vaults"
      ],
      icon: <Coins size={28} />,
      color: "gold",
    },
    {
      title: "Savings Account",
      desc: "Grow your idle capital safely with customized Nidhi savings accounts offering liquidity and high interest yields.",
      features: [
        "Earn up to 4.5% interest rates",
        "Instant transaction notifications",
        "Zero balance options for members",
        "Flexible withdrawal systems"
      ],
      icon: <CircleDollarSign size={28} />,
      color: "blue",
    },
    {
      title: "Fixed Deposit (FD)",
      desc: "Lock in your funds for structured tenures and gain maximum, highly secure financial returns on your capital.",
      features: [
        "Compelling returns up to 8.25% p.a.",
        "Flexible investment terms (6 to 60 mo)",
        "Senior citizen special interest bonus (+0.5%)",
        "Auto-renewal and nomination features"
      ],
      icon: <CalendarDays size={28} />,
      color: "gold",
    },
    {
      title: "Recurring Deposit (RD)",
      desc: "Instill disciplined monthly savings habits and watch small sums compound into a massive wealth pool over time.",
      features: [
        "Regular investments starting at ₹500/mo",
        "High compounding interest up to 7.75% p.a.",
        "Flexible payouts upon maturity",
        "Online tracking of deposit accounts"
      ],
      icon: <BarChartHorizontal size={28} />,
      color: "blue",
    },
    {
      title: "Pigmi Collection",
      desc: "Our authorized daily collectors visit your business or home to save small daily savings without visiting branches.",
      features: [
        "Daily micro-saving collector service",
        "Safe digital hand-held confirmation slips",
        "Perfect for small vendors & retailers",
        "No transaction fees or processing fees"
      ],
      icon: <BadgeCent size={28} />,
      color: "gold",
    },
    {
      title: "Member Benefits",
      desc: "Become a shareholder of KKNL and unlock exclusive, high-value financial support schemes and mutual benefits.",
      features: [
        "Nominal shareholding purchase options",
        "Dividend sharing on Nidhi growth",
        "Exclusive financial support programs",
        "Vote on annual member meetings"
      ],
      icon: <ShieldAlert size={28} />,
      color: "blue",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-brand-blue-deep transition-colors relative">
      {/* Decorative Background grid blur */}
      <div className="absolute top-[20%] left-0 w-80 h-80 rounded-full bg-brand-blue/5 dark:bg-brand-blue-light/5 filter blur-[80px]"></div>
      <div className="absolute bottom-[20%] right-0 w-80 h-80 rounded-full bg-brand-gold/5 filter blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-blue dark:text-white leading-tight"
          >
            Empowering Your Dreams With <br />
            Our <span className="shimmer-text">Comprehensive Services</span>
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
            className="text-slate-500 dark:text-slate-400 text-base"
          >
            Kusumbha Kalyan Nidhi Limited provides simple, transparent, and high-yield financial options. Explore our customized wealth creation schemes below.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, index) => (
            <ServiceCard key={index} {...svc} />
          ))}
        </div>
      </div>
    </section>
  );
}
