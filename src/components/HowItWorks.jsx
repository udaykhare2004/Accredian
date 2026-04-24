"use client";

import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      title: "Consult",
      description: "We understand your organization's talent needs and skill gaps.",
    },
    {
      title: "Design",
      description: "Our experts design a custom curriculum tailored to your goals.",
    },
    {
      title: "Deliver",
      description: "Interactive learning experiences led by industry veterans.",
    },
    {
      title: "Measure",
      description: "Track progress and ROI with detailed learning analytics.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-primary text-white overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            A seamless 4-step process to transform your workforce.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg transform group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-blue-50 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
