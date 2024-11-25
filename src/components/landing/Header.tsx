import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-900/50 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Quantum Tasks
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-slate-300 hover:text-white transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-slate-300 hover:text-white transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-slate-300 hover:text-white transition-colors">
              Testimonials
            </button>
            <Link
              to="/demo"
              className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
            >
              Try Demo
            </Link>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-slate-800">
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                Testimonials
              </button>
              <Link
                to="/demo"
                className="block px-3 py-2 text-white bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
              >
                Try Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}