import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Tv, BookOpen, Sparkles } from 'lucide-react';
import { speakerData } from '../data/speakerData';

const highlights = [
  {
    icon: Award,
    title: "Forbes 30 Under 30",
    description: "Recognized as a leading innovator in science and technology",
  },
  {
    icon: Tv,
    title: '"Millennial Bill Nye"',
    description: "Making complex topics digestible and engaging",
  },
  {
    icon: BookOpen,
    title: "STEM Educator",
    description: "Empowering underrepresented communities in STEM",
  },
  {
    icon: Sparkles,
    title: "Media Producer",
    description: "Executive producer at Fascinate Media",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-primary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Background shapes */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl blur-xl" />

              {/* Highlights grid */}
              <div className="relative grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-primary-900/80 backdrop-blur-sm border border-primary-800/50 rounded-xl p-5 hover:border-primary-500/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
              About Justin
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-6">
              Empowering Innovation Through{' '}
              <span className="text-gradient">Engaging Education</span>
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              {speakerData.fullBio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Media Features */}
            <div className="mt-8 pt-8 border-t border-primary-800/50">
              <p className="text-gray-400 text-sm mb-4">Featured in</p>
              <div className="flex flex-wrap items-center gap-6">
                {speakerData.mediaFeatures.map((media) => (
                  <span
                    key={media}
                    className="text-gray-500 font-semibold text-lg hover:text-primary-400 transition-colors"
                  >
                    {media}
                  </span>
                ))}
              </div>
            </div>

            {/* Collaborators */}
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">Collaborated with</p>
              <p className="text-gray-300">
                {speakerData.collaborators.join(', ')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
