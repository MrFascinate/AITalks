import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Star, Building2, MessageSquare } from 'lucide-react';
import { speakerData } from '../data/speakerData';

const stats = [
  {
    icon: MessageSquare,
    value: speakerData.stats.audienceFeedback,
    label: "Audience Reviews",
    suffix: "+",
    color: "from-primary-500 to-primary-600",
  },
  {
    icon: Users,
    value: 1000000,
    label: "Students Reached",
    suffix: "+",
    displayValue: "1M+",
    color: "from-accent-500 to-accent-600",
  },
  {
    icon: Building2,
    value: 50,
    label: "Corporate Clients",
    suffix: "+",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Star,
    value: 98,
    label: "Satisfaction Rate",
    suffix: "%",
    color: "from-amber-500 to-amber-600",
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
      {/* Background with Motherboard Texture */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('/images/motherboard-pattern.svg')`,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 via-primary-900/70 to-primary-900/90" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Trusted by Industry Leaders
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Impact by the Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-primary-950/50 backdrop-blur-sm border border-primary-800/50 rounded-2xl p-6 text-center hover:border-primary-500/50 transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    displayValue={stat.displayValue}
                  />
                </div>

                {/* Label */}
                <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
          >
            <span className="text-sm">Data powered by</span>
            <span className="font-semibold text-primary-400">Talkadot</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
