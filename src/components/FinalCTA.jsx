import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { restaurantData } from '../data/restaurantData.js';

export default function FinalCTA({ onOpenMenu }) {
  const { finalCTA, brand, social, footer } = restaurantData;

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="w-4 h-4" />, href: social.instagram },
    { name: 'Facebook', icon: <Facebook className="w-4 h-4" />, href: social.facebook },
    { name: 'WhatsApp', icon: <MessageCircle className="w-4 h-4" />, href: social.whatsapp },
  ];

  return (
    <section
      id="final-cta-section"
      className="bg-[#0D0D0D] text-white pt-14 pb-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Desktop View: 3-Part Bar (Left Socials + Center Big Headline + Right Yellow Pill Button) */}
        <div className="hidden lg:flex items-center justify-between py-6">
          
          {/* Left: Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 hover:bg-[#E5A812] hover:text-black hover:border-[#E5A812] text-white flex items-center justify-center transition-all duration-200"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ))}
          </motion.div>

          {/* Center: HUNGRY YET? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="font-display text-5xl xl:text-6xl font-black uppercase tracking-tight text-white">
              {finalCTA.heading}
            </h2>
          </motion.div>

          {/* Right: VIEW MENU Yellow Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              type="button"
              id="final-menu-btn-desktop"
              onClick={onOpenMenu}
              className="inline-flex items-center gap-3 bg-[#E5A812] hover:bg-[#F3C444] text-black font-display font-black text-xs tracking-widest px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl hover:scale-103 active:scale-98 uppercase"
            >
              <span>{finalCTA.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>

        {/* Mobile View: Stacked Box (Stamp Logo + Headline + Subheading + Yellow Button + Copyright) */}
        <div className="block lg:hidden text-center space-y-6 max-w-sm mx-auto">
          
          {/* Circular Stamp Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 mx-auto rounded-full border border-dashed border-neutral-700 flex items-center justify-center p-2"
          >
            <div className="w-full h-full rounded-full border border-neutral-600 flex flex-col items-center justify-center">
              <span className="font-display text-[8px] font-bold text-neutral-400 uppercase tracking-wider">DEVOURAH</span>
              <span className="font-display text-[7px] text-[#E5A812] font-semibold">★ 2024 ★</span>
            </div>
          </motion.div>

          {/* Heading & Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-2">
              {finalCTA.heading}
            </h2>
            <p className="text-neutral-400 text-sm">
              {finalCTA.subheading}
            </p>
          </motion.div>

          {/* Yellow CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              type="button"
              id="final-menu-btn-mobile"
              onClick={onOpenMenu}
              className="w-full inline-flex items-center justify-center gap-3 bg-[#E5A812] hover:bg-[#F3C444] text-black font-display font-black text-xs tracking-widest py-3.5 rounded-full transition-all duration-200 shadow-lg cursor-pointer uppercase"
            >
              <span>{finalCTA.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Copyright text on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-8 text-neutral-600 text-xs font-medium"
          >
            <p>{footer.copyright}</p>
          </motion.div>

          {/* Home indicator bar */}
          <div className="w-32 h-1 bg-neutral-800 rounded-full mx-auto mt-4"></div>

        </div>

      </div>
    </section>
  );
}
