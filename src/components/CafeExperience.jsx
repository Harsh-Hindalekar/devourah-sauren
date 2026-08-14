import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { restaurantData } from '../data/restaurantData.js';

export default function CafeExperience({ onOpenAboutModal }) {
  const { cafeExperience } = restaurantData;

  return (
    <section
      id="cafe-experience-section"
      className="bg-[#0D0D0D] text-white py-20 sm:py-24 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Desktop View: Side by Side (Wide Photo Left + Poetic Content Right) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Wide Ambient Café Interior Photo */}
          <div className="col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-16/10 bg-neutral-900 group"
            >
              <img
                src={cafeExperience.desktopWideImage}
                alt="Devourah & Sauren café interior at night with warm neon sign and cozy tables"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                <span className="font-display text-sm font-bold tracking-widest text-[#E5A812] uppercase">
                  Good Food • Good Mood
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Copy & Details */}
          <div className="col-span-5 text-left space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="font-display text-xs font-bold tracking-[0.25em] text-[#E5A812] uppercase block"
            >
              {cafeExperience.desktopEyebrow}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl xl:text-6xl font-black uppercase tracking-tight text-white leading-[0.95]"
            >
              A LITTLE BREAK
              <br />
              NEVER HURTS.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-1.5 text-neutral-300 text-base sm:text-lg leading-relaxed pt-2"
            >
              {cafeExperience.lines.map((line, idx) => (
                <p key={idx} className={idx === cafeExperience.lines.length - 1 ? "text-[#E5A812] font-semibold pt-2" : ""}>
                  {line}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4"
            >
              <a
                href="#about"
                className="inline-flex items-center gap-2 font-display text-sm font-bold tracking-wider text-[#E5A812] hover:text-[#F3C444] transition-colors group cursor-pointer"
              >
                <span>{cafeExperience.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </motion.div>
          </div>

        </div>

        {/* Mobile View: Stacked Text + 3 Curated Photos (Reference 1, Screen 3) */}
        <div className="block lg:hidden text-left space-y-8">
          
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="font-display text-xs font-bold tracking-[0.25em] text-[#E5A812] uppercase block"
            >
              {cafeExperience.eyebrow}
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-[0.98]"
            >
              A LITTLE BREAK
              <br />
              NEVER HURTS.
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-1 text-neutral-300 text-sm sm:text-base leading-relaxed"
            >
              {cafeExperience.lines.map((line, idx) => (
                <p key={idx} className={idx === cafeExperience.lines.length - 1 ? "text-[#E5A812] font-medium pt-1" : ""}>
                  {line}
                </p>
              ))}
            </motion.div>
          </div>

          {/* 3 Mobile Stacked Photos */}
          <div className="space-y-4">
            {cafeExperience.mobileImages.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-2xl overflow-hidden aspect-16/10 border border-white/10 shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
