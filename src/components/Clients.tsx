import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2 } from 'lucide-react';

// LinkedIn Logo SVG
const LinkedInLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 72 72" fill="currentColor">
    <path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7390625,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643567 12.8420573,10 16.349349,10 C19.8566406,10 22.6994792,12.8643567 22.6994792,16.3970067 C22.6994792,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"/>
  </svg>
);

// NVIDIA Logo SVG
const NvidiaLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 40" fill="currentColor">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
          style={{ fontFamily: 'Arial Black, sans-serif', fontSize: '28px', fontWeight: '900', letterSpacing: '-1px' }}>
      NVIDIA
    </text>
  </svg>
);

// Google Logo SVG (colorful G)
const GoogleLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
  </svg>
);

// Intuit Logo SVG
const IntuitLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 40" fill="currentColor">
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
          style={{ fontFamily: 'Arial, sans-serif', fontSize: '32px', fontWeight: 'bold' }}>
      Intuit
    </text>
  </svg>
);

// PBS Logo SVG
const PBSLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 40" fill="currentColor">
    <g transform="translate(15, 8)">
      {/* PBS Head silhouettes */}
      <ellipse cx="15" cy="10" rx="7" ry="8" />
      <ellipse cx="35" cy="10" rx="7" ry="8" />
      <ellipse cx="55" cy="10" rx="7" ry="8" />
    </g>
    <text x="50%" y="36" dominantBaseline="middle" textAnchor="middle"
          style={{ fontFamily: 'Arial Black, sans-serif', fontSize: '10px', fontWeight: '900', letterSpacing: '3px' }}>
      PBS
    </text>
  </svg>
);

const clients = [
  { name: 'LinkedIn', Logo: LinkedInLogo, color: '#0A66C2' },
  { name: 'NVIDIA', Logo: NvidiaLogo, color: '#76B900' },
  { name: 'Google', Logo: GoogleLogo, color: '#4285F4' },
  { name: 'Intuit', Logo: IntuitLogo, color: '#365EBF' },
  { name: 'PBS', Logo: PBSLogo, color: '#2638C4' },
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
        {/* Clients Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group stat-item"
            >
              <div className="card-gradient-border h-24">
                <div className="relative z-10 h-full flex items-center justify-center px-4 text-gray-400 group-hover:text-white transition-all duration-300">
                  <client.Logo className="w-full h-10 max-w-[100px]" />
                </div>
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
