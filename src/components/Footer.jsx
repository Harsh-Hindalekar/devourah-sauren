import React from 'react';
import { restaurantData } from '../data/restaurantData.js';

export default function Footer() {
  const { brand, footer } = restaurantData;

  return (
    <footer className="hidden lg:block bg-[#070707] text-neutral-500 py-6 border-t border-neutral-800 text-xs">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <div>
          <span className="text-white font-display font-bold uppercase tracking-wider">{brand.fullName}</span>
          <span className="mx-2">•</span>
          <span>Bhandup West, Mumbai</span>
          <span className="mx-2">•</span>
          <span className="text-[#16A34A] font-semibold">100% Pure Vegetarian</span>
        </div>

        <div>
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
