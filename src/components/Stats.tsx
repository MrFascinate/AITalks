import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { speakerData } from '../data/speakerData';

const stats = [
  {
    value: 100000,
    label: "Professionals Trained",
    suffix: "+",
    displayValue: "100,000+",
  },
  {
    value: 5000000,
    label: "Reached",
    suffix: "+",
    displayValue: "5M+",
  },
  {
    value: 250,
    label: "Corporate & Educator Clients",
    suffix: "+",
    displayValue: "250+",
  },
  {
    value: 98,
    label: "Would See Justin Speak Again",
    suffix: "%",
  },
];

function AnimatedCounter({ value, suffix, displayValue }: { value: number; suffix: string; displayValue?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  if (displayValue && isInView && count >= value) {
    return <span ref={ref}>{displayValue}</span>;
  }

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative pt-12 pb-0 bg-primary-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
      </div>

      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      {/* Left side - Suit image (positioned at bottom) */}
      <motion.div
        className="hidden lg:block absolute bottom-0 -left-[8%] w-[65%]"
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/suit-transparent.webp"
          alt="Justin Shaifer"
          className="w-full h-auto object-contain"
          style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.6))' }}
          loading="lazy"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-[35%]">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
            JUSTIN'S <span className="text-gradient">IMPACT</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="stat-item"
            >
              <div className="card-gradient-border p-4 text-center h-full min-h-[150px] flex items-center justify-center">
                <div className="relative z-10 w-full">
                  {/* Value */}
                  <div className="text-3xl md:text-4xl font-bold text-gradient font-display mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      displayValue={stat.displayValue}
                    />
                  </div>

                  {/* Label */}
                  <p className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Talkadot Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 mb-12 text-center lg:text-left"
        >
          <a
            href={speakerData.socialLinks.talkadot}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient-border inline-flex items-center gap-2 py-2 px-6 text-sm"
          >
            <span>Data powered by</span>
            <span className="font-semibold text-gradient">Talkadot</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
