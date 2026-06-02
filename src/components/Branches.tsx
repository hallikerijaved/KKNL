"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Landmark, Navigation } from "lucide-react";

export default function Branches() {
  const branchAddress = "H. No. 318, C.S. No. 1642, Near Ganpati Temple, Vasantnagar, Sangli - 416416";
  
  // Custom encoded maps query for Yashwantnagar Sangli coordinates
  const mapIframeUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.574697920199!2d74.5772274!3d16.8475267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1230f898305ff%3A0xe543c1a3eb87428f!2sYashwantnagar%2C%20Sangli%20Miraj%20Kupwad%2C%20Maharashtra%20416416!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section id="branches" className="py-20 bg-slate-50 dark:bg-brand-blue-deep/30 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Landmark size={12} />
            <span>Our Regional Network</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-brand-blue dark:text-white leading-tight"
          >
            Visit Our Local <br />
            <span className="shimmer-text">Banking Branches</span>
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
            Connect with us in person. Our cooperative branch managers are ready to support your dreams with customized financial advice.
          </motion.p>
        </div>

        {/* Details and Map Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Branch Details Card (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-3xl p-6 sm:p-8 flex-1 flex flex-col justify-between border border-slate-200 dark:border-brand-gold/15 shadow-xl relative overflow-hidden"
            >
              <div>
                {/* Accent Ribbon */}
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold"></div>

                {/* Branch name */}
                <div className="mb-8 pl-2">
                  <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest block mb-1">
                    Head Office &amp; Primary Branch
                  </span>
                  <h3 className="font-heading font-black text-2xl text-brand-blue dark:text-white">
                    Yashwantnagar Branch
                  </h3>
                </div>

                {/* Details List */}
                <div className="space-y-6 pl-2">
                  
                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/5 dark:bg-brand-gold/10 text-brand-blue dark:text-brand-gold flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">
                        Branch Address
                      </span>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-200 leading-relaxed mt-1">
                        H. No. 318, C.S. No. 1642,<br />
                        Near Ganpati Temple, Vasantnagar,<br />
                        Sangli – 416416, Maharashtra, India
                      </p>
                    </div>
                  </div>

                  {/* Timing */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/5 dark:bg-brand-gold/10 text-brand-blue dark:text-brand-gold flex items-center justify-center flex-shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">
                        Operating Hours
                      </span>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-200 leading-relaxed mt-1">
                        Monday – Saturday: 10:00 AM – 5:00 PM<br />
                        <span className="text-brand-gold font-bold text-xs">Closed on Sundays &amp; Public Holidays</span>
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/5 dark:bg-brand-gold/10 text-brand-blue dark:text-brand-gold flex items-center justify-center flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">
                        Phone &amp; Direct Support
                      </span>
                      <a
                        href="tel:+912332671234"
                        className="text-sm font-bold text-brand-blue dark:text-brand-gold hover:underline mt-1 block"
                      >
                        +91 233 267 1234
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/5 dark:bg-brand-gold/10 text-brand-blue dark:text-brand-gold flex items-center justify-center flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">
                        Official Support Email
                      </span>
                      <a
                        href="mailto:support@kknlnidhi.com"
                        className="text-sm font-bold text-brand-blue dark:text-brand-gold hover:underline mt-1 block"
                      >
                        support@kknlnidhi.com
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Navigation Action */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(branchAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center mt-8 font-bold text-xs py-3.5 rounded-xl bg-brand-blue dark:bg-brand-gold text-white dark:text-brand-blue hover:bg-brand-blue-light dark:hover:bg-brand-gold-hover transition-colors flex items-center justify-center gap-1.5 active:scale-95 shadow-md"
              >
                <Navigation size={14} />
                Get Directions on Map
              </a>

            </motion.div>
          </div>

          {/* Map Embed (Right) */}
          <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[350px]">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full h-full rounded-3xl overflow-hidden border border-slate-200 dark:border-brand-gold/15 shadow-xl bg-slate-200 dark:bg-brand-blue-deep/60"
            >
              <iframe
                title="KKNL Yashwantnagar Branch Location Map"
                src={mapIframeUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full dark:opacity-80 dark:contrast-125"
              ></iframe>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
