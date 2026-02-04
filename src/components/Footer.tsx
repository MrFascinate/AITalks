import { motion } from 'framer-motion';
import { Heart, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { speakerData } from '../data/speakerData';

const footerLinks = [
  { name: 'About', href: '#about' },
  { name: 'Topics', href: '#topics' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 border-t border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold text-white">
              <span className="text-gradient">Mr. Fascinate</span>
            </a>
            <p className="text-gray-400 mt-3 max-w-xs">
              {speakerData.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex items-center gap-3">
              <a
                href={speakerData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-900 border border-primary-800 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:contact@justinshaifer.com`}
                className="w-10 h-10 rounded-full bg-primary-900 border border-primary-800 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={speakerData.socialLinks.talkadot}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-900 border border-primary-800 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <a
              href={speakerData.socialLinks.talkadot}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors mt-4 text-sm"
            >
              View Talkadot Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Justin Shaifer. All rights reserved.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-500 text-sm flex items-center gap-1"
          >
            Made with <Heart className="w-4 h-4 text-red-500" /> for innovation
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
