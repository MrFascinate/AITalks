import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Linkedin, BookOpen, Video, ArrowRight, Play, X, ChevronDown } from 'lucide-react';

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
    icon: Video,
    title: "Media Producer",
    description: "Executive producer at Fascinate Media",
  },
];

interface AboutProps {
  onBookClick: () => void;
}

export default function About({ onBookClick }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
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
                        src="/speaker action photo.png"
                        alt="Justin Shaifer - AI and Innovation Keynote Speaker"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              EMPOWERING INNOVATION THROUGH{' '}
              <span className="text-gradient">ENGAGING EDUCATION</span>
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              {/* Initial bio - always visible */}
              <p>Justin "Mr. Fascinate" Shaifer is an award-winning STEM thought leader, enterprise AI trainer, and keynote speaker on a mission to empower the world with innovation.</p>
              <p>At <a href="https://fascinate.media" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline underline-offset-2">Fascinate Media</a>, he serves as both executive producer and on-camera talent, creating educational content about innovation, AI & STEM literacy, and the Future of Work. His roster of past clients and collaborators include LinkedIn, Intuit, NVIDIA, Google, PBS, Discovery, Bill Nye the Science Guy, and Al Roker.</p>

              {/* Expanded bio */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden space-y-4"
                  >
                    <p>His team continues ongoing research and development by producing experimental media projects using AI tools; such as AI Agents, Unreal Engine and Virtual Reality.</p>
                    <p>
                      Named{' '}
                      <a
                        href="https://www.forbes.com/profile/justin-shaifer/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 underline underline-offset-2"
                      >
                        Forbes 30 under 30
                      </a>{' '}
                      in education and a LinkedIn Top Voice in Technology, Justin serves as a featured instructor for LinkedIn Learning, creating educational AI content for enterprise and individual learners on their global platform. Justin's active speaking career, which exploded after a popular{' '}
                      <a
                        href="https://youtu.be/9Ad00XQ3JD0?si=0MG7_-WN0UlSrIE5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 underline underline-offset-2"
                      >
                        TEDx talk about Generation Z
                      </a>
                      , has earned him hundreds of keynote opportunities around the world.
                    </p>
                    <p>Ranging from "Your Workday Streamlined with AI" and "How to Win the War on Information with Science" to "How to Lead Gen Z," Justin's presentations receive raving reviews from tens of thousands of audience members for dynamic technical showcases, and fresh perspectives on Media, STEM, AI and innovation.</p>
                    <p>
                      Shaped by his experiences growing up on the south side of Chicago, Justin is committed to democratizing STEM education. As co-host and producer of{' '}
                      <a
                        href="https://www.instagram.com/curiositytheorypod"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:text-primary-300 underline underline-offset-2"
                      >
                        Curiosity Theory
                      </a>
                      , he's helping achieve this mission. The popular science and technology podcast has reached millions with accessible educational content since its inception.
                    </p>
                    <p>Justin's work has been featured in Forbes, NBC News, Yahoo Finance, AfroTech, and more.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expand/Collapse button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors mt-2"
              >
                {isExpanded ? 'Show less' : 'Read more'}
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={onBookClick}
                className="btn-gradient-solid inline-flex items-center gap-2"
              >
                Book Now
                <ArrowRight size={18} />
              </button>
              <a
                href="/resources.html"
                className="btn-gradient-border inline-flex items-center gap-2"
              >
                <BookOpen size={18} />
                Free Resources
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
