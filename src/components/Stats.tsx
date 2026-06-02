"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Award, ShieldCheck, Landmark } from "lucide-react";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

function StatCounter({ value, suffix, label, sublabel, icon }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const end = value;
    const increment = Math.ceil(end / (duration / 16)); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isInView]);

  // Format big numbers with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString("en-IN");
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-panel rounded-2xl p-6 sm:p-8 flex items-center gap-5 hover:scale-[1.03] hover:border-brand-gold/40 transition-all duration-300 relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon Wrapper */}
      <div className="w-14 h-14 rounded-xl bg-brand-blue/5 dark:bg-brand-gold/10 flex items-center justify-center text-brand-blue dark:text-brand-gold group-hover:bg-brand-blue dark:group-hover:bg-brand-gold group-hover:text-white dark:group-hover:text-brand-blue transition-all duration-300 shadow-sm">
        {icon}
      </div>

      {/* Numerical Data */}
      <div className="flex-1">
        <h3 className="font-heading font-black text-3xl sm:text-4xl text-brand-blue dark:text-white flex items-baseline">
          {formatNumber(count)}
          <span className="text-brand-gold ml-0.5">{suffix}</span>
        </h3>
        <p className="font-heading font-extrabold text-sm text-slate-800 dark:text-brand-gold-light mt-1">
          {label}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {sublabel}
        </p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const statsData: StatItemProps[] = [
    {
      value: 10000,
      suffix: "+",
      label: "Happy Members",
      sublabel: "Growing together through mutual support",
      icon: <Users size={26} />,
    },
    {
      value: 50,
      suffix: " Cr+",
      label: "Trusted Deposits",
      sublabel: "Secure earnings and total transparency",
      icon: <Landmark size={26} />,
    },
    {
      value: 5000,
      suffix: "+",
      label: "Loans Processed",
      sublabel: "Supporting dreams with instant financing",
      icon: <Award size={26} />,
    },
    {
      value: 5,
      suffix: "+",
      label: "Service Branches",
      sublabel: "Proximity service and personal assistance",
      icon: <ShieldCheck size={26} />,
    },
  ];

  return (
    <section className="relative z-20 py-10 bg-slate-50 dark:bg-brand-blue-deep/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-24 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <StatCounter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
