import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Star, Building2, MessageSquare } from 'lucide-react';
import { speakerData } from '../data/speakerData';

const stats = [
  {
    icon: MessageSquare,
    value: 10000,
    label: "Audience Reviews",
    suffix: "+",
    displayValue: "10,000+",
  },
  {
    icon: Users,
    value: 5000000,
    label: "Reached",
    suffix: "+",
    displayValue: "5M+",
  },
  {
    icon: Building2,
    value: 250,
    label: "Corporate & Educator Clients",
    suffix: "+",
    displayValue: "250+",
  },
  {
    icon: Star,
    value: 98,
    label: "Satisfaction Rate",
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
    <section className="relative py-20 bg-primary-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
      </div>

      {/* Transparent headshot background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/headshot_smart-17-crop.jpg"
          alt=""
          className="h-full max-h-[600px] object-contain opacity-10"
          style={{ filter: 'grayscale(100%)' }}
        />
      </div>

      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">Trusted by Leaders</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 font-display">
            IMPACT BY THE <span className="text-gradient">NUMBERS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="stat-item"
            >
              <div className="card-gradient-border p-6 text-center h-full">
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-500/10 border border-primary-500/20 mb-4">
                    <stat.icon className="w-7 h-7 text-primary-400" />
                  </div>

                  {/* Value */}
                  <div className="text-3xl md:text-4xl font-bold text-gradient font-display mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      displayValue={stat.displayValue}
                    />
                  </div>

                  {/* Label */}
                  <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
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
          className="mt-12 text-center"
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
