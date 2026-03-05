import { motion } from 'framer-motion';
import { Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { speakerData } from '../data/speakerData';

const footerLinks = [
  { name: 'About', href: '#about' },
  { name: 'Topics', href: '#topics' },
  { name: 'Videos', href: '#videos' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 border-t border-primary-800/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#">
              <img
                src="/mr_fascinate_logo_transparent_blue.png"
                alt="Mr. Fascinate"
                className="h-8 w-auto"
              />
            </a>
            <p className="text-gray-400 mt-3 max-w-xs">
              {speakerData.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gradient transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Connect</h3>
            <div className="flex items-center gap-3">
              <motion.a
                href={speakerData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-all"
                whileHover={{ scale: 1.1 }}
                aria-label="Follow on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/mr.fascinate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-[#E4405F] hover:border-[#E4405F]/50 transition-all"
                whileHover={{ scale: 1.1 }}
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={speakerData.socialLinks.talkadot}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                whileHover={{ scale: 1.1 }}
                aria-label="View Talkadot profile"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
            <a
              href={speakerData.socialLinks.talkadot}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gradient transition-all mt-4 text-sm"
            >
              View Talkadot Profile
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7322697279771922432"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-400 hover:text-gradient transition-all mt-2 text-sm"
            >
              Subscribe to The Fascinate Forecast
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="section-divider mb-8" />
        <div className="flex items-center justify-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Fascinate Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
