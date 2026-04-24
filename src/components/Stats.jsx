"use client";

import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { label: "Corporates", value: "1500+", color: "text-primary" },
    { label: "Partner Institutions", value: "500+", color: "text-accent" },
    { label: "Careers Transformed", value: "10k+", color: "text-primary" },
    { label: "Avg. Learning Rating", value: "4.8/5", color: "text-accent" },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className={`text-3xl md:text-5xl font-bold ${stat.color}`}>
                {stat.value}
              </h3>
              <p className="mt-2 text-text-muted font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
