import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const clients = [
  { name: 'LinkedIn', color: '#0A66C2' },
  { name: 'NVIDIA', color: '#76B900' },
  { name: 'Google', color: '#4285F4' },
  { name: 'Intuit', color: '#365EBF' },
  { name: 'PBS', color: '#2638C4' },
  { name: 'Forbes', color: '#B1000A' },
];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 flex items-center justify-center h-24 hover:border-primary-500/50 transition-all duration-300 group-hover:scale-105">
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
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-gray-500 mt-8 text-sm"
        >
          Plus collaborations with Bill Nye the Science Guy, Al Roker, and many more
        </motion.p>
      </div>
    </section>
  );
}
