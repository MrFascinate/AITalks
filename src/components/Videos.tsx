import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    id: '1082939720',
    title: 'AI in Business Leadership',
    description: 'Exploring how AI transforms leadership strategies',
  },
  {
    id: '1075551079',
    title: 'Future of Work',
    description: 'Preparing teams for the AI-powered workplace',
  },
  {
    id: '1074161713',
    title: 'STEM Education Innovation',
    description: 'Making science accessible and engaging',
  },
  {
    id: '1074161755',
    title: 'Tech for Social Impact',
    description: 'Using technology to drive positive change',
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
          >
            <Play size={16} className="text-primary-500" />
            <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">Featured Videos</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            AI <span className="text-gradient">VIDEOS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Watch insights on AI, leadership, and the future of technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-gradient-border group"
            >
              <div className="relative z-10 p-2">
                <div className="vimeo-container">
                  <iframe
                    src={`https://player.vimeo.com/video/${video.id}?badge=0&autopause=0&player_id=0&app_id=58479`}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    title={video.title}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-gradient transition-all">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{video.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://vimeo.com/fascinateai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient-border inline-flex items-center gap-2"
          >
            View All Videos
            <Play size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
