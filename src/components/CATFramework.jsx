"use client";

import React from "react";
import { motion } from "framer-motion";

const CATFramework = () => {
  const pillars = [
    {
      id: "C",
      name: "Concept",
      description: "Mastering the foundational principles and theories.",
      color: "from-blue-600 to-blue-400",
    },
    {
      id: "A",
      name: "Application",
      description: "Applying concepts to solve real-world business problems.",
      color: "from-emerald-600 to-emerald-400",
    },
    {
      id: "T",
      name: "Tools",
      description: "Hands-on mastery of industry-standard tools and platforms.",
      color: "from-blue-800 to-blue-600",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-text-main mb-6">
            The <span className="text-primary">CAT</span> Framework
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Our signature learning methodology ensures maximum retention and 
            immediate on-the-job impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white text-5xl font-black shadow-lg group-hover:scale-110 transition-transform`}>
                {pillar.id}
              </div>
              <div className="pt-16 pb-10 px-8 bg-gray-50 rounded-3xl border border-gray-100 text-center group-hover:bg-white group-hover:shadow-xl transition-all h-full">
                <h3 className="text-2xl font-bold text-text-main mb-4">{pillar.name}</h3>
                <p className="text-text-muted text-lg">{pillar.description}</p>
              </div>
              
              {index < 2 && (
                <div className="hidden lg:block absolute top-12 -right-6 z-10 text-gray-200">
                  <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                    <path d="M1 12H59M59 12L49 2M59 12L49 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CATFramework;
