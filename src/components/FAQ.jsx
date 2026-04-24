"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of programs does Accredian Enterprise offer?",
      answer: "We offer tailored programs in Generative AI, Data Science, Machine Learning, Leadership, Product Management, and Software Engineering.",
    },
    {
      question: "Are the programs online or in-person?",
      answer: "We offer flexible delivery modes including live online sessions, in-person workshops, and hybrid models to suit your organization's needs.",
    },
    {
      question: "How long are the training programs?",
      answer: "Program duration varies from 1-day executive workshops to 6-month comprehensive bootcamps, depending on the learning objectives.",
    },
    {
      question: "Do you provide certifications?",
      answer: "Yes, participants receive industry-recognized certificates from Accredian and our partner global institutions upon successful completion.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="section-container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-text-main">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="text-primary" />
                ) : (
                  <ChevronDown className="text-primary" />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-text-muted leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
