import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface StickyBookingButtonProps {
  onBookClick: () => void;
}

export default function StickyBookingButton({ onBookClick }: StickyBookingButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the hero section (about 600px)
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.button
            onClick={onBookClick}
            className="flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-5 py-3 rounded-full shadow-lg shadow-primary-500/30 font-semibold text-sm uppercase tracking-wider"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(37, 133, 232, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Book Now</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
