"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-brand-gold/15 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-3 focus:outline-none group"
      >
        <span className="font-heading font-extrabold text-base sm:text-lg text-brand-blue dark:text-white group-hover:text-brand-gold transition-colors pr-4">
          {question}
        </span>
        <div className={`w-8 h-8 rounded-lg bg-brand-blue/5 dark:bg-brand-gold/10 text-brand-blue dark:text-brand-gold flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDown size={16} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 pt-1 text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-4xl pr-8">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const faqs: FAQItemProps[] = [
    {
      question: "How do I become a member and open a savings account?",
      answer: "As a Nidhi Company, we provide financial services exclusively to our members. To open a savings account, you must purchase a minimum of one equity share of ₹10 (making you a legal shareholder/member) and submit basic KYC documents (Aadhaar Card, PAN Card, passport photos, and address proof). The membership approval is instant, and your account is activated immediately.",
    },
    {
      question: "What is the process to apply for a Gold Loan?",
      answer: "Applying for a Gold Loan is simple and takes less than 30 minutes. Visit our Yashwantnagar branch with your gold jewelry ornaments and basic KYC documents. Our certified on-site gold evaluators will assess the purity and weight of your ornaments. Based on standard market valuation rates, we will instantly disburse cash or transfer the funds directly to your savings account. Your jewelry is sealed in highly secure vaults with 100% insurance.",
    },
    {
      question: "What are the interest rates and terms for Fixed Deposits (FDs)?",
      answer: "KKNL offers extremely competitive Fixed Deposit interest rates up to 8.25% p.a., which are significantly higher than traditional commercial banks. The minimum investment tenure is 6 months, up to a maximum of 60 months. Senior citizens receive an additional interest rate bonus of 0.50% p.a. on all tenures. Interest can be paid monthly, quarterly, or accumulated till maturity depending on your preference.",
    },
    {
      question: "What are the benefits of starting a Recurring Deposit (RD)?",
      answer: "A Recurring Deposit is perfect for building wealth through small monthly contributions (starting at ₹500/month). It instills disciplined financial savings habits, and your funds compound quarterly at interest rates up to 7.75% p.a. This guarantees a substantial, lump-sum payout upon maturity to fund milestones like children's education, home renovations, or major purchases.",
    },
    {
      question: "Who is eligible for Nidhi Company membership?",
      answer: "Any Indian citizen above the age of 18 is eligible to become a shareholder and member of Kusumbha Kalyan Nidhi Limited, subject to verification of KYC documents. Under Nidhi rules set by the Ministry of Corporate Affairs, we cannot enroll corporations, partnerships, or trusts as members, and deposits/loans are strictly restricted within individual human members for mutual cooperative security.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-brand-blue-deep/30 transition-colors relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4"
          >
            <HelpCircle size={12} />
            <span>Frequently Asked Questions</span>
          </motion.div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-brand-blue dark:text-white leading-tight">
            Clear Answers To Your <br />
            <span className="shimmer-text">Financial Questions</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold rounded-full mx-auto my-5"></div>
        </div>

        {/* Accordions Wrapper */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-brand-gold/15 shadow-xl">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>

      </div>
    </section>
  );
}
