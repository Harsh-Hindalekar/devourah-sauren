import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass, ArrowRight, Clock, Navigation } from 'lucide-react';
import { restaurantData } from '../data/restaurantData.js';

export default function VisitUs() {
  const { visit } = restaurantData;

  const handleDirections = () => {
    window.open(visit.mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="visit"
      className="bg-[#FAF7F2] py-20 sm:py-24 md:py-28 border-b border-[#EAE4D8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Desktop Layout: Left Info & CTA + Right 4-Photo Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-4 text-left">
            
            {/* Compass badge + Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#EFECE4] border border-[#DDD6C8] flex items-center justify-center text-[#111111]">
                <Compass className="w-4 h-4 text-[#E5A812]" />
              </div>
              <span className="font-display text-xs font-bold tracking-[0.2em] text-[#888888] uppercase">
                {visit.label}
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#111111] leading-[0.95] tracking-tight mb-6">
              SEE YOU AT
              <br />
              DEVOURAH.
            </h2>

            {/* Location Tag */}
            <div className="flex items-center gap-2 text-[#444444] text-base sm:text-lg mb-8 font-medium">
              <MapPin className="w-5 h-5 text-[#E5A812] shrink-0" />
              <span>{visit.city}</span>
            </div>

            {/* GET DIRECTIONS Pill Button */}
            <button
              type="button"
              id="get-directions-btn"
              onClick={handleDirections}
              className="group inline-flex items-center gap-4 bg-[#111111] hover:bg-[#222222] text-white font-display font-bold text-xs tracking-widest px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>{visit.ctaText}</span>
              <span className="w-7 h-7 rounded-full bg-white text-[#111111] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            {/* Operating Hours Note */}
            <div className="mt-6 flex items-center gap-2 text-xs text-[#777777]">
              <Clock className="w-3.5 h-3.5 text-[#E5A812]" />
              <span>Open Daily: 11:00 AM – 11:00 PM</span>
            </div>
          </div>

          {/* Right Column: 4 Square Photos in a row (Desktop) / Gallery Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-4">
              {visit.gallery.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden aspect-square bg-[#EAE4D8] border border-[#DDD6C8] shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Mobile Map Preview Card */}
            <div className="block sm:hidden mt-6 bg-[#EFECE4] border border-[#DDD6C8] rounded-2xl p-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black text-[#E5A812] flex items-center justify-center shrink-0">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-[#111111] uppercase">Devourah &amp; Sauren</p>
                  <p className="text-xs text-[#666666]">Bhandup West, Mumbai</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
