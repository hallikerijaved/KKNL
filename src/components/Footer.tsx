"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { Facebook, Twitter, Instagram, Linkedin, ShieldCheck, Landmark, ShieldAlert, Award, ArrowUp, Send, Check, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 4 && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home Portal", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Deposit Schemes", href: "#deposits" },
    { name: "Loan Products", href: "#loans" },
    { name: "Local Branches", href: "#branches" },
    { name: "EMI Calculator", href: "#calculator" },
    { name: "Support Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#050414] text-slate-300 border-t border-brand-gold/20 relative overflow-hidden z-10 pt-12 pb-6">
      {/* Visual Accents & Radial Orbs */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-brand-gold/5 filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-brand-blue/5 filter blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.012)_1px,transparent_1px)] bg-[size:100%_35px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Segment: Brand & Navigation */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-8 pb-8 border-b border-white/5">
          
          {/* Brand Info & Newsletter Card */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <Logo showText={true} className="h-9" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-xl pr-4">
              Kusumbha Kalyan Nidhi Limited (KKNL) is a registered Nidhi Company fostering mutual savings and credit cooperation strictly within shareholder members under MCA Nidhi Rules 2014.
            </p>
            
            {/* Elegant Compact Newsletter Card */}
            <div className="glass-panel rounded-2xl p-3 border border-brand-gold/10 bg-slate-950/40 max-w-md mt-1">
              <span className="text-xs text-brand-gold font-bold uppercase tracking-wider block mb-1.5">
                ⚡ Join the KKNL Member Newsletter
              </span>
              {subscribed ? (
                <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg text-xs font-bold flex items-center gap-1">
                  <Check size={12} />
                  <span>Subscribed successfully! Welcome to KKNL.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-1.5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="flex-grow px-3 py-1.5 bg-slate-900/60 border border-slate-700/60 rounded-lg text-slate-200 focus:outline-none focus:border-brand-gold text-xs h-8"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 h-8 rounded-lg bg-brand-gold hover:bg-brand-gold-hover text-brand-blue font-bold text-xs flex items-center gap-1 transition-all active:scale-95 shadow-sm"
                  >
                    <Send size={12} />
                    Join
                  </button>
                </form>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 hover:border-brand-gold/30 hover:bg-brand-gold hover:text-brand-blue flex items-center justify-center transition-all duration-200 group" aria-label="Facebook">
                <Facebook size={14} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 hover:border-brand-gold/30 hover:bg-brand-gold hover:text-brand-blue flex items-center justify-center transition-all duration-200 group" aria-label="Twitter">
                <Twitter size={14} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 hover:border-brand-gold/30 hover:bg-brand-gold hover:text-brand-blue flex items-center justify-center transition-all duration-200 group" aria-label="Instagram">
                <Instagram size={14} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 hover:border-brand-gold/30 hover:bg-brand-gold hover:text-brand-blue flex items-center justify-center transition-all duration-200 group" aria-label="LinkedIn">
                <Linkedin size={14} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Categorized Sitemap Links Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            
            {/* Sitemap Navigation */}
            <div>
              <h4 className="font-heading font-black text-xs text-white uppercase tracking-wider mb-3.5 border-l-2 border-brand-gold pl-2">
                Quick Sitemap
              </h4>
              <ul className="space-y-1.5">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs text-slate-400 hover:text-brand-gold hover:translate-x-1 flex items-center transition-all duration-150"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Schemes Sitemap */}
            <div>
              <h4 className="font-heading font-black text-xs text-white uppercase tracking-wider mb-3.5 border-l-2 border-brand-gold pl-2">
                Deposit &amp; Loans
              </h4>
              <ul className="space-y-1.5">
                {navLinks.slice(4).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs text-slate-400 hover:text-brand-gold hover:translate-x-1 flex items-center transition-all duration-150"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Middle Segment: Glassmorphism Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 relative">
          
          {/* Scroll to Top floating arrow */}
          <button
            onClick={scrollToTop}
            className="absolute -top-14 right-4 w-9 h-9 rounded-lg bg-brand-gold text-brand-blue flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform group cursor-pointer z-20 border border-brand-gold-hover"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={15} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* MCA Compliance */}
          <div className="glass-panel rounded-2xl p-3 border border-brand-gold/15 bg-slate-950/30 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold flex-shrink-0">
              <ShieldCheck size={16} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">MCA Registration</span>
              <span className="text-xs text-white font-extrabold block mt-0.5">Govt. Rules Compliant</span>
              <span className="text-[11px] text-slate-500 block mt-0.5 leading-none">Nidhi Rules 2014</span>
            </div>
          </div>

          {/* Registered Ltd */}
          <div className="glass-panel rounded-2xl p-3 border border-brand-gold/15 bg-slate-950/30 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold flex-shrink-0">
              <Landmark size={16} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Legal Entity</span>
              <span className="text-xs text-white font-extrabold block mt-0.5">Registered Nidhi Ltd</span>
              <span className="text-[11px] text-brand-gold font-bold block mt-0.5 leading-none">U65991MH2026PLC999999</span>
            </div>
          </div>

          {/* Secured Safety */}
          <div className="glass-panel rounded-2xl p-3 border border-brand-gold/15 bg-slate-950/30 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold flex-shrink-0">
              <ShieldAlert size={16} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Investment Safety</span>
              <span className="text-xs text-white font-extrabold block mt-0.5">100% Protected Assets</span>
              <span className="text-[11px] text-slate-500 block mt-0.5 leading-none">Physical vault custody</span>
            </div>
          </div>

          {/* Yashwantnagar Branch Address */}
          <div className="glass-panel rounded-2xl p-3 border border-brand-gold/15 bg-slate-950/30 flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold flex-shrink-0">
              <MapPin size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Sangli HQ Address</span>
              <span className="text-xs text-white font-extrabold block mt-0.5 leading-tight">Yashwantnagar Branch</span>
              <p className="text-[11px] text-slate-400 truncate mt-0.5 leading-none" title="CS 1642, Near Ganpati Temple, Sangli">
                C.S. No. 1642, Sangli - 416416
              </p>
              <div className="flex gap-2.5 mt-1 border-t border-white/5 pt-1 text-[11px]">
                <a href="tel:+912332671234" className="text-brand-gold hover:underline flex items-center gap-0.5 font-bold">
                  <Phone size={10} /> Call
                </a>
                <a href="mailto:support@kknlnidhi.com" className="text-brand-gold hover:underline flex items-center gap-0.5 font-bold">
                  <Mail size={10} /> Email
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Corporate Legal & Disclaimer */}
        <div className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mb-4 bg-slate-950/40 p-3 rounded-xl border border-white/5 shadow-inner">
          <strong className="text-slate-400">Legal Regulatory Disclaimer:</strong> Kusumbha Kalyan Nidhi Limited is registered under the Companies Act 2013, Ministry of Corporate Affairs, Government of India (CIN: U65991MH2026PLC999999). We strictly follow Nidhi Rules 2014 and follow cooperative mutual credit protocols. We strictly accept deposits from and extend loan facilities exclusively to our registered individual shareholder members. We are not a commercial bank and do not conduct business with general public non-members.
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 pt-3 border-t border-white/5">
          <p>© {currentYear} Kusumbha Kalyan Nidhi Limited (KKNL). All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex gap-3 text-[11px] sm:text-xs">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Membership</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">MCA Disclosures</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
