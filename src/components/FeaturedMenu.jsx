import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Plus, Check } from 'lucide-react';
import { restaurantData } from '../data/restaurantData.js';

export default function FeaturedMenu({ onAddToCart, onOpenFullMenu }) {
  const { featuredMenu } = restaurantData;
  const [addedItems, setAddedItems] = useState({});
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleAdd = (item) => {
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    if (onAddToCart) onAddToCart(item);
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % featuredMenu.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + featuredMenu.length) % featuredMenu.length);
  };

  return (
    <section
      id="featured-section"
      className="bg-[#FAF7F2] py-20 sm:py-24 md:py-28 border-b border-[#EAE4D8]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Desktop Header Grid: Left Headline & Arrow Controls */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-end mb-14">
          <div className="col-span-8 text-left">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="font-display text-xs font-bold tracking-[0.2em] text-[#888888] uppercase block mb-2"
            >
              OUR FAVORITES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#111111] leading-[0.95] tracking-tight"
            >
              MADE FOR
              <br />
              FOOD LOVERS.
            </motion.h2>
          </div>
          <div className="col-span-4 flex justify-end items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-[#D5CEC0] bg-[#FAF7F2] hover:bg-black hover:text-white hover:border-black text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous Featured Items"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-[#D5CEC0] bg-[#FAF7F2] hover:bg-black hover:text-white hover:border-black text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next Featured Items"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="block lg:hidden text-left mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl font-black uppercase tracking-tight text-[#111111]"
          >
            FEATURED FOR YOU
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredMenu.map((item, index) => {
            const isAdded = addedItems[item.id];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#EFECE4] rounded-3xl overflow-hidden border border-[#E2DBD0] hover:border-[#D0C7B8] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Container */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-[#E2DBD0]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Pure veg indicator */}
                    <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-xs p-1.5 rounded-lg shadow-xs">
                      <div className="w-3.5 h-3.5 border-2 border-[#16A34A] flex items-center justify-center rounded-xs">
                        <div className="w-1.5 h-1.5 bg-[#16A34A] rounded-full"></div>
                      </div>
                    </div>

                    {/* Quick Add overlay button */}
                    <button
                      type="button"
                      onClick={() => handleAdd(item)}
                      className={`absolute bottom-3.5 right-3.5 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-90 cursor-pointer ${
                        isAdded
                          ? 'bg-[#16A34A] text-white'
                          : 'bg-[#111111] hover:bg-[#E5A812] text-white hover:text-black'
                      }`}
                      title="Add to order"
                    >
                      {isAdded ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 text-left">
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#111111] mb-2 leading-tight">
                      {item.name}
                    </h3>
                    
                    <p className="text-[#666666] text-sm leading-relaxed mb-4">
                      <span className="hidden sm:inline">{item.description}</span>
                      <span className="inline sm:hidden">{item.mobileDescription}</span>
                    </p>
                  </div>
                </div>

                {/* Card Price Row */}
                <div className="px-6 sm:px-7 pb-6 pt-0 flex items-center justify-between border-t border-[#E2DBD0]/60 mt-auto">
                  <span className="font-display text-2xl font-black text-[#111111]">
                    {item.currency}{item.price}
                  </span>
                  
                  <button
                    type="button"
                    onClick={() => handleAdd(item)}
                    className="font-display text-xs font-bold tracking-wider text-[#111111] hover:text-[#E5A812] uppercase transition-colors"
                  >
                    {isAdded ? 'Added ✓' : '+ Add Item'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Pagination Indicator */}
        <div className="flex lg:hidden justify-center items-center gap-2 mt-8">
          <span className="w-6 h-1.5 bg-[#111111] rounded-full"></span>
          <span className="w-2 h-1.5 bg-[#D5CEC0] rounded-full"></span>
          <span className="w-2 h-1.5 bg-[#D5CEC0] rounded-full"></span>
        </div>

        {/* Bottom CTA to view all items */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenFullMenu}
            className="inline-flex items-center gap-2 text-xs font-display font-bold tracking-widest text-[#111111] hover:text-[#E5A812] uppercase border-b-2 border-black hover:border-[#E5A812] pb-1 transition-colors"
          >
            VIEW FULL 100% PURE VEG MENU →
          </button>
        </div>

      </div>
    </section>
  );
}
