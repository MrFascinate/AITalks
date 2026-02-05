import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Linkedin, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { speakerData } from '../data/speakerData';

const highlights = [
  {
    icon: Award,
    title: "Forbes 30 Under 30",
    description: "Recognized as a leading innovator in science and technology",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Top Voice in Technology",
    description: "Instructor on LinkedIn Learning Platform",
  },
  {
    icon: BookOpen,
    title: "STEM & AI Educator",
    description: "Creating educational programming around STEM and AI for professionals, educators and students",
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
    <section id="about" className="py-24 bg-primary-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-accent-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative glow */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-accent-400/20 rounded-3xl blur-2xl"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Speaker Reel Video */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative mb-6"
              >
                <div className="card-gradient-border">
                  <div className="relative z-10 p-2">
                    <div className="vimeo-container">
                      <iframe
                        src="https://player.vimeo.com/video/1082939720?badge=0&autopause=0&player_id=0&app_id=58479"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        title="AI and Innovation Keynote Speaker Reel"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <p className="text-primary-400 text-sm font-medium uppercase tracking-wider">
                        AI and Innovation Keynote Speaker Reel
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Highlights grid */}
              <div className="relative grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="card-gradient-border group"
                  >
                    <div className="relative z-10 p-5">
                      <div className="w-12 h-12 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-1 group-hover:text-gradient transition-all">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
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
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">About Justin</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-6 font-display">
              EMPOWERING INNOVATION THROUGH{' '}
              <span className="text-gradient">ENGAGING EDUCATION</span>
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              {speakerData.fullBio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Media Features */}
            <div className="mt-8 pt-8 border-t border-primary-800/50">
              <p className="text-gray-400 text-sm mb-4 uppercase tracking-wider">Featured in</p>
              <div className="flex flex-wrap items-center gap-6">
                {speakerData.mediaFeatures.map((media) => (
                  <span
                    key={media}
                    className="text-gray-500 font-semibold text-lg hover:text-gradient transition-all cursor-default"
                  >
                    {media}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="btn-gradient-solid inline-flex items-center gap-2"
              >
                Book a Consultation
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
