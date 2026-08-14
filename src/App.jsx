import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CategoryShowcase from './components/CategoryShowcase.jsx';
import FeaturedMenu from './components/FeaturedMenu.jsx';
import HowItsMade from './components/HowItsMade.jsx';
import AboutUsStory from './components/AboutUsStory.jsx';
import CafeExperience from './components/CafeExperience.jsx';
import VisitUs from './components/VisitUs.jsx';
import FollowUs from './components/FollowUs.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import MenuModal from './components/MenuModal.jsx';

export default function App() {
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState({});

  const handleOpenMenuWithCategory = (catId = 'all') => {
    setSelectedCategory(catId);
    setMenuModalOpen(true);
  };

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const currentQty = prev[item.id]?.quantity || 0;
      return {
        ...prev,
        [item.id]: {
          ...item,
          quantity: currentQty + 1,
        },
      };
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#111111] flex flex-col selection:bg-[#E5A812] selection:text-black">
      
      {/* 1. Header / Navigation */}
      <Navbar
        onOpenMenu={() => handleOpenMenuWithCategory('all')}
        onOpenOrder={() => setMenuModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <Hero
          onExploreMenu={() => handleOpenMenuWithCategory('all')}
        />

        {/* 3. What We Serve / Category Showcase (Dark) */}
        <CategoryShowcase
          onSelectCategory={(catId) => handleOpenMenuWithCategory(catId)}
        />

        {/* 4. Our Favorites / Featured Menu (Light) */}
        <FeaturedMenu
          onAddToCart={handleAddToCart}
          onOpenFullMenu={() => handleOpenMenuWithCategory('all')}
        />

        {/* 5. How It's Made (Good Ingredients Great Taste) */}
        <HowItsMade />

        {/* 6. About Us Story & Warm Neon Ambience */}
        <AboutUsStory />

        {/* 7. Our Café / The Experience (Dark) */}
        <CafeExperience
          onOpenAboutModal={() => {
            const aboutEl = document.getElementById('about');
            if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 8. Visit Us (Light + 4-Photo Showcase + Directions) */}
        <VisitUs />

        {/* 9. Follow Us Social Bar */}
        <FollowUs />

        {/* 10. Final Call to Action (Hungry Yet? View Menu) */}
        <FinalCTA
          onOpenMenu={() => handleOpenMenuWithCategory('all')}
        />

      </main>

      {/* 11. Subtle Desktop Footer */}
      <Footer />

      {/* 12. Full Interactive Menu & Ordering Modal */}
      <MenuModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
        initialCategory={selectedCategory}
        cart={cart}
        setCart={setCart}
      />

    </div>
  );
}
