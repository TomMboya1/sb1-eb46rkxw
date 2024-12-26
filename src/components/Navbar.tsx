import React from 'react';
import { Film, Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-black/90 backdrop-blur-sm z-50 border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Film className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-orange-500 text-xl font-bold">EXODUS DIGITAL</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#work" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 px-3 py-2 text-sm font-medium">Our Work</a>
              <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 px-3 py-2 text-sm font-medium">Services</a>
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 px-3 py-2 text-sm font-medium">About</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 px-3 py-2 text-sm font-medium">Contact</a>
            </div>
            <ThemeToggle />
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-orange-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-black border-t border-orange-500/20">
            <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 block px-3 py-2 text-base font-medium">Home</a>
            <a href="#work" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 block px-3 py-2 text-base font-medium">Our Work</a>
            <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 block px-3 py-2 text-base font-medium">Services</a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 block px-3 py-2 text-base font-medium">About</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 block px-3 py-2 text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}