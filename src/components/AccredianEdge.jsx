"use client";

import React from "react";
import { ShieldCheck, Zap, Globe, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

const AccredianEdge = () => {
  const cards = [
    {
      title: "Tailored for You",
      description: "Programs specifically designed to meet your organization's unique challenges and goals.",
      icon: <ShieldCheck className="text-primary" size={32} />,
      bg: "bg-blue-50",
    },
    {
      title: "Innovative Pedagogy",
      description: "Learning that blends theory with high-impact practical applications and real-world tools.",
      icon: <Zap className="text-accent" size={32} />,
      bg: "bg-emerald-50",
    },
    {
      title: "Diverse Expertise",
      description: "Access to a global pool of industry experts and world-class faculty.",
      icon: <Globe className="text-primary" size={32} />,
      bg: "bg-blue-50",
    },
    {
      title: "Flexible Delivery",
      description: "Scalable learning solutions delivered online, in-person, or via a hybrid model.",
      icon: <LayoutDashboard className="text-accent" size={32} />,
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section id="offer" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main">
            The <span className="text-primary">Accredian Edge</span>
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            We don't just train; we transform teams with a focus on outcome-based learning 
            and industry-ready skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`${card.bg} p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300`}
            >
              <div className="mb-6 p-4 bg-white rounded-xl inline-block shadow-sm">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-text-main mb-4">{card.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccredianEdge;
