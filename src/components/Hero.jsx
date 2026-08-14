import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { restaurantData } from '../data/restaurantData.js';

export default function Hero({ onExploreMenu }) {
  const { hero, brand } = restaurantData;

  const scrollToNext = () => {
    const nextSection = document.getElementById('categories-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative bg-[#FAF7F2] pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-20 md:pb-24 overflow-hidden border-b border-[#EAE4D8]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Main Headline */}
            <motion.h1
              id="hero-headline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] font-black uppercase text-[#111111] leading-[0.92] tracking-tight mb-6 sm:mb-8"
            >
              <span className="block">{hero.titleLine1}</span>
              <span className="block">{hero.titleLine2}</span>
            </motion.h1>

            {/* Subtext - Desktop vs Mobile specific */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#444444] text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 sm:mb-10 max-w-lg"
            >
              {/* Desktop version */}
              <p className="hidden sm:block">
                Burgers. Coffee. Momos. Fries. Mojitos.
                <br />
                <span className="text-[#666666]">Made with love, served with happiness.</span>
              </p>
              {/* Mobile version */}
              <p className="block sm:hidden text-sm leading-relaxed">
                Burgers. Coffee. Momos.
                <br />
                Fries. Mojitos. And more.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full sm:w-auto"
            >
              <button
                type="button"
                id="hero-explore-btn"
                onClick={onExploreMenu}
                className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-4 bg-[#111111] hover:bg-[#222222] text-white font-display font-bold text-sm tracking-wider px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>{hero.buttonText}</span>
                <span className="w-8 h-8 rounded-full bg-white text-[#111111] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </motion.div>

            {/* Mouse Scroll Indicator */}
            <motion.button
              type="button"
              onClick={scrollToNext}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:flex items-center gap-3 mt-14 text-xs font-display font-semibold tracking-widest text-[#777777] hover:text-[#111111] transition-colors cursor-pointer"
              aria-label="Scroll to next section"
            >
              {/* Mouse Pill Icon */}
              <div className="w-4 h-7 border-2 border-[#888888] rounded-full flex justify-center p-1">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  className="w-1 h-1.5 bg-[#888888] rounded-full"
                />
              </div>
              <span>{hero.scrollText}</span>
            </motion.button>
          </div>

          {/* Right Column: Hero Food Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Faded Circular Vintage Stamp Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] lg:w-[500px] h-[340px] sm:h-[460px] lg:h-[500px] rounded-full border border-dashed border-[#DCD5C6] pointer-events-none opacity-40 flex items-center justify-center">
              <div className="w-[85%] h-[85%] rounded-full border border-[#DCD5C6] flex items-center justify-center">
                <div className="text-center">
                  <span className="block font-display text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#A69E8D] uppercase">
                    DEVOURAH &amp; SAUREN
                  </span>
                  <span className="block font-display text-xs font-semibold tracking-widest text-[#B5AC9B] mt-0.5">
                    ★ EST. {brand.established} ★
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Hero Image Card with Dish Accents */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md sm:max-w-lg lg:max-w-none z-10"
            >
              {/* Main Platter Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#EBE7DD] aspect-4/3 sm:aspect-16/11 border-2 border-white/60">
                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=90"
                  alt="Devourah & Sauren signature burger, loaded fries and mojito"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Pure Veg Corner Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] ring-2 ring-[#16A34A]/20"></span>
                  <span className="text-[11px] font-display font-bold tracking-wider text-[#111111] uppercase">
                    100% PURE VEG
                  </span>
                </div>

                {/* Floating Dish Highlights */}
                <div className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-md text-white px-4 py-2 rounded-2xl flex items-center gap-3 shadow-lg border border-white/10">
                  <div className="text-right">
                    <p className="text-[11px] text-[#E5A812] font-display font-bold uppercase tracking-wider">Top Rated</p>
                    <p className="text-xs font-bold">Special Veg Platter</p>
                  </div>
                  <span className="text-sm font-display font-bold text-white bg-white/20 px-2 py-0.5 rounded-md">
                    ₹120
                  </span>
                </div>
              </div>

              {/* Floating mini badge: Bhandup West */}
              <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-[#FAF7F2] border border-[#E0D8C8] px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#E5A812] animate-pulse"></span>
                <span className="font-display text-xs font-bold tracking-wider text-[#111111] uppercase">
                  Bhandup, Mumbai
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile scroll indicator */}
        <div className="flex lg:hidden justify-center items-center gap-2 mt-10 text-xs font-display font-semibold tracking-widest text-[#777777]">
          <div className="w-3.5 h-6 border-2 border-[#888888] rounded-full flex justify-center p-0.5">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1 bg-[#888888] rounded-full"
            />
          </div>
          <span>{hero.mobileScrollText}</span>
        </div>
      </div>
    </section>
  );
}
