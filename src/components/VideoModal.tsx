import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

function getVimeoEmbedUrl(url: string): string {
  // Extract Vimeo video ID from various URL formats
  const match = url.match(/vimeo\.com\/(\d+)/);
  if (match) {
    return `https://player.vimeo.com/video/${match[1]}?autoplay=1&title=0&byline=0&portrait=0`;
  }
  return url;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  const embedUrl = getVimeoEmbedUrl(videoUrl);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-4 md:inset-12 lg:inset-20 z-50 flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <X size={20} />
              </button>

              {/* Video Container */}
              <div className="w-full h-full bg-black rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src={embedUrl}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Video"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
