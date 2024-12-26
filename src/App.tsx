import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Services from './components/Services';
import Contact from './components/Contact';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black">
        <Navbar />
        <Hero />
        <Work />
        <Services />
        <Contact />
        <footer className="bg-white dark:bg-black py-6 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Exodus Digital. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}