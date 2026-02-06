import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Linkedin, BookOpen, Sparkles, ArrowRight, Play, X } from 'lucide-react';

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

const bioParagraphs = [
  `Justin "Mr. Fascinate" Shaifer is an award-winning STEM thought leader, educator, and keynote speaker on a mission to empower the world with innovation.`,
  `At Fascinate Media, he serves as both executive producer and on-camera talent, creating educational content about innovation, AI & STEM literacy, and the Future of Work. His roster of past clients and collaborators include LinkedIn, Intuit, NVIDIA, Google, PBS, Discovery, Bill Nye the Science Guy, and Al Roker.`,
  `His team continues ongoing research and development by producing experimental media projects using AI tools; such as AI Agents, Unreal Engine and Virtual Reality.`,
  `Named Forbes 30 under 30 in education and a LinkedIn Top Voice in Technology, Justin serves as a featured instructor for LinkedIn Learning, creating educational AI content for enterprise and individual learners on their global platform. Justin's active speaking career, which exploded after a popular TEDx talk about Generation Z, has earned him hundreds of keynote opportunities around the world.`,
  `Justin's presentations receive raving reviews from tens of thousands of audience members for dynamic technical showcases, and fresh perspectives on Media, STEM, AI and innovation.`,
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="about" className="py-24 bg-primary-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-accent-400/5 rounded-full blur-3xl" />
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors"
          >
            <X size={32} />
          </button>
          <div className="w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              src="https://player.vimeo.com/video/1082939720?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="AI and Innovation Keynote Speaker Reel"
              className="w-full h-full rounded-lg"
            />
          </div>
        </motion.div>
      )}

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

              {/* Speaker Reel Video Thumbnail */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative mb-6"
              >
                <div className="card-gradient-border group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
                  <div className="relative z-10 p-2">
                    {/* Thumbnail with Play Button */}
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <img
                        src="/headshot8.jpg"
                        alt="Justin Shaifer - AI and Innovation Keynote Speaker"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent" />
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-20 h-20 rounded-full bg-primary-500/90 flex items-center justify-center group-hover:bg-primary-400 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          animate={{ boxShadow: ['0 0 0 0 rgba(37, 133, 232, 0.4)', '0 0 0 20px rgba(37, 133, 232, 0)', '0 0 0 0 rgba(37, 133, 232, 0.4)'] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Play className="w-8 h-8 text-white ml-1" fill="white" />
                        </motion.div>
                      </div>
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
              {bioParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
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
