import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Forbes Logo SVG
const ForbesLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 50" fill="currentColor">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
          style={{ fontFamily: 'Georgia, serif', fontSize: '36px', fontWeight: 'normal', letterSpacing: '2px' }}>
      Forbes
    </text>
  </svg>
);

// NBC News Logo SVG
const NBCNewsLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 180 50" fill="currentColor">
    <g transform="translate(20, 5)">
      {/* NBC Peacock feathers simplified */}
      <ellipse cx="20" cy="15" rx="6" ry="12" fill="currentColor" />
      <ellipse cx="28" cy="12" rx="5" ry="10" fill="currentColor" />
      <ellipse cx="35" cy="11" rx="5" ry="9" fill="currentColor" />
      <ellipse cx="42" cy="12" rx="5" ry="10" fill="currentColor" />
      <ellipse cx="49" cy="15" rx="6" ry="12" fill="currentColor" />
      <ellipse cx="12" cy="18" rx="6" ry="10" fill="currentColor" />
      {/* Peacock body */}
      <ellipse cx="30" cy="26" rx="8" ry="5" fill="currentColor" />
    </g>
    <text x="115" y="32" dominantBaseline="middle" textAnchor="middle"
          style={{ fontFamily: 'Arial, sans-serif', fontSize: '22px', fontWeight: 'bold', letterSpacing: '1px' }}>
      NEWS
    </text>
  </svg>
);

// Yahoo Finance Logo SVG
const YahooFinanceLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 50" fill="currentColor">
    <text x="50%" y="32" dominantBaseline="middle" textAnchor="middle"
          style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '20px', fontWeight: 'bold' }}>
      Yahoo! finance
    </text>
  </svg>
);

// AfroTech Logo SVG
const AfroTechLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 180 50" fill="currentColor">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
          style={{ fontFamily: 'Arial Black, sans-serif', fontSize: '24px', fontWeight: '900', letterSpacing: '1px' }}>
      AFROTECH
    </text>
  </svg>
);

const pressLogos = [
  { name: 'Forbes', Logo: ForbesLogo },
  { name: 'NBC News', Logo: NBCNewsLogo },
  { name: 'Yahoo Finance', Logo: YahooFinanceLogo },
  { name: 'AfroTech', Logo: AfroTechLogo },
];

export default function PressLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="py-6 bg-primary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center text-gray-500 text-sm uppercase tracking-wider mb-5"
        >
          As Seen In
        </motion.p>

        {/* Press Logos Row */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {pressLogos.map((press, index) => (
            <motion.div
              key={press.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              className="flex-shrink-0"
            >
              <press.Logo
                className="h-8 md:h-10 w-auto max-w-[120px] md:max-w-[140px] text-white transition-opacity duration-300 grayscale opacity-60 hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
