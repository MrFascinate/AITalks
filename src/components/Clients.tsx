import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Tv } from 'lucide-react';

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
    <section className="py-20 bg-primary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl" />
      </div>

      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Media Features Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4">
            <Tv size={16} className="text-primary-500" />
            <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">As Seen On</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 font-display">
            FEATURED IN <span className="text-gradient">MAJOR MEDIA</span>
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
              <div className="card-gradient-border h-20">
                <div className="relative z-10 h-full flex items-center justify-center">
                  <span
                    className="text-lg font-bold text-gray-400 group-hover:text-gradient transition-all duration-300"
                    style={{ fontFamily: media.name === 'Forbes' ? 'Georgia, serif' : 'inherit' }}
                  >
                    {media.name}
                  </span>
                </div>
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
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4">
            <Building2 size={16} className="text-primary-500" />
            <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">Trusted By</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 font-display">
            WORLD-CLASS <span className="text-gradient">ORGANIZATIONS</span>
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
              className="group stat-item"
            >
              <div className="card-gradient-border h-24">
                <div className="relative z-10 h-full flex items-center justify-center">
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
