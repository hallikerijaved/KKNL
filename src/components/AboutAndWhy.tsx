"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Lock, Sparkles, HardHat, CircleUserRound, Landmark, Hourglass, HelpCircle } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-panel rounded-2xl p-6 hover:scale-[1.02] hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
    >
      <div className="w-12 h-12 rounded-xl bg-brand-blue/5 dark:bg-brand-gold/10 flex items-center justify-center text-brand-blue dark:text-brand-gold flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-heading font-black text-lg text-brand-blue dark:text-white mb-1.5">
          {title}
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function AboutAndWhy() {
  const features: FeatureCardProps[] = [
    {
      title: "Trusted Nidhi Institution",
      desc: "Fully registered under the Ministry of Corporate Affairs (MCA), Government of India, complying strictly with Nidhi Rules 2014.",
      icon: <Landmark size={22} />,
    },
    {
      title: "Secure Investments",
      desc: "All deposits are secure and reinvested inside conservative, collateral-backed local portfolios with 100% principal safety.",
      icon: <Lock size={22} />,
    },
    {
      title: "Transparent Policies",
      desc: "Zero hidden charges, clear calculation mechanisms, and timely interest credit. We build relationships purely on absolute honesty.",
      icon: <ShieldCheck size={22} />,
    },
    {
      title: "Quick Loan Processing",
      desc: "Get fast approvals on gold loans within 30 minutes and business evaluations under minimal documentation processes.",
      icon: <Hourglass size={22} />,
    },
    {
      title: "Experienced Core Team",
      desc: "Our board of directors and financial advisors carry decades of cooperative banking experience to guide you correctly.",
      icon: <Award size={22} />,
    },
    {
      title: "Customer-Centric Service",
      desc: "Dedicated relationship managers, daily Pigmi collections, doorstep services, and flexible hours focused around your convenience.",
      icon: <CircleUserRound size={22} />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-brand-blue-deep transition-colors relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-brand-gold/5 filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 rounded-full bg-brand-blue/5 filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Layout: About Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* About Left visual representation */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden border border-brand-gold/20 shadow-2xl bg-gradient-to-br from-[#18144c] to-[#0f0d2d] p-8 text-white"
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="text-4xl opacity-15 select-none">🏛️</span>
              </div>

              <h3 className="font-heading font-black text-2xl text-brand-gold mb-6 border-b border-white/10 pb-3 flex items-center gap-2">
                <Sparkles size={20} />
                Corporate Information
              </h3>

              <div className="space-y-5 text-sm">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">
                    Official Corporate Name
                  </span>
                  <span className="font-bold text-slate-200">
                    Kusumbha Kalyan Nidhi Limited
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">
                    Registration Classification
                  </span>
                  <span className="font-bold text-slate-200">
                    Nidhi Company (Mutual Benefit Financial Institution)
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">
                    Registrar Compliance
                  </span>
                  <span className="font-bold text-slate-200">
                    Ministry of Corporate Affairs (MCA), Govt. of India
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">
                    Corporate Identity Number (CIN)
                  </span>
                  <span className="font-heading font-extrabold text-brand-gold tracking-widest text-xs">
                    U65991MH2026PLC999999
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">
                    Regulatory Mandate
                  </span>
                  <span className="text-xs text-slate-300 leading-relaxed block mt-1">
                    To cultivate the habit of thrift and savings among our members, receiving deposits from and lending only to our shareholders for mutual financial safety.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* About Right narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4">
                <Landmark size={12} />
                <span>About Our Nidhi Company</span>
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-blue dark:text-white leading-tight mb-6">
                Cultivating Thrift, <br />
                Securing <span className="shimmer-text">Mutual Prosperity</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Kusumbha Kalyan Nidhi Limited is dedicated to promoting savings and providing accessible, secure financial services to its members. Our operations are governed by transparent guidelines designed to safeguard every rupee invested by our community shareholders.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                Unlike commercial banks, we operate on the fundamental principle of cooperative growth. We focus on transparency, deep-rooted local trust, and long-term financial security. By recycling capital strictly within our local community shareholders, we fuel micro-businesses, back family dreams, and ensure financial safety.
              </p>

              {/* Legal Checklist items */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Registered with Gov. MCA Rules</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">100% Audited Financial Reports</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Strict Safe Lending Protocols</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Exclusive Shareholder Dividends</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Why Choose Section (Features Grid) */}
        <div>
          {/* Section Subhead */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4"
            >
              <HelpCircle size={12} />
              <span>Why Choose Us</span>
            </motion.div>
            <h3 className="font-heading font-black text-3xl sm:text-4xl text-brand-blue dark:text-white leading-tight">
              The Six Pillars Of Our <br />
              <span className="shimmer-text">Trust &amp; Professionalism</span>
            </h3>
            <div className="w-20 h-1 bg-brand-gold rounded-full mx-auto my-5"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <FeatureCard key={idx} {...feat} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
