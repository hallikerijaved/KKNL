import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutAndWhy from "@/components/AboutAndWhy";
import Services from "@/components/Services";
import DepositSchemes from "@/components/DepositSchemes";
import LoanProducts from "@/components/LoanProducts";
import EMICalculator from "@/components/EMICalculator";
import Branches from "@/components/Branches";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-50 dark:bg-[#0c0a24] transition-colors duration-300">
      {/* Sticky Navigation Bar */}
      <Navbar />
      
      {/* Scrollable Layout Sections */}
      <main>
        {/* Full-width premium banking hero */}
        <Hero />
        
        {/* Ticking Animated Stats counters */}
        <Stats />
        
        {/* Nidhi About & Corporate Six Pillars features */}
        <AboutAndWhy />
        
        {/* Services offerings with icons */}
        <Services />
        
        {/* High yield Deposit schemes comparison */}
        <DepositSchemes />
        
        {/* Friendly rate Loan products comparisons */}
        <LoanProducts />
        
        {/* Real-time interactive EMI slide-calculator */}
        <EMICalculator />
        
        {/* Physical network addresses & google maps locator */}
        <Branches />
        
        {/* Micro slider client testimonials */}
        <Testimonials />
        
        {/* Corporate FAQ accordions */}
        <FAQ />
        
        {/* High conversion Lead Form & bottom-right floating CTAs */}
        <ContactForm />
      </main>

      {/* Royal blue & Gold accents Footer */}
      <Footer />
    </div>
  );
}
