import React from 'react';
import { motion } from 'motion/react';
import { restaurantData } from '../data/restaurantData.js';

export default function AboutUsStory() {
  const { aboutUsStory } = restaurantData;

  return (
    <section
      id="about"
      className="bg-[#FAF7F2] py-20 sm:py-24 border-b border-[#EAE4D8]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="max-w-3xl mx-auto text-center">
          
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="font-display text-xs font-bold tracking-[0.25em] text-[#888888] uppercase block mb-3"
          >
            {aboutUsStory.eyebrow}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#111111] leading-[1] tracking-tight mb-6"
          >
            WE BELIEVE IN
            <br />
            GOOD FOOD AND GOOD COMPANY.
          </motion.h2>

          {/* Minimalist Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-0.5 bg-[#111111] mx-auto mb-6 origin-center"
          ></motion.div>

          {/* Narrative Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-[#555555] text-base sm:text-lg md:text-xl leading-relaxed font-normal max-w-2xl mx-auto mb-10"
          >
            {aboutUsStory.description}
          </motion.p>

          {/* Photo of Café Interior with Glowing Neon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white aspect-16/9 sm:aspect-21/9 bg-[#EBE7DD]"
          >
            <img
              src={aboutUsStory.neonImage}
              alt="Devourah & Sauren café interior with cozy ambient lighting and neon sign"
              className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <div className="text-left">
                <span className="font-display text-xs font-bold text-[#E5A812] tracking-widest uppercase block mb-1">
                  Bhandup West • Mumbai
                </span>
                <p className="font-display text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
                  Your Neighborhood Chill Spot
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
