import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const videos = [
  {
    title: 'AI Agents for Everyday Professionals',
    source: 'LinkedIn Learning',
    category: 'Education',
    description: 'In this course, Justin Shaifer introduces beginner-friendly AI agent platform n8n, explores practical use cases for automating everyday work.',
    thumbnail: '/linkedin learning n8n.gif',
    link: 'https://www.linkedin.com/learning/ai-agents-for-everyday-professionals-simple-automations-to-speed-up-your-work-no-code-required/when-to-use-and-not-use-an-ai-agent',
  },
  {
    title: 'Curiosity Theory',
    source: 'Fascinate Media',
    category: 'Series',
    description: 'An educational science podcast where co-hosts Dr. Dakotah Tyler and Justin Shaifer talk space, science, the future, and culture.',
    thumbnail: '/curiosity theory.gif',
    link: 'https://www.curiositytheorypod.com/',
  },
  {
    title: "What's Cool About Electric",
    source: 'Chevrolet',
    category: 'Branded Content',
    description: 'Justin hosts a car commercial for Chevy\'s EV, describing how sustainable energy sources can empower us to build the future.',
    thumbnail: '/CHEVY DTU.gif',
    link: 'https://vimeo.com/1173691521?share=copy&fl=sv&fe=ci',
  },
];

export default function Videos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="videos" className="py-24 bg-primary-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            EDUCATIONAL <span className="text-gradient">CONTENT</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Watch educational content about AI, STEM and the Future, produced by Justin
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.a
              key={video.title}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-gradient-border group block"
            >
              <div className="relative z-10">
                {/* Thumbnail with category badge */}
                <div className="relative aspect-video overflow-hidden rounded-t-[15px]">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-400 text-primary-950 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md">
                      {video.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-gradient transition-all">
                    {video.title}
                  </h3>
                  <p className="text-primary-400 text-sm font-semibold uppercase tracking-wider mt-2">
                    {video.source}
                  </p>
                  <p className="text-gray-400 mt-3 text-sm leading-relaxed line-clamp-3">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://fascinate.media"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient-border inline-flex items-center gap-2"
          >
            View All Videos
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
