"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-text-main text-white pt-20 pb-10">
      <div className="section-container">
        {/* Contact Banner */}
        <div className="bg-primary rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between mb-20 transform -translate-y-32 shadow-2xl">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Upskill Your Team?</h2>
            <p className="text-blue-100 text-lg">Join 1500+ corporates in building a future-ready workforce.</p>
          </div>
          <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-lg active:scale-95">
            Contact Us Now
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 -mt-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <span className="text-2xl font-bold">accredian</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Leading the way in professional education for the AI and Digital era. 
              Transforming careers, one organization at a time.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">What we offer</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Domain Expertise</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Our Faculty</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-6">Popular Programs</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#" className="hover:text-primary transition-colors">Generative AI for Leaders</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Data Science bootcamp</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Strategic Management</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Product Management</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-6 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1" size={20} />
                <span>123, Tech Plaza, HSR Layout, Bangalore, India - 560102</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary" size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary" size={20} />
                <span>enterprise@accredian.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Accredian Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
