"use client";

import React from "react";
import { BrainCircuit, Users, Database, BarChart3, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

const Expertise = () => {
  const domains = [
    {
      title: "Generative AI",
      items: ["Prompt Engineering", "LLM Fine-tuning", "AI Strategy"],
      icon: <BrainCircuit size={40} className="text-primary" />,
    },
    {
      title: "Leadership",
      items: ["Digital Transformation", "Strategic Management", "Agile Leadership"],
      icon: <Users size={40} className="text-accent" />,
    },
    {
      title: "Tech & Data",
      items: ["Data Science", "Machine Learning", "Software Engineering"],
      icon: <Database size={40} className="text-primary" />,
    },
    {
      title: "Business Ops",
      items: ["Product Management", "Supply Chain", "FinTech"],
      icon: <BarChart3 size={40} className="text-accent" />,
    },
    {
      title: "Digital Growth",
      items: ["Growth Marketing", "Customer Experience", "Design Thinking"],
      icon: <Globe2 size={40} className="text-primary" />,
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-secondary">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main leading-tight">
              Our Domain <span className="text-primary">Expertise</span>
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              We cover the most critical domains that drive business growth in the 21st century.
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-3 bg-white text-primary border border-primary rounded-lg font-bold hover:bg-primary hover:text-white transition-all">
            View All Programs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <div className="mb-6">{domain.icon}</div>
              <h3 className="text-xl font-bold text-text-main mb-4">{domain.title}</h3>
              <ul className="space-y-2">
                {domain.items.map((item, idx) => (
                  <li key={idx} className="text-text-muted text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
