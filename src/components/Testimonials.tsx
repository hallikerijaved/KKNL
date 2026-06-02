"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews: TestimonialProps[] = [
    {
      quote: "Opening a Fixed Deposit with KKNL was the best financial decision I've made. The 8.25% interest yield is outstanding, and their customer service team at the Yashwantnagar branch made the entire process so transparent.",
      name: "Rajesh S. Patil",
      role: "Local Business Owner, Sangli",
      rating: 5,
      avatar: "👤",
    },
    {
      quote: "I needed urgent liquidity for my shop inventory, and KKNL disbursed a Gold Loan within 30 minutes! Their documentation was minimal, and the gold jewelry valuation was highly professional. Absolutely recommended.",
      name: "Meenakshi K. Deshmukh",
      role: "Retail Entrepreneur",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      quote: "The Pigmi daily collection service is extremely convenient. The collector visits my shop every afternoon, and I can save a small portion of my daily sales effortlessly. Secure, digital confirmations are sent instantly.",
      name: "Amit J. Shah",
      role: "General Store Owner",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      quote: "Being a Nidhi shareholder gives me deep trust. I feel secure knowing that my savings are safe, and the annual dividends are an excellent added bonus. KKNL is truly a mutual benefit financial partner.",
      name: "Sunita R. Kulkarni",
      role: "Retirement Benefit Member",
      rating: 5,
      avatar: "👵",
    },
  ];

  // Auto transition reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 6000); // 6 seconds
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-brand-blue-deep transition-colors relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] left-0 w-80 h-80 rounded-full bg-brand-gold/5 filter blur-[80px]"></div>
      <div className="absolute bottom-[20%] right-0 w-80 h-80 rounded-full bg-brand-blue/5 filter blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4"
          >
            <span>Member Voice</span>
          </motion.div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-blue dark:text-white leading-tight">
            Hear What Our Trusted <br />
            <span className="shimmer-text">Members Say About Us</span>
          </h2>
          <div className="w-20 h-1 bg-brand-gold rounded-full mx-auto my-5"></div>
        </div>

        {/* Carousel Slide container */}
        <div className="max-w-4xl mx-auto relative px-4">
          <div className="min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35 }}
                className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-brand-gold/15 shadow-xl relative w-full text-center sm:text-left flex flex-col sm:flex-row gap-8 items-center"
              >
                
                {/* Floating quote symbol */}
                <div className="absolute top-6 right-8 text-brand-gold/10 dark:text-brand-gold/5 pointer-events-none select-none">
                  <Quote size={80} strokeWidth={1} />
                </div>

                {/* Avatar Visual representation */}
                <div className="w-20 h-20 rounded-full border-2 border-brand-gold/40 flex items-center justify-center text-4xl bg-slate-100 dark:bg-brand-blue-dark flex-shrink-0 shadow-lg">
                  {reviews[activeIndex].avatar}
                </div>

                {/* Review Narrative details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Stars */}
                    <div className="flex justify-center sm:justify-start gap-1 mb-4">
                      {Array.from({ length: reviews[activeIndex].rating }).map((_, i) => (
                        <Star key={i} size={16} className="text-brand-gold fill-brand-gold" />
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base italic text-slate-700 dark:text-slate-200 leading-relaxed mb-6 font-medium">
                      &ldquo;{reviews[activeIndex].quote}&rdquo;
                    </p>
                  </div>

                  {/* Name and Designation */}
                  <div>
                    <h4 className="font-heading font-black text-lg text-brand-blue dark:text-white leading-none">
                      {reviews[activeIndex].name}
                    </h4>
                    <span className="text-xs text-brand-gold-dark dark:text-brand-gold font-bold block mt-1">
                      {reviews[activeIndex].role}
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center sm:justify-end gap-3 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl border border-slate-200 dark:border-brand-gold/20 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-brand-blue/30 active:scale-95 transition-all shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl border border-slate-200 dark:border-brand-gold/20 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-brand-blue/30 active:scale-95 transition-all shadow-sm"
              aria-label="Next Testimonial"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Sliding indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-brand-gold w-6" : "bg-slate-300 dark:bg-slate-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
