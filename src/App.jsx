import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { LOCATION, Category } from './constants';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
//
import categoriesImage1 from "./images/categoriesImage1.webp";
import categoriesImage2 from "./images/categoriesImage2.webp";
import categoriesImage3 from "./images/categoriesImage3.webp";
import categoriesImage4 from "./images/categoriesImage4.webp";
import categoriesImage5 from "./images/categoriesImage5.webp";
import categoriesImage6 from "./images/categoriesImage6.webp";
import categoriesImage7 from "./images/categoriesImage7.webp";
import categoriesImage8 from "./images/categoriesImage8.webp";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [PRODUCTS] = useState([
    {
      id: 'p1',
      name: 'New seus lights',
      category: Category.SEUSLIGHTS,
      price: 850000,
      description: 'Beautiful design for sitting executive rooms',
      image: categoriesImage1,
      specs: ['Unique', "seus"],
      featured: true
    },
    {
      id: 'p2',
      name: 'Modern seus lights',
      category: Category.SEUSLIGHTS,
      price: 480000,
      description: 'The ultimate decoration in 2025',
      image: categoriesImage2,
      specs: ['Full set', 'Excellent'],
      featured: true
    },
    {
      id: 'p3',
      name: 'Modern accent lights',
      category: Category.ACCENTLIGHTS,
      price: 240000,
      description: 'New 2025 version of accent lights.',
      image: categoriesImage3,
      specs: ['Accent modern'],
      featured: true
    },
    {
      id: 'p4',
      name: 'Ring accent',
      category: Category.ACCENTLIGHTS,
      price: 4200000,
      description: 'Strikingly bright and beautiful.',
      image: categoriesImage4,
      specs: ['Ring'],
      featured: true
    },
    {
      id: 'p5',
      name: 'Glory ambient lights',
      category: Category.AMBIENTLIGHTS,
      price: 650000,
      description: 'Original ambient executive new model',
      image: categoriesImage5,
      specs: ['LED lights']
    },
    {
      id: 'p6',
      name: 'Glowing ambient lights',
      category: Category.AMBIENTLIGHTS,
      price: 1200000,
      description: 'Industry leading and modern.',
      image: categoriesImage6,
      specs: ['Glorious']
    },
    {
      id: 'p7',
      name: 'Bedroom ambinet lights',
      category: Category.AMBIENTLIGHTS,
      price: 150000,
      description: 'Ultra-high capacity.',
      image: categoriesImage7,
      specs: ['Made in US']
    },
    {
      id: 'p8',
      name: 'Y-ambient lights',
      category: Category.AMBIENTLIGHTS,
      price: 350000,
      description: 'Beautiful',
      image: categoriesImage8,
      specs: ['modern']
    }
  ]);

  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const filteredProducts = selectedCategory === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === selectedCategory);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
      />

      <div className="flex-grow">
        <Hero onShopNow={scrollToProducts} />

        {/* Categories Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold mb-6">Browse Categories</h2>
            <div className="flex flex-wrap gap-2 mb-8">
                {['All', ...Object.values(Category)].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedCategory === cat 
                            ? 'bg-primary text-white shadow-md' 
                            : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div ref={productsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No products found in this category.
                </div>
            )}
        </div>

        {/* Features / Trust Section */}
        <div className="bg-gray-50 py-16">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-white rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-blue-100 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Located in Mbarara</h3>
                        <p className="text-gray-600">Visit us at High Street. Fast delivery to Bushenyi, Ntungamo, and Kabale.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Local Support</h3>
                        <p className="text-gray-600">Expert repairs and advice right here in town. No need to ship to Kampala.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <div className="text-xl font-bold"> UGX </div>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Best Prices</h3>
                        <p className="text-gray-600">We offer competitive pricing on genuine solar pannels, Lights, and machines.</p>
                    </div>
                </div>
             </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">NNAKS Solution Engineering Co Ltd</h3>
                    <p className="text-gray-400 mb-4">Your trusted partner for technology in Western Uganda.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Contact Us</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center"><MapPin size={16} className="mr-2" /> {LOCATION}</li>
                        <li className="flex items-center"><Phone size={16} className="mr-2" /> +256 789495670</li>
                        <li className="flex items-center"><Mail size={16} className="mr-2" /> nakssolutions@gmail.com </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Opening Hours</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>Mon - Sat: 8:00 AM - 7:00 PM</li>
                        <li>Sun: Closed</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} NNAKS Solution Engineering Co Ltd. All rights reserved.
            </div>
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
};

export default App;