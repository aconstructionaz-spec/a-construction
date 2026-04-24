import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Haqqımızda', href: '#about' },
  { name: 'Xidmətlər', href: '#services' },
  { name: 'Layihələr', href: '#projects' },
  { name: 'Əlaqə', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center transition-transform hover:scale-105 active:scale-95 duration-300"
          id="logo"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1i_B0qfP6BBUevY9by6BlfAC0t9VY7py1" 
            alt="A Construction Logo" 
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-brand-blue transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+994502551963"
            className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all ${
              isScrolled 
              ? 'border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white' 
              : 'border-white text-white hover:bg-white hover:text-brand-blue'
            }`}
          >
            <Phone size={16} />
            <span className="font-semibold">+994 50 255 19 63</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden border-t border-gray-100"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-800 hover:text-brand-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+994502551963"
                className="flex items-center justify-center space-x-2 px-4 py-4 rounded-xl bg-brand-blue text-white font-bold"
              >
                <Phone size={20} />
                <span>+994 50 255 19 63</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
