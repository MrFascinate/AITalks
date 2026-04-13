import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { speakerData } from '../data/speakerData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = speakerData.testimonials;

  // Desktop shows 3 at a time, mobile shows 1
  const desktopItemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / desktopItemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  // Get current page index for desktop (groups of 3)
  const currentPageIndex = Math.floor(currentIndex / desktopItemsPerPage);

  // Get testimonials for current desktop page
  const getDesktopTestimonials = () => {
    const startIndex = currentPageIndex * desktopItemsPerPage;
    return testimonials.slice(startIndex, startIndex + desktopItemsPerPage);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  // Testimonial card component
  const TestimonialCard = ({ testimonial, className = "" }: { testimonial: typeof testimonials[0], className?: string }) => (
    <div className={`card-gradient-border h-full ${className}`}>
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
        <Quote className="w-6 h-6 text-primary-500/30 mb-4 flex-shrink-0" />
        <blockquote className="text-lg text-white font-medium leading-relaxed mb-6 flex-grow">
          "{testimonial.quote}"
        </blockquote>
        <div className="mt-auto">
          {testimonial.organization ? (
            <>
              <p className="text-gradient font-bold text-xl">
                {testimonial.organization}
              </p>
              <p className="text-gray-400 text-sm mt-1">
                {testimonial.author}{testimonial.role ? `, ${testimonial.role}` : ''}
              </p>
            </>
          ) : (
            <>
              <p className="text-gradient font-bold text-lg">
                {testimonial.author}
              </p>
              <p className="text-gray-400 text-sm">
                {testimonial.role}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-24 bg-primary-950 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl" />
      </div>

      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
            WHAT PEOPLE ARE{' '}
            <span className="text-gradient">SAYING</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Feedback from {speakerData.stats.audienceFeedback.toLocaleString()}+ audience members across conferences and events worldwide.
          </p>
        </motion.div>

        {/* Desktop: 3 testimonials in a row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPageIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="grid grid-cols-3 gap-6"
            >
              {getDesktopTestimonials().map((testimonial, idx) => (
                <TestimonialCard key={`${currentPageIndex}-${idx}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Desktop Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => {
                setDirection(-1);
                const newPageIndex = currentPageIndex === 0 ? totalPages - 1 : currentPageIndex - 1;
                setCurrentIndex(newPageIndex * desktopItemsPerPage);
              }}
              className="w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/50 transition-all"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentPageIndex ? 1 : -1);
                    setCurrentIndex(index * desktopItemsPerPage);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentPageIndex
                      ? 'w-8 bg-gradient-to-r from-primary-500 to-accent-400'
                      : 'w-2.5 bg-primary-700 hover:bg-primary-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                setDirection(1);
                const newPageIndex = currentPageIndex === totalPages - 1 ? 0 : currentPageIndex + 1;
                setCurrentIndex(newPageIndex * desktopItemsPerPage);
              }}
              className="w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/50 transition-all"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Mobile: Single testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:hidden max-w-lg mx-auto"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/50 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-primary-500 to-accent-400'
                      : 'w-2.5 bg-primary-700 hover:bg-primary-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/50 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
