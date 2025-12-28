import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Star, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Residences', href: '/residences' },
  { label: 'Locations', href: '/locations' },
  { label: 'Experience', href: '/experience' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <Star className="h-6 w-6 text-[#00BFA5] fill-[#00BFA5]" />
            </motion.div>
            <span className="text-xl font-bold tracking-tight text-[#0D47A1] font-montserrat">
              HAVEN LIVING
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`relative group text-sm font-medium transition-colors ${
                  location.pathname === item.href ? 'text-[#00BFA5]' : 'text-[#212529] hover:text-[#00BFA5]'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#00BFA5] transition-all duration-300 ${
                   location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:180042836" className="flex items-center gap-2 text-[#212529] hover:text-[#00BFA5] transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-semibold">1-800-HAVEN</span>
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#00BFA5] to-[#009688] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#00BFA5]/30 hover:shadow-[#00BFA5]/50 transition-all"
            >
              Reserve Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#212529] hover:text-[#00BFA5] p-2"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-base font-medium rounded-lg px-3 py-2 ${
                    location.pathname === item.href 
                    ? 'text-[#00BFA5] bg-[#E0F7FA]' 
                    : 'text-[#212529] hover:text-[#00BFA5] hover:bg-[#E0F7FA]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                <a href="tel:180042836" className="flex items-center gap-2 text-[#212529]">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm font-semibold">1-800-HAVEN</span>
                </a>
                <button className="w-full bg-gradient-to-r from-[#00BFA5] to-[#009688] text-white px-6 py-3 rounded-lg text-sm font-bold">
                  Reserve Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};