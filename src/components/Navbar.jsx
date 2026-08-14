import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Phone, Utensils, MapPin } from 'lucide-react';
import { restaurantData } from '../data/restaurantData.js';

export default function Navbar({ onOpenMenu, onOpenOrder }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'MENU', href: '#menu', onClick: (e) => { e.preventDefault(); onOpenMenu?.(); } },
    { name: 'ABOUT', href: '#about' },
    { name: 'VISIT', href: '#visit' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'py-3.5 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EAE4D8] shadow-xs'
            : 'py-5 sm:py-6 bg-[#FAF7F2]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            id="brand-logo"
            className="group flex flex-col leading-none select-none text-left focus:outline-none"
            aria-label="Devourah & Sauren Home"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#111111] uppercase">
              DEVOURAH
            </span>
            <span className="font-display text-xs sm:text-sm font-semibold tracking-wider text-[#333333] uppercase">
              &amp; SAUREN
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <nav className="flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={link.onClick}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className="font-display text-sm font-bold tracking-wider text-[#111111] hover:text-[#E5A812] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* ORDER NOW pill button */}
            <button
              type="button"
              id="nav-order-btn"
              onClick={() => onOpenOrder ? onOpenOrder() : window.open(restaurantData.social.whatsapp, '_blank')}
              className="bg-[#111111] hover:bg-[#E5A812] text-white hover:text-black font-display font-bold text-xs tracking-widest px-6 py-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-xs"
            >
              ORDER NOW
            </button>

            {/* Desktop Hamburger Icon button */}
            <button
              type="button"
              id="desktop-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111111] hover:opacity-70 transition-opacity focus:outline-none cursor-pointer"
              aria-label="Toggle Menu Drawer"
            >
              <div className="w-5 flex flex-col items-end gap-1">
                <span className="w-5 h-0.5 bg-[#111111] rounded-full"></span>
                <span className="w-5 h-0.5 bg-[#111111] rounded-full"></span>
                <span className="w-5 h-0.5 bg-[#111111] rounded-full"></span>
              </div>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111111] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <div className="w-6 flex flex-col items-end gap-1.5">
                  <span className="w-6 h-0.5 bg-[#111111] rounded-full"></span>
                  <span className="w-6 h-0.5 bg-[#111111] rounded-full"></span>
                  <span className="w-6 h-0.5 bg-[#111111] rounded-full"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="nav-drawer"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 w-full sm:w-96 z-50 bg-[#FAF7F2] border-l border-[#E5DFD3] p-6 sm:p-8 flex flex-col justify-between shadow-2xl"
          >
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E5DFD3]">
                <div>
                  <span className="font-display text-xl font-bold tracking-tight text-[#111111] block uppercase">
                    DEVOURAH
                  </span>
                  <span className="font-display text-xs font-semibold tracking-wider text-[#555555] block uppercase">
                    &amp; SAUREN
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-black/5 text-[#111111]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-4 py-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      if (link.onClick) link.onClick(e);
                      setMobileMenuOpen(false);
                    }}
                    className="font-display text-3xl font-bold text-[#111111] hover:text-[#E5A812] transition-colors py-2 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-5 h-5 text-neutral-400" />
                  </a>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenMenu?.();
                  }}
                  className="w-full mt-4 bg-[#111111] hover:bg-[#E5A812] text-white hover:text-black font-display font-bold text-sm tracking-wider py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Utensils className="w-4 h-4" />
                  <span>EXPLORE FULL MENU</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.open(restaurantData.social.whatsapp, '_blank');
                  }}
                  className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-display font-bold text-sm tracking-wider py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>ORDER ON WHATSAPP</span>
                </button>
              </div>
            </div>

            {/* Bottom info */}
            <div className="pt-6 border-t border-[#E5DFD3] text-xs text-[#666666]">
              <p className="font-semibold text-[#111111]">Devourah &amp; Sauren</p>
              <p>Bhandup West, Mumbai</p>
              <p className="mt-1 text-[#16A34A] font-bold">● 100% Pure Vegetarian</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs"
          />
        )}
      </AnimatePresence>
    </>
  );
}
