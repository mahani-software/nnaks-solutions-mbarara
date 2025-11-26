import React from 'react';
import { ShoppingCart, Menu, Search, Smartphone } from 'lucide-react';
import { SHOP_NAME } from '../constants';

export const Navbar = ({ cartCount, onCartClick, onMenuClick }) => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-100 shadow-sm bg-blue-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-primary text-white p-2 rounded-lg mr-3">
              <Smartphone size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight text-white hidden sm:block">
              {SHOP_NAME}
            </span>
            <span className="font-bold text-xl tracking-tight text-white sm:hidden">
              NNAKS SOLUTIONS
            </span>
          </div>

          {/* Search (Visual Only) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-1 focus:ring-accent focus:border-accent sm:text-sm transition duration-150 ease-in-out"
                placeholder="Search ..."
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onCartClick}
              className="relative p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
            >
              <ShoppingCart size={24} color="white" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={onMenuClick}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 text-gray-600"
            >
              <Menu size={24} color="white"/>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};