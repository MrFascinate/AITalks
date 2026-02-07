import { motion } from 'framer-motion';

const logos = [
  '/Logo-Wall-Horizontal-Youtube-Banner-1-1-3.png',
  '/Logo-Wall-Horizontal-Youtube-Banner-1-1-5.png',
  '/Logo-Wall-Horizontal-Youtube-Banner-1-1-6.png',
  '/Logo-Wall-Horizontal-Youtube-Banner-1-1-7.png',
  '/Logo-Wall-Horizontal-Youtube-Banner-1-1-8.png',
  '/Logo-Wall-Horizontal-Youtube-Banner-1-1-9.png',
  '/Logo-Wall-Horizontal-Youtube-Banner-1-1-10.png',
  '/Logo-Wall-Horizontal-Youtube-Banner-1-1-11.png',
  '/Logo-Wall-Horizontal-Youtube-Banner-1-1-12.png',
  '/Logo-Wall-Horizontal-Youtube-Banner-1-1-13.png',
  '/Logo-Wall-Horizontal-Youtube-Banner-1-2.png',
  '/Logo-Wall-Horizontal-Youtube-Banner-1-2-2.png',
  '/Logo-Wall-Horizontal-Youtube-Banner-1-2-5.png',
  '/Logo-Wall-Horizontal-Youtube-Banner-1-2-7.png',
  '/Logo-Wall-Horizontal-Youtube-Banner-1-2-8.png',
];

export default function LogoWall() {
  return (
    <section className="py-12 bg-primary-950 relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary-950 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
          Trusted by world-class organizations and collaborators
        </p>

        {/* Marquee container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex-shrink-0 hover:opacity-100 opacity-80 transition-opacity duration-300"
              >
                <img
                  src={logo}
                  alt="Partner logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
