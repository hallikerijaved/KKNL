"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, Sun, Moon, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Deposits", href: "#deposits" },
    { name: "Loans", href: "#loans" },
    { name: "Branches", href: "#branches" },
    { name: "EMI Calculator", href: "#calculator" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="focus:outline-none">
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-[13.5px] text-slate-700 hover:text-brand-blue dark:text-slate-200 dark:hover:text-brand-gold transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-slate-200 dark:border-brand-gold/20 text-slate-600 hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-gold transition-colors hover:bg-slate-100 dark:hover:bg-brand-blue-dark"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Login Button */}
            <a
              href="#contact"
              className="font-bold text-sm text-brand-blue hover:text-brand-blue-light dark:text-brand-gold-light dark:hover:text-white px-4 py-2 rounded-lg transition-all"
            >
              Login
            </a>

            {/* Open Account CTA */}
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center font-bold text-sm px-5 py-2.5 rounded-lg overflow-hidden group bg-gradient-to-r from-brand-gold to-[#b39126] text-brand-blue shadow-md hover:shadow-brand-gold/20 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <ShieldCheck size={16} className="mr-1.5" />
              Open Account
            </a>
          </div>

          {/* Mobile Actions (Theme & Menu burger toggles) */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-slate-200 dark:border-brand-gold/20 text-slate-600 hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-gold transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-slate-200 dark:border-brand-gold/20 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-brand-blue-dark transition-all"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-slate-200 dark:border-brand-gold/15 bg-white dark:bg-brand-blue-deep shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-gold py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-brand-blue-light transition-all text-sm"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 dark:border-brand-blue/30 flex items-center justify-between gap-4 px-3">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-1/2 text-center font-bold text-sm text-brand-blue dark:text-brand-gold border border-brand-blue/30 dark:border-brand-gold/30 rounded-lg py-2.5 hover:bg-slate-50 dark:hover:bg-brand-blue/20 transition-all"
                >
                  Login
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-1/2 text-center font-bold text-sm bg-gradient-to-r from-brand-gold to-[#b39126] text-brand-blue rounded-lg py-2.5 flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] transition-all"
                >
                  <ShieldCheck size={16} />
                  Open Account
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
