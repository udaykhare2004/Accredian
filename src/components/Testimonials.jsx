"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sameer Verma",
      role: "VP, HR at TechCorp",
      content: "The Gen-AI program was a game-changer for our engineering team. The practical focus of Accredian's curriculum is unmatched.",
      avatar: "https://i.pravatar.cc/150?u=sameer",
    },
    {
      name: "Priya Sharma",
      role: "Learning Head, RetailSoft",
      content: "Accredian's CAT framework ensured that our managers didn't just learn the tools, but understood how to apply them to real business cases.",
      avatar: "https://i.pravatar.cc/150?u=priya",
    },
    {
      name: "David Chen",
      role: "CTO, GlobalFin",
      content: "Highly scalable training solution. We were able to upskill 500+ employees across 3 countries seamlessly.",
      avatar: "https://i.pravatar.cc/150?u=david",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main">
            What Our <span className="text-primary">Partners Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary p-8 rounded-3xl relative"
            >
              <Quote className="text-primary/20 absolute top-8 right-8" size={60} />
              <div className="relative z-10">
                <p className="text-text-main text-lg italic leading-relaxed mb-8">
                  "{t.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main">{t.name}</h4>
                    <p className="text-sm text-text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
