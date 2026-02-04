import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const clients = [
  { name: 'LinkedIn', color: '#0A66C2' },
  { name: 'NVIDIA', color: '#76B900' },
  { name: 'Google', color: '#4285F4' },
  { name: 'Intuit', color: '#365EBF' },
  { name: 'PBS', color: '#2638C4' },
];

const mediaFeatures = [
  { name: 'Forbes', color: '#B1000A' },
  { name: 'ABC News', color: '#000000' },
  { name: 'Yahoo Finance', color: '#6001D2' },
  { name: 'NBC News', color: '#F37021' },
  { name: 'AfroTech', color: '#FF6B35' },
];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-primary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Media Features Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
            As Seen On
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
            Featured In Major Media
          </h2>
        </motion.div>

        {/* Media Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {mediaFeatures.map((media, index) => (
            <motion.div
              key={media.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex items-center justify-center h-20 hover:border-accent-500/50 hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                <span
                  className="text-lg font-bold text-gray-400 group-hover:text-white transition-all duration-300"
                  style={{ fontFamily: media.name === 'Forbes' ? 'Georgia, serif' : 'inherit' }}
                >
                  {media.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Trusted By
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
            World-Class Organizations
          </h2>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="group"
            >
              <div className="bg-primary-900/50 backdrop-blur-sm border border-primary-800/50 rounded-xl p-6 flex items-center justify-center h-24 hover:border-primary-500/50 transition-all duration-300 group-hover:scale-105">
                <span
                  className="text-xl font-bold text-gray-500 group-hover:text-opacity-100 transition-all duration-300"
                  style={{
                    color: 'rgb(107, 114, 128)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = client.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgb(107, 114, 128)';
                  }}
                >
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center text-gray-500 mt-8 text-sm"
        >
          Plus collaborations with Bill Nye the Science Guy, Al Roker, and many more
        </motion.p>
      </div>
    </section>
  );
}
