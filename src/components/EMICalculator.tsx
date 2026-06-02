"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, Info, Percent, CalendarClock, Coins } from "lucide-react";

export default function EMICalculator() {
  // States for calculator inputs
  const [amount, setAmount] = useState<number>(500000); // 5 Lakhs
  const [rate, setRate] = useState<number>(10.5); // 10.5%
  const [tenure, setTenure] = useState<number>(24); // 24 Months (2 years)

  // Calculations states
  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [interestRatio, setInterestRatio] = useState<number>(0); // Percentage of interest

  useEffect(() => {
    // EMI Calculation Formula:
    // EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
    const p = amount;
    const r = rate / 12 / 100; // Monthly interest rate
    const n = tenure; // Tenure in months

    if (r === 0) {
      const calculatedEmi = p / n;
      setEmi(calculatedEmi);
      setTotalPayment(p);
      setTotalInterest(0);
      setInterestRatio(0);
    } else {
      const emiVal = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPaymentVal = emiVal * n;
      const totalInterestVal = totalPaymentVal - p;
      
      setEmi(emiVal);
      setTotalPayment(totalPaymentVal);
      setTotalInterest(totalInterestVal);
      setInterestRatio((totalInterestVal / totalPaymentVal) * 100);
    }
  }, [amount, rate, tenure]);

  // Formatter for Currency
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // SVG Pie Chart math: Radius = 50, Circumference = 2 * PI * R = 314.16
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (interestRatio / 100) * circumference;

  return (
    <section id="calculator" className="py-20 bg-slate-50 dark:bg-brand-blue-deep/30 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Calculator size={12} />
            <span>Interactive Planning Tools</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-blue dark:text-white leading-tight"
          >
            Plan Your Payments With <br />
            Our <span className="shimmer-text">EMI Calculator</span>
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
            Calculate your monthly payment details in real time by adjusting amount, interest, and tenure. Make informed decisions instantly.
          </motion.p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Sliders Container (Left) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col gap-8 justify-center">
            
            {/* Amount Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                  <Coins size={16} className="text-brand-gold" />
                  Loan Amount
                </span>
                <span className="font-heading font-black text-lg text-brand-blue dark:text-brand-gold">
                  {formatCurrency(amount)}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="5000000"
                step="10000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-gold"
              />
              <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 mt-2 font-medium">
                <span>₹10,000</span>
                <span>₹50 Lakhs</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                  <Percent size={16} className="text-brand-gold" />
                  Annual Interest Rate
                </span>
                <span className="font-heading font-black text-lg text-brand-blue dark:text-brand-gold">
                  {rate.toFixed(1)}%
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                step="0.5"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-gold"
              />
              <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 mt-2 font-medium">
                <span>5.0% p.a.</span>
                <span>25.0% p.a.</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                  <CalendarClock size={16} className="text-brand-gold" />
                  Loan Tenure
                </span>
                <span className="font-heading font-black text-lg text-brand-blue dark:text-brand-gold">
                  {tenure} Months <span className="text-xs text-slate-400">({(tenure / 12).toFixed(1)} yr)</span>
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="120"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-gold"
              />
              <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 mt-2 font-medium">
                <span>3 Months</span>
                <span>120 Months</span>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="flex gap-2.5 items-start bg-slate-100 dark:bg-brand-blue/20 border border-slate-200/50 dark:border-brand-blue/30 rounded-2xl p-4 mt-2">
              <Info size={18} className="text-brand-gold flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                Calculations are indicative. Actual loan terms, processing fees, and documentations will be detailed by branch managers upon submission of your application forms.
              </p>
            </div>
          </div>

          {/* Outputs / SVG Pie Chart (Right) */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center bg-gradient-to-b from-[#18144c] to-[#0f0d2d] border border-brand-gold/20 shadow-xl text-white">
            
            {/* Numeric Output Cards */}
            <div className="w-full space-y-4">
              <div className="text-center pb-4 border-b border-white/10">
                <span className="text-xs text-slate-400 uppercase tracking-widest block font-bold mb-1">
                  Estimated Monthly EMI
                </span>
                <span className="font-heading font-black text-3xl sm:text-4xl text-brand-gold block">
                  {formatCurrency(emi)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block font-bold mb-0.5">
                    Principal Amount
                  </span>
                  <span className="font-heading font-bold text-sm text-slate-100">
                    {formatCurrency(amount)}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block font-bold mb-0.5">
                    Total Interest Payable
                  </span>
                  <span className="font-heading font-bold text-sm text-brand-gold">
                    {formatCurrency(totalInterest)}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5">
                <span className="text-[10px] text-slate-400 uppercase block font-bold mb-0.5">
                  Total Cumulative Payment
                </span>
                <span className="font-heading font-extrabold text-base text-slate-100">
                  {formatCurrency(totalPayment)}
                </span>
              </div>
            </div>

            {/* Dynamic SVG Pie Chart */}
            <div className="relative w-36 h-36 flex items-center justify-center mt-6 lg:mt-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                {/* Background Ring - represents Principal */}
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  className="text-slate-700 fill-none"
                  strokeWidth="12"
                  stroke="currentColor"
                />
                {/* Active Ring - represents Interest */}
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  className="text-brand-gold fill-none transition-all duration-300"
                  strokeWidth="12"
                  stroke="currentColor"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeOffset}
                  strokeLinecap="round"
                />
              </svg>
              {/* Inner Circle Label */}
              <div className="absolute flex flex-col items-center justify-center leading-none text-center">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Interest</span>
                <span className="font-heading font-black text-sm text-brand-gold mt-1">
                  {interestRatio.toFixed(1)}%
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex gap-6 text-xs mt-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-slate-700 inline-block"></span>
                <span className="text-slate-300">Principal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-brand-gold inline-block"></span>
                <span className="text-slate-300">Interest</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
