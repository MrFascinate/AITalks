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

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
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

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="card-gradient-border">
            <div className="relative z-10 p-8 md:p-12">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8">
                <Quote className="w-6 h-6 text-primary-500/30" />
              </div>

              {/* Testimonial Content */}
              <div className="relative min-h-[280px] flex items-center justify-center">
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
                    className="text-center px-4"
                  >
                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    {/* Author */}
                    <div>
                      <p className="text-gradient font-bold text-lg">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-gray-400">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => paginate(-1)}
                  className="w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/50 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dots */}
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
