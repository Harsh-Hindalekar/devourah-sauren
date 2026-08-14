import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { restaurantData } from '../data/restaurantData.js';

export default function FollowUs() {
  const { brand, social } = restaurantData;

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: social.instagram },
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: social.facebook },
    { name: 'WhatsApp', icon: <MessageCircle className="w-5 h-5" />, href: social.whatsapp },
  ];

  return (
    <section
      id="follow-section"
      className="bg-[#FAF7F2] py-14 sm:py-16 border-b border-[#EAE4D8]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center space-y-4">
        
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="font-display text-xs font-bold tracking-[0.25em] text-[#888888] uppercase block"
        >
          FOLLOW US
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-2xl sm:text-3xl font-black text-[#111111] uppercase tracking-tight"
        >
          {brand.instagramHandle}
        </motion.h3>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-4 pt-2"
        >
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-[#D5CEC0] bg-[#EFECE4] hover:bg-black hover:text-white text-[#111111] flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-105"
              aria-label={item.name}
            >
              {item.icon}
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
