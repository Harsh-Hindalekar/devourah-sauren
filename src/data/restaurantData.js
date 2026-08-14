/**
 * DEVOURAH & SAUREN - RESTAURANT DATA SOURCE OF TRUTH
 * Exactly matches the Desktop & Mobile visual references.
 */

export const restaurantData = {
  brand: {
    name: "DEVOURAH",
    subName: "& SAUREN",
    fullName: "Devourah & Sauren",
    tagline: "Good Food. Good Mood.",
    description: "Devourah & Sauren is a vegetarian café serving your comfort food with a twist. Burgers, momos, coffee, mojitos and everything in between. Made with passion. Served with love.",
    instagramHandle: "@devourahandsauren",
    established: "2024",
    pureVegBadgeText: "100% PURE VEGETARIAN"
  },

  hero: {
    titleLine1: "GOOD FOOD.",
    titleLine2: "GOOD MOOD.",
    description: "Burgers. Coffee. Momos. Fries. Mojitos.\nMade with love, served with happiness.",
    mobileDescription: "Burgers. Coffee. Momos.\nFries. Mojitos. And more.",
    buttonText: "EXPLORE MENU",
    buttonLink: "#menu",
    scrollText: "SCROLL DOWN",
    mobileScrollText: "SCROLL",
    // Composition photo matching reference (burger, fries, mojito, momos)
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=90",
    burgerCutout: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90"
  },

  categories: [
    {
      id: "burgers",
      num: "01",
      name: "BURGERS",
      title: "Burgers that hit different.",
      description: "Crispy. Juicy. Loaded.\nMade fresh, every single time.",
      ctaText: "VIEW BURGERS",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90"
    },
    {
      id: "momos",
      num: "02",
      name: "MOMOS",
      title: "Steamed to perfection.",
      description: "Delicate wrappers. Fresh herbs.\nServed hot with our spicy dip.",
      ctaText: "VIEW MOMOS",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=90"
    },
    {
      id: "fries",
      num: "03",
      name: "FRIES",
      title: "Crispy and loaded.",
      description: "Golden. Seasoned. Smothered.\nIrresistible with every bite.",
      ctaText: "VIEW FRIES",
      image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=900&q=90"
    },
    {
      id: "coffee",
      num: "04",
      name: "COFFEE",
      title: "Smooth and refreshing.",
      description: "Chilled cold brew & bold espresso.\nYour ultimate pick-me-up.",
      ctaText: "VIEW COFFEE",
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=90"
    },
    {
      id: "mojitos",
      num: "05",
      name: "MOJITOS",
      title: "Fresh and refreshing.",
      description: "Muddled Persian lime & garden mint.\nFizzy botanical chillers.",
      ctaText: "VIEW MOJITOS",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=90"
    }
  ],

  featuredMenu: [
    {
      id: "f1",
      name: "DEVOURAH SPECIAL BURGER",
      description: "Crispy veg patty, cheese, special sauce, fresh veggies.",
      mobileDescription: "Crispy. Loaded. Absolutely worth it.",
      price: 120,
      currency: "₹",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85",
      category: "burgers"
    },
    {
      id: "f2",
      name: "SPICY VEG MOMOS",
      description: "Steamed to perfection, served with our hot & spicy dip.",
      mobileDescription: "Steamed to perfection. Served hot with our spicy dip.",
      price: 90,
      currency: "₹",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=85",
      category: "momos"
    },
    {
      id: "f3",
      name: "COLD COFFEE",
      description: "Chilled. Creamy. Perfect pick-me-up.",
      mobileDescription: "Smooth. Creamy. Perfect pick-me-up.",
      price: 80,
      currency: "₹",
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=85",
      category: "coffee"
    }
  ],

  howItsMade: {
    eyebrow: "HOW IT'S MADE",
    title: "GOOD INGREDIENTS.\nGREAT TASTE.",
    steps: [
      {
        num: "01",
        title: "FRESH INGREDIENTS",
        description: "We start with only the freshest.",
        icon: "leaf"
      },
      {
        num: "02",
        title: "PERFECT SPICE",
        description: "A blend that brings out the real flavour.",
        icon: "spice"
      },
      {
        num: "03",
        title: "COOKED WITH CARE",
        description: "Made hot. Made fresh. Made right.",
        icon: "flame"
      },
      {
        num: "04",
        title: "MADE FOR YOU",
        description: "Just the way you love it.",
        icon: "burger"
      }
    ],
    burgerImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=90"
  },

  aboutUsStory: {
    eyebrow: "ABOUT US",
    title: "WE BELIEVE IN\nGOOD FOOD AND\nGOOD COMPANY.",
    description: "Devourah & Sauren is a vegetarian café serving your comfort food with a twist. Burgers, momos, coffee, mojitos and everything in between. Made with passion. Served with love.",
    neonImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=85"
  },

  cafeExperience: {
    eyebrow: "THE EXPERIENCE",
    desktopEyebrow: "OUR CAFÉ",
    title: "A LITTLE BREAK\nNEVER HURTS.",
    lines: [
      "Coffee after work.",
      "Momos with friends.",
      "Mojitos on a good evening.",
      "That's what we're all about."
    ],
    ctaText: "ABOUT US",
    // Wide café interior image with neon sign
    desktopWideImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=85",
    mobileImages: [
      {
        id: "m_exp_1",
        title: "Fresh Mojitos",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85"
      },
      {
        id: "m_exp_2",
        title: "Good Food Good Mood Neon Café",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=85"
      },
      {
        id: "m_exp_3",
        title: "Artisanal Coffee Latte Art",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=85"
      }
    ]
  },

  visit: {
    label: "VISIT US",
    title: "SEE YOU AT\nDEVOURAH.",
    city: "Bhandup, Mumbai",
    address: "Shop No. 4, Ground Floor, Near Station Road, Bhandup West, Mumbai, Maharashtra 400078",
    mapsUrl: "https://maps.google.com/?q=Bhandup+West+Mumbai",
    ctaText: "GET DIRECTIONS",
    gallery: [
      {
        id: "g1",
        title: "Café Exterior DEVOURAH & SAUREN",
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=85"
      },
      {
        id: "g2",
        title: "Two Fresh Mint Mojitos",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85"
      },
      {
        id: "g3",
        title: "Loaded Golden Fries with Dip",
        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=85"
      },
      {
        id: "g4",
        title: "Hot Latte Art Coffee",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=85"
      }
    ]
  },

  finalCTA: {
    heading: "HUNGRY YET?",
    subheading: "What are you craving today?",
    buttonText: "VIEW MENU"
  },

  social: {
    instagram: "https://instagram.com/devourahandsauren",
    facebook: "https://facebook.com/devourahandsauren",
    whatsapp: "https://wa.me/919876543210?text=Hi%20Devourah%20%26%20Sauren,%20I%20would%20like%20to%20place%20an%20order!"
  },

  footer: {
    copyright: "© 2025 Devourah & Sauren. All rights reserved."
  },

  allMenuItems: [
    {
      id: "b1",
      name: "DEVOURAH SPECIAL BURGER",
      description: "Crispy veg patty, cheese, special sauce, fresh veggies.",
      price: 120,
      category: "burgers",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "b2",
      name: "PANEER CRUNCH BURGER",
      description: "Marinated grilled paneer, tandoori relish, fresh lettuce.",
      price: 140,
      category: "burgers",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "b3",
      name: "CHEESE VOLCANO BURGER",
      description: "Molten cheese oozing patty with herb garlic spread.",
      price: 150,
      category: "burgers",
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "m1",
      name: "SPICY VEG MOMOS",
      description: "Steamed to perfection, served with our hot & spicy dip.",
      price: 90,
      category: "momos",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "m2",
      name: "PANEER CORN STEAMED MOMOS",
      description: "Soft paneer cubes & sweet corn seasoned with crushed herbs.",
      price: 110,
      category: "momos",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "fr1",
      name: "PERI-PERI LOADED FRIES",
      description: "Crispy fries tossed in peri-peri seasoning with cheese sauce.",
      price: 110,
      category: "fries",
      image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "fr2",
      name: "CLASSIC SALTED FRIES",
      description: "Crispy golden french fries with tomato garlic dip.",
      price: 80,
      category: "fries",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "c1",
      name: "COLD COFFEE",
      description: "Chilled. Creamy. Perfect pick-me-up.",
      price: 80,
      category: "coffee",
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "c2",
      name: "HOT LATTE ART COFFEE",
      description: "Freshly pulled espresso with velvety steamed milk.",
      price: 85,
      category: "coffee",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "mj1",
      name: "VIRGIN MINT LIME MOJITO",
      description: "Fresh mint, lime wedges, crushed ice & sparkling soda.",
      price: 80,
      category: "mojitos",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85"
    },
    {
      id: "mj2",
      name: "BLUE LAGOON MOJITO",
      description: "Curacao citrus cooler with soda and fresh lemon slice.",
      price: 95,
      category: "mojitos",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=85"
    }
  ]
};
