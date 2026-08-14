import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Flame, Sparkles, Heart, Utensils } from 'lucide-react';
import { restaurantData } from '../data/restaurantData.js';

export default function HowItsMade() {
  const { howItsMade } = restaurantData;

  const iconMap = {
    leaf: <Leaf className="w-5 h-5 text-[#16A34A]" />,
    spice: <Sparkles className="w-5 h-5 text-[#E5A812]" />,
    flame: <Flame className="w-5 h-5 text-[#EA580C]" />,
    burger: <Utensils className="w-5 h-5 text-[#111111]" />
  };

  return (
    <section
      id="how-its-made-section"
      className="bg-[#FAF7F2] py-20 sm:py-24 border-b border-[#EAE4D8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & 4 Quality Steps */}
          <div className="lg:col-span-7 text-left">
            <span className="font-display text-xs font-bold tracking-[0.2em] text-[#888888] uppercase block mb-3">
              {howItsMade.eyebrow}
            </span>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#111111] leading-[0.95] tracking-tight mb-10">
              GOOD INGREDIENTS.
              <br />
              GREAT TASTE.
            </h2>

            {/* 4 Process Items */}
            <div className="space-y-6 sm:space-y-7">
              {howItsMade.steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-4 sm:gap-5 group"
                >
                  {/* Circular Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-[#EFECE4] border border-[#DDD6C8] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                    {iconMap[step.icon] || <Heart className="w-5 h-5 text-[#111111]" />}
                  </div>

                  <div className="pt-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-xs font-bold text-[#E5A812] tracking-wider">
                        {step.num}
                      </span>
                      <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#111111]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#666666] text-sm mt-0.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Floating Cutout Burger Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border border-[#E0D8C8] bg-[#EFECE4]"
            >
              <img
                src={howItsMade.burgerImage}
                alt="Fresh artisanal burger with sesame bun and crispy patty"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Decorative Stamp Corner */}
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white font-display text-[11px] font-bold tracking-wider uppercase">
                Crafted Fresh Daily
              </div>

              {/* Bottom Quote */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-left">
                <p className="font-display text-sm font-bold text-white uppercase tracking-wider">
                  No artificial fillers. 100% pure taste.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
