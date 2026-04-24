"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const benefits = [
    "Expert-led training",
    "Customizable programs",
    "Real-world projects",
    "Scalable solutions",
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-secondary">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-full -mr-20 transform skew-x-12 hidden lg:block"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-text-main leading-tight">
              Upskill Your Team for the <br />
              <span className="text-primary">AI & Digital Era</span>
            </h1>
            <p className="mt-6 text-xl text-text-muted max-w-xl">
              Accredian Enterprise helps organizations build future-ready workforces through 
              tailored training programs in Data Science, AI, and Leadership.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="text-accent" size={20} />
                  <span className="text-text-main font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary text-lg px-8">Enquire Now</button>
              <button className="px-8 py-3 rounded-lg font-semibold text-primary border-2 border-primary hover:bg-primary/5 transition-all">
                Download Brochure
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/hero.png"
                alt="Corporate Professionals"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            
            {/* Float Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl flex items-center space-x-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <span className="text-3xl font-bold text-accent">10k+</span>
              </div>
              <div>
                <p className="text-sm text-text-muted font-medium">Careers</p>
                <p className="text-lg font-bold text-text-main">Transformed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
