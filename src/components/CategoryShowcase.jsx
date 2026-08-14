import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { restaurantData } from '../data/restaurantData.js';

export default function CategoryShowcase({ onSelectCategory }) {
  const { categories } = restaurantData;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCat = categories[activeIndex];

  const handleCategoryClick = (index, catId) => {
    setActiveIndex(index);
  };

  const handleViewCategory = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
  };

  return (
    <section
      id="categories-section"
      className="bg-[#0D0D0D] text-white py-20 sm:py-24 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Mobile Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="block lg:hidden mb-8"
        >
          <span className="font-display text-xs font-bold tracking-[0.25em] text-[#E5A812] uppercase block">
            WHAT WE SERVE
          </span>
        </motion.div>

        {/* Desktop Layout: 3 Columns (Left list + Middle Image + Right Info) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Number indicator + Vertical category list */}
          <div className="lg:col-span-5 flex items-start gap-6 sm:gap-8">
            
            {/* Vertical Number Indicator (01 - 05) */}
            <div className="hidden sm:flex flex-col items-center pt-2 select-none">
              <span className="font-display text-base font-bold text-[#E5A812]">
                {activeCat.num}
              </span>
              <span className="w-0.5 h-10 bg-neutral-700 my-2"></span>
              <span className="font-display text-sm font-semibold text-neutral-500">
                05
              </span>
            </div>

            {/* Category Names */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5"
            >
              {categories.map((cat, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    id={`cat-btn-${cat.id}`}
                    onClick={() => handleCategoryClick(idx, cat.id)}
                    className="group text-left focus:outline-none cursor-pointer transition-all duration-300 flex items-center gap-4"
                  >
                    <span
                      className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-black tracking-tight uppercase transition-colors duration-300 leading-none ${
                        isActive
                           ? 'text-[#E5A812]'
                           : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {cat.name}
                    </span>
                    {isActive && (
                      <span className="hidden sm:block w-3 h-3 rounded-full bg-[#E5A812]" />
                    )}
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* Middle Column: Cutout / Hero Food Item */}
          <div className="lg:col-span-4 flex items-center justify-center my-4 lg:my-0 relative min-h-[260px] sm:min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCat.id}
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[280px] sm:max-w-[340px] aspect-square flex items-center justify-center"
              >
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-[#E5A812]/10 rounded-full blur-3xl pointer-events-none" />
                
                <img
                  src={activeCat.image}
                  alt={activeCat.name}
                  className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10 border border-white/10"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 bg-[#111111]/90 backdrop-blur-md border border-[#333333] px-3.5 py-1 rounded-full text-[11px] font-display font-bold tracking-wider text-[#E5A812] uppercase whitespace-nowrap">
                  Freshly Prepared
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Category Details & Action */}
          <div className="lg:col-span-3 flex flex-col justify-center text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCat.id + '-desc'}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white leading-tight">
                  {activeCat.title}
                </h3>
                
                <p className="text-neutral-400 text-sm sm:text-base whitespace-pre-line leading-relaxed">
                  {activeCat.description}
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    id={`view-${activeCat.id}-action`}
                    onClick={() => handleViewCategory(activeCat.id)}
                    className="inline-flex items-center gap-2 font-display text-sm font-bold tracking-wider text-[#E5A812] hover:text-[#F3C444] transition-colors cursor-pointer group py-2"
                  >
                    <span>{activeCat.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile quick action arrow at bottom right */}
        <div className="flex lg:hidden justify-end mt-6">
          <button
            type="button"
            onClick={() => handleViewCategory(activeCat.id)}
            className="w-12 h-12 rounded-full bg-[#E5A812] hover:bg-[#F3C444] text-black flex items-center justify-center shadow-lg transition-transform active:scale-95"
            aria-label="View Category Details"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
