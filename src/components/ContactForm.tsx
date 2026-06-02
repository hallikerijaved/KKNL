"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageSquare, Send, CheckCircle, Smartphone, Clock, Sparkles } from "lucide-react";

export default function ContactForm() {
  // Form state
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic Validation
    if (!name.trim() || !mobile.trim()) {
      setError("Please provide both your Name and Mobile Number.");
      return;
    }

    if (mobile.trim().length < 10) {
      setError("Please provide a valid 10-digit mobile number.");
      return;
    }

    // Success simulation
    setIsSubmitted(true);
    setName("");
    setMobile("");
    setEmail("");
    setMessage("");
  };

  const branchPhone = "+912332671234";
  const whatsAppNumber = "912332671234";
  const whatsAppMessage = encodeURIComponent("Hello KKNL, I'm interested in opening an account/applying for a loan. Please provide more details.");

  return (
    <section id="contact" className="py-20 bg-white dark:bg-brand-blue-deep transition-colors relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[30%] right-0 w-[400px] h-[400px] rounded-full bg-brand-gold/5 filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[30%] left-0 w-[400px] h-[400px] rounded-full bg-brand-blue/5 filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4"
          >
            <MessageSquare size={12} />
            <span>Connect with KKNL Advisory</span>
          </motion.div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-blue dark:text-white leading-tight">
            Start Your Prosperity Journey <br />
            <span className="shimmer-text">Get In Touch Today</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold rounded-full mx-auto my-5"></div>
        </div>

        {/* Contact Split layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Contact Left Cards (Advisory Details) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Direct Connect Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 flex-1 flex flex-col justify-between border border-slate-200 dark:border-brand-gold/15 shadow-xl relative overflow-hidden"
            >
              <div>
                <h3 className="font-heading font-black text-2xl text-brand-blue dark:text-white mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-brand-gold" />
                  Direct Advisory Support
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                  Have questions about Nidhi compliance, membership shares, or high interest FDs? Connect directly with our Yashwantnagar branch team. We provide rapid responses and assistance.
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/5 dark:bg-brand-gold/10 text-brand-blue dark:text-brand-gold flex items-center justify-center flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">
                        Call Branch Office
                      </span>
                      <a href={`tel:${branchPhone}`} className="text-sm font-black text-slate-800 dark:text-white hover:text-brand-gold dark:hover:text-brand-gold transition-colors">
                        +91 233 267 1234
                      </a>
                    </div>
                  </div>

                  {/* Mail */}
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/5 dark:bg-brand-gold/10 text-brand-blue dark:text-brand-gold flex items-center justify-center flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">
                        Send Corporate Email
                      </span>
                      <a href="mailto:support@kknlnidhi.com" className="text-sm font-black text-slate-800 dark:text-white hover:text-brand-gold dark:hover:text-brand-gold transition-colors">
                        support@kknlnidhi.com
                      </a>
                    </div>
                  </div>

                  {/* Instant Whatsapp */}
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Smartphone size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">
                        WhatsApp Instant Chat
                      </span>
                      <a
                        href={`https://wa.me/${whatsAppNumber}?text=${whatsAppMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-black text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        Chat with Advisor Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant Call Actions */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                <a
                  href={`tel:${branchPhone}`}
                  className="w-full text-center font-bold text-xs py-3.5 rounded-xl border border-brand-blue/30 dark:border-brand-gold/30 hover:bg-brand-blue dark:hover:bg-brand-gold hover:text-white dark:hover:text-brand-blue text-brand-blue dark:text-brand-gold transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-sm"
                >
                  <Phone size={14} />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${whatsAppNumber}?text=${whatsAppMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center font-bold text-xs py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-all flex items-center justify-center gap-1.5 active:scale-95 shadow-md"
                >
                  <Smartphone size={14} />
                  WhatsApp
                </a>
              </div>

            </motion.div>
          </div>

          {/* Lead capture Form card (Right) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-brand-gold/15 shadow-xl h-full flex flex-col justify-center"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <h3 className="font-heading font-black text-xl text-brand-blue dark:text-white mb-2">
                      Send Secure Message
                    </h3>

                    {/* Validation Error Alert */}
                    {error && (
                      <div className="p-3 bg-red-500/10 text-red-500 border border-red-500/25 rounded-xl text-xs font-semibold">
                        ⚠️ {error}
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-200 block mb-1.5">
                        Full Name <span className="text-brand-gold font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-brand-blue-deep/50 text-slate-800 dark:text-white focus:outline-none focus:border-brand-gold text-sm transition-colors"
                        required
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Mobile */}
                      <div>
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-200 block mb-1.5">
                          Mobile Number <span className="text-brand-gold font-bold">*</span>
                        </label>
                        <input
                          type="tel"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="10-digit mobile number"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-brand-blue-deep/50 text-slate-800 dark:text-white focus:outline-none focus:border-brand-gold text-sm transition-colors"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-200 block mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="username@domain.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-brand-blue-deep/50 text-slate-800 dark:text-white focus:outline-none focus:border-brand-gold text-sm transition-colors"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-200 block mb-1.5">
                        Your Inquiry Message
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can we assist you with our savings schemes or loan products?"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-brand-blue-deep/50 text-slate-800 dark:text-white focus:outline-none focus:border-brand-gold text-sm transition-colors resize-none"
                      />
                    </div>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      className="w-full font-bold text-sm py-4 rounded-xl bg-gradient-to-r from-brand-gold to-[#b39126] text-brand-blue hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-gold/15"
                    >
                      <Send size={15} />
                      Submit Form Details
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-inner animate-bounce">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="font-heading font-black text-2xl text-brand-blue dark:text-white mb-2">
                      Inquiry Submitted Successfully!
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed mb-6">
                      Thank you for connecting with Kusumbha Kalyan Nidhi Limited. One of our regional financial advisors will contact you on your mobile within 2 business hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-bold text-brand-blue hover:text-brand-blue-light dark:text-brand-gold border border-brand-blue/30 dark:border-brand-gold/30 rounded-xl px-6 py-2.5 hover:bg-slate-50 dark:hover:bg-brand-blue/20 transition-all active:scale-95"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Floating Call & WhatsApp Triggers (Bottom Right corner) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Float */}
        <a
          href={`https://wa.me/${whatsAppNumber}?text=${whatsAppMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-transform duration-300 group relative"
          aria-label="Contact WhatsApp Support"
        >
          <span className="absolute right-14 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat on WhatsApp
          </span>
          <Smartphone size={20} />
        </a>

        {/* Call Float */}
        <a
          href={`tel:${branchPhone}`}
          className="w-12 h-12 bg-brand-gold text-brand-blue rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-transform duration-300 group relative border border-brand-gold-hover"
          aria-label="Call Branch Manager"
        >
          <span className="absolute right-14 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Call Advisor
          </span>
          <Phone size={18} />
        </a>
      </div>

    </section>
  );
}
