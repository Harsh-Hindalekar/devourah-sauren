import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Plus, Minus, ShoppingBag, Phone, Check } from 'lucide-react';
import { restaurantData } from '../data/restaurantData.js';

export default function MenuModal({ isOpen, onClose, initialCategory = 'all', cart, setCart }) {
  const { allMenuItems, categories, social } = restaurantData;
  const [selectedCat, setSelectedCat] = useState(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCartOnly, setShowCartOnly] = useState(false);

  // Sync category if initialCategory changes
  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCat(initialCategory);
    }
  }, [initialCategory]);

  const filteredItems = allMenuItems.filter((item) => {
    const matchesCategory = selectedCat === 'all' || item.category === selectedCat;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getItemQuantity = (id) => {
    return cart[id]?.quantity || 0;
  };

  const updateQuantity = (item, delta) => {
    setCart((prev) => {
      const currentQty = prev[item.id]?.quantity || 0;
      const newQty = Math.max(0, currentQty + delta);
      if (newQty === 0) {
        const nextCart = { ...prev };
        delete nextCart[item.id];
        return nextCart;
      }
      return {
        ...prev,
        [item.id]: {
          ...item,
          quantity: newQty,
        },
      };
    });
  };

  const totalCartCount = Object.values(cart).reduce((sum, i) => sum + i.quantity, 0);
  const totalCartPrice = Object.values(cart).reduce((sum, i) => sum + (i.price * i.quantity), 0);

  const handleCheckoutWhatsApp = () => {
    if (totalCartCount === 0) return;
    let orderText = `*New Order - Devourah & Sauren*\n\n`;
    Object.values(cart).forEach((item) => {
      orderText += `• ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });
    orderText += `\n*Total Amount:* ₹${totalCartPrice}\n`;
    orderText += `\n_Please confirm my order. Thank you!_`;
    
    const encoded = encodeURIComponent(orderText);
    window.open(`https://wa.me/919876543210?text=${encoded}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E0D8C8] overflow-hidden flex flex-col max-h-[92vh] z-10"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#EAE4D8] flex items-center justify-between bg-[#FAF7F2] sticky top-0 z-20">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#111111]">
                  Devourah &amp; Sauren Menu
                </span>
                <span className="hidden sm:inline-block bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/20 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  100% Pure Veg
                </span>
              </div>
              <p className="text-xs text-[#777777] mt-0.5">
                Bhandup West, Mumbai • Freshly Handcrafted
              </p>
            </div>

            <div className="flex items-center gap-2">
              {totalCartCount > 0 && (
                <button
                  type="button"
                  onClick={() => setShowCartOnly(!showCartOnly)}
                  className="flex items-center gap-2 bg-[#111111] text-white px-3.5 py-2 rounded-full text-xs font-display font-bold uppercase tracking-wider hover:bg-[#E5A812] hover:text-black transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Cart ({totalCartCount}) • ₹{totalCartPrice}</span>
                </button>
              )}

              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-[#EFECE4] hover:bg-black hover:text-white text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close menu modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search & Category Filter Pills */}
          {!showCartOnly && (
            <div className="px-5 sm:px-6 pt-4 pb-3 border-b border-[#EAE4D8] bg-[#FAF7F2] space-y-3">
              {/* Search input */}
              <div className="relative">
                <Search className="w-4 h-4 text-[#888888] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search burgers, momos, coffee, mojitos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-[#EFECE4] border border-[#E0D8C8] rounded-full text-xs sm:text-sm text-[#111111] placeholder:text-[#888888] focus:outline-none focus:border-black"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                <button
                  type="button"
                  onClick={() => setSelectedCat('all')}
                  className={`px-4 py-1.5 rounded-full text-xs font-display font-bold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCat === 'all'
                      ? 'bg-[#111111] text-white'
                      : 'bg-[#EFECE4] text-[#555555] hover:text-[#111111]'
                  }`}
                >
                  ALL ITEMS
                </button>

                {categories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedCat(c.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-display font-bold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                      selectedCat === c.id
                        ? 'bg-[#111111] text-white'
                        : 'bg-[#EFECE4] text-[#555555] hover:text-[#111111]'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Menu Items List or Cart View */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {showCartOnly ? (
              /* Cart View */
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold uppercase text-[#111111]">
                    Your Order Summary ({totalCartCount} items)
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowCartOnly(false)}
                    className="text-xs font-bold text-[#E5A812] hover:underline uppercase tracking-wider"
                  >
                    ← Back to Menu
                  </button>
                </div>

                {Object.values(cart).length === 0 ? (
                  <p className="text-sm text-[#777777] py-8 text-center">Your cart is empty. Add some delicious dishes!</p>
                ) : (
                  <div className="divide-y divide-[#EAE4D8]">
                    {Object.values(cart).map((item) => (
                      <div key={item.id} className="py-3 flex items-center justify-between">
                        <div>
                          <p className="font-display font-bold text-base text-[#111111] uppercase">{item.name}</p>
                          <p className="text-xs text-[#777777]">₹{item.price} each</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center bg-[#EFECE4] border border-[#DDD6C8] rounded-full p-1">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item, -1)}
                              className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold hover:bg-black hover:text-white transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center font-display font-bold text-sm">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item, 1)}
                              className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs font-bold hover:bg-black hover:text-white transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-display font-bold text-base w-16 text-right">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* Menu Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems.map((item) => {
                  const qty = getItemQuantity(item.id);
                  return (
                    <div
                      key={item.id}
                      className="bg-[#EFECE4] border border-[#E0D8C8] rounded-2xl p-4 flex gap-4 items-center justify-between group hover:border-[#CCC4B4] transition-colors"
                    >
                      {/* Image Thumbnail */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#DDD6C8] shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0 pr-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
                          <h4 className="font-display text-sm sm:text-base font-bold uppercase tracking-tight text-[#111111] truncate">
                            {item.name}
                          </h4>
                        </div>
                        <p className="text-[#666666] text-xs line-clamp-2 mt-0.5">
                          {item.description}
                        </p>
                        <p className="font-display text-base font-black text-[#111111] mt-1">
                          ₹{item.price}
                        </p>
                      </div>

                      {/* Add/Quantity Buttons */}
                      <div className="shrink-0">
                        {qty === 0 ? (
                          <button
                            type="button"
                            onClick={() => updateQuantity(item, 1)}
                            className="bg-[#111111] hover:bg-[#E5A812] text-white hover:text-black font-display font-bold text-xs uppercase px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                          >
                            + ADD
                          </button>
                        ) : (
                          <div className="flex items-center bg-white border border-[#DDD6C8] rounded-full p-0.5">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item, -1)}
                              className="w-6 h-6 rounded-full hover:bg-black hover:text-white flex items-center justify-center transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center font-display font-bold text-xs">{qty}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item, 1)}
                              className="w-6 h-6 rounded-full hover:bg-black hover:text-white flex items-center justify-center transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer Checkout Bar */}
          {totalCartCount > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#EAE4D8] bg-[#FAF7F2] flex items-center justify-between">
              <div>
                <p className="text-xs text-[#777777] uppercase font-bold tracking-wider">Total ({totalCartCount} Items)</p>
                <p className="font-display text-2xl font-black text-[#111111]">₹{totalCartPrice}</p>
              </div>

              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-display font-bold text-xs sm:text-sm tracking-wider px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-transform active:scale-95 cursor-pointer uppercase"
              >
                <Phone className="w-4 h-4" />
                <span>Order via WhatsApp</span>
              </button>
            </div>
          )}
        </motion.div>

      </div>
    </AnimatePresence>
  );
}
