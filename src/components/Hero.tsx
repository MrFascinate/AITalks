import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { speakerData } from '../data/speakerData';

interface HeroProps {
  onBookClick: () => void;
  onVideoClick: (url: string) => void;
}

export default function Hero({ onBookClick, onVideoClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary-950">
      {/* Video Background - Vimeo Embed */}
      <div className="video-bg-container">
        {/* Static fallback image - shows immediately while video loads */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/headshot8.jpg)' }}
        />
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/1072452218?background=1&autoplay=1&loop=1&muted=1&controls=0"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: '250vh', height: '140vh' }}
            allow="autoplay; fullscreen"
            title="Website Banner Loop"
          />
        </div>
        {/* Overlay gradients - less transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-primary-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 xl:px-24 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 font-display tracking-tight"
            >
              JUSTIN{' '}
              <span className="text-gradient">"{speakerData.nickname.toUpperCase()}"</span>{' '}
              SHAIFER
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl text-gray-300 mb-6 font-light"
            >
              {speakerData.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed"
            >
              {speakerData.shortBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={onBookClick}
                className="btn-gradient-solid inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                onClick={() => onVideoClick('https://vimeo.com/1082939720')}
                className="btn-gradient-border inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play size={18} />
                View Reel
              </motion.button>

              <motion.a
                href="/ai-assessment.html"
                className="btn-gradient-border inline-flex items-center gap-2 border-accent-400/50 text-accent-400 hover:bg-accent-400/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles size={18} />
                Free AI Assessment
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-2 h-2 bg-primary-500 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
