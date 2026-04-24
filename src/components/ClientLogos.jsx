"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ClientLogos = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-text-muted uppercase tracking-widest">
            Trusted by Industry Leaders
          </h2>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex space-x-12 whitespace-nowrap min-w-full items-center"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex space-x-12 items-center min-w-full justify-around">
                <Image src="/clients.png" alt="Client Logos" width={1000} height={100} className="h-16 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
