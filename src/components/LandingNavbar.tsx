import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface LandingNavbarProps {
  onBookClick: () => void;
}

export default function LandingNavbar({ onBookClick }: LandingNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
    >
      <div className={`floating-header transition-all duration-300 ${
        isScrolled ? 'shadow-2xl shadow-primary-500/10' : ''
      }`}>
        <div className="relative z-10 px-6 py-3 md:px-8 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/mr_fascinate_logo_transparent_blue.png"
                alt="Mr. Fascinate"
                className="h-6 md:h-8 w-auto object-contain"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <motion.a
                href="/"
                className="text-gray-300 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider"
                whileHover={{ y: -2 }}
              >
                Main Site
              </motion.a>
              <motion.button
                onClick={onBookClick}
                className="btn-gradient-border text-sm py-2 px-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="mt-2 glass rounded-2xl overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              <a
                href="/"
                className="block text-gray-300 hover:text-white py-2 font-medium text-sm uppercase tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Main Site
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className="block w-full btn-gradient-solid text-center mt-4"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
