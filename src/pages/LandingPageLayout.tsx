import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Linkedin, BookOpen, CheckCircle, Quote, Play, Users, Star, Building2, MessageSquare, HelpCircle, ChevronDown } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import LandingNavbar from '../components/LandingNavbar';
import BookingModal from '../components/BookingModal';
import VideoModal from '../components/VideoModal';
import StickyBookingButton from '../components/StickyBookingButton';
import Footer from '../components/Footer';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization?: string;
}

interface LandingPageData {
  // SEO
  title: string;
  metaDescription: string;
  canonicalUrl: string;

  // Hero
  h1: string;
  subheadline: string;
  heroImage: string;
  heroImagePosition?: 'left' | 'center' | 'right';
  heroOverlayStrength?: 'light' | 'medium' | 'heavy';

  // Problem Section
  problemH2: string;
  problemParagraphs: string[];

  // What Justin Delivers
  deliverablesBullets: string[];

  // About
  aboutParagraphs: string[];
  aboutImage: string;

  // Testimonials
  testimonials: Testimonial[];

  // Final CTA
  ctaSubtext: string;

  // Logo Wall (optional)
  logoWall?: {
    src: string;
    alt: string;
  }[];
  logoWallLabel?: string;

  // FAQs (optional)
  faqs?: {
    question: string;
    answer: string;
  }[];

  // Video Embed (optional)
  videoEmbed?: {
    vimeoId: string;
    title: string;
    description: string;
  };
}

interface LandingPageLayoutProps {
  data: LandingPageData;
}

const landingStats = [
  { icon: MessageSquare, value: '10,000+', label: 'Audience Reviews' },
  { icon: Users, value: '5M+', label: 'People Reached' },
  { icon: Building2, value: '250+', label: 'Clients' },
  { icon: Star, value: '98%', label: 'Satisfaction Rate' },
];

export default function LandingPageLayout({ data }: LandingPageLayoutProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Set document title and meta tags
  useEffect(() => {
    document.title = data.title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', data.metaDescription);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', data.metaDescription);
      document.head.appendChild(metaDesc);
    }

    // Update canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', data.canonicalUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', data.canonicalUrl);
      document.head.appendChild(canonical);
    }

    // Add Person schema
    const existingSchema = document.querySelector('script[data-schema="person-landing"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Justin Shaifer",
      "alternateName": "Mr. Fascinate",
      "description": "Forbes 30 Under 30 AI literacy keynote speaker empowering corporate teams and educators with practical AI skills. Expert in closing the AI participation gap.",
      "url": "https://justinshaifer.com",
      "image": "https://justinshaifer.com/suit-transparent.webp",
      "sameAs": [
        "https://www.linkedin.com/in/justinshaifer/",
        "https://www.instagram.com/mrfascinate",
        "https://www.forbes.com/profile/justin-shaifer/",
        "https://twitter.com/mrfascinate"
      ],
      "jobTitle": "AI Literacy Keynote Speaker",
      "worksFor": {
        "@type": "Organization",
        "name": "Fascinate Media"
      },
      "award": [
        "Forbes 30 Under 30 in Education",
        "LinkedIn Top Voice in Technology"
      ],
      "knowsAbout": [
        "Artificial Intelligence",
        "AI Literacy",
        "Corporate AI Training",
        "Higher Education Technology",
        "Closing the AI Participation Gap"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "10000",
        "bestRating": "5",
        "worstRating": "1",
        "description": "Based on 10,000+ audience reviews tracked via Talkadot"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'person-landing');
    script.textContent = JSON.stringify(personSchema);
    document.head.appendChild(script);

    // FAQ schema
    const existingFaqSchema = document.querySelector('script[data-schema="faq-landing"]');
    if (existingFaqSchema) existingFaqSchema.remove();

    if (data.faqs && data.faqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      };
      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.setAttribute('data-schema', 'faq-landing');
      faqScript.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(faqScript);
    }

    // Cleanup on unmount
    return () => {
      const schemaToRemove = document.querySelector('script[data-schema="person-landing"]');
      if (schemaToRemove) schemaToRemove.remove();
      const faqSchemaToRemove = document.querySelector('script[data-schema="faq-landing"]');
      if (faqSchemaToRemove) faqSchemaToRemove.remove();
    };
  }, [data]);

  const credibilityItems = [
    { icon: Award, text: 'Forbes 30 Under 30' },
    { icon: Linkedin, text: 'LinkedIn Learning Instructor' },
    { icon: BookOpen, text: '50,000+ Learners' },
  ];

  const asSeenInLogos = [
    { src: '/images/forbes logo.png', alt: 'Forbes', url: 'https://www.forbes.com/sites/christophergray/2019/09/02/step-aside-bill-nye--neil-degrassi-justin-shaifer-is-the-emerging-stem-tv-personality-we-need-to-hear/' },
    { src: '/images/abc news png.png', alt: 'ABC News', url: 'https://www.facebook.com/watch/?v=539214044164028' },
    { src: '/images/essence png.png', alt: 'Essence', url: 'https://www.essence.com/education/leaders-of-the-new-school/' },
    { src: '/images/hulu png.png', alt: 'Hulu', url: 'https://www.detpress.com/abcnews/pressrelease/soul-of-a-nation-next-3-9/' },
    { src: '/images/Afrotech Logo.png', alt: 'AfroTech', url: 'https://afrotech.com/afrotech-future-50-justin-shaifer' },
    { src: '/images/yahoo news logo white.png', alt: 'Yahoo News', url: 'https://www.yahoo.com/news/salem-students-among-young-innovators-142919005.html' },
    { src: '/images/Pbs logo white.png', alt: 'PBS', url: 'https://www.pbs.org/video/climate-change-fctdyl/' },
    { src: '/images/smithsonian logo white.png', alt: 'Smithsonian', url: 'https://nmaahc.si.edu/learn/students/through-window-and-mirror-narratives-african-american-stem-professionals' },
    { src: '/images/TEDx logo white.png', alt: 'TEDx', url: 'https://www.ted.com/talks/justin_shaifer_how_to_speak_generation_z' },
  ];

  return (
    <div className="min-h-screen bg-primary-950">
      <LandingNavbar onBookClick={() => setIsBookingModalOpen(true)} />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoUrl="https://vimeo.com/1082939720" />
      <StickyBookingButton onBookClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={data.heroImage}
            alt="Justin Shaifer speaking"
            className={`w-full h-full object-cover ${
              data.heroImagePosition === 'left' ? 'object-left' :
              data.heroImagePosition === 'right' ? 'object-right' : 'object-top'
            }`}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${
            data.heroOverlayStrength === 'light'
              ? 'from-primary-950/80 via-primary-950/50 to-primary-950/20'
              : data.heroOverlayStrength === 'heavy'
              ? 'from-primary-950 via-primary-950/90 to-primary-950/60'
              : 'from-primary-950 via-primary-950/80 to-primary-950/40'
          }`} />
          <div className={`absolute inset-0 bg-gradient-to-t ${
            data.heroOverlayStrength === 'light'
              ? 'from-primary-950/80 via-transparent to-primary-950/30'
              : 'from-primary-950 via-transparent to-primary-950/50'
          }`} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-display tracking-tight"
            >
              {data.h1.split(' ').map((word, i) => (
                <span key={i}>
                  {i > 0 && ' '}
                  {word.toLowerCase() === 'ai' || word.toLowerCase() === 'corporate' || word.toLowerCase() === 'education' || word.toLowerCase() === 'workshop' || word.toLowerCase() === 'enterprise' ? (
                    <span className="text-gradient">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              {data.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="btn-gradient-solid inline-flex items-center gap-2"
              >
                Book Justin
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="btn-gradient-border inline-flex items-center gap-2"
              >
                <Play size={18} />
                Watch the Reel
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credibility Bar */}
      <section className="py-12 bg-primary-900 border-y border-primary-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {credibilityItems.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary-400" />
                </div>
                <span className="text-gray-300 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
          {data.logoWall ? (
            <div className="mt-8">
              <p className="text-center text-gray-400 text-sm uppercase tracking-wider mb-6">
                {data.logoWallLabel || 'Past Clients Include:'}
              </p>
              <div className="relative overflow-hidden">
                <motion.div
                  className="flex gap-12 items-center"
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: 'loop',
                      duration: 20,
                      ease: 'linear',
                    },
                  }}
                >
                  {[...data.logoWall, ...data.logoWall].map((logo, index) => (
                    <img
                      key={index}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-10 md:h-12 w-auto max-w-[120px] object-contain flex-shrink-0"
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="mt-8 text-gray-500 text-sm">
              <span className="uppercase tracking-wider block text-center mb-4">As seen in:</span>
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                {asSeenInLogos.map((logo) => (
                  <a key={logo.alt} href={logo.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-12">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-primary-950 border-b border-primary-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {landingStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 mb-3">
                  <stat.icon className="w-5 h-5 text-primary-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gradient font-display mb-1">
                  {stat.value}
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          {/* Talkadot Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <a
              href="https://www.talkadot.com/s/justinshaifer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient-border inline-flex items-center gap-2 py-2 px-6 text-sm"
            >
              <span>Data powered by</span>
              <span className="font-semibold text-gradient">Talkadot</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Video Showcase Section */}
      {data.videoEmbed && (
        <section className="py-16 bg-primary-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Video on the left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
              >
                <iframe
                  src={`https://player.vimeo.com/video/${data.videoEmbed.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  title={data.videoEmbed.title}
                />
              </motion.div>

              {/* Captions on the right */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
                  <Play size={16} className="text-primary-500" />
                  <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">Watch</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                  {data.videoEmbed.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {data.videoEmbed.description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Problem Section */}
      <section className="py-24 bg-primary-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-display">
              {data.problemH2}
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              {data.problemParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Justin Delivers Section */}
      <section className="relative py-24 bg-primary-900 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        </div>

        {/* Left side - Full height image */}
        <motion.div
          className="hidden lg:block absolute bottom-0 -left-[8%] w-[55%]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={data.aboutImage}
            alt="Justin Shaifer"
            className="w-full h-auto object-contain"
            style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.6))' }}
            loading="lazy"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-[40%]">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">Key Takeaways</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-display">
              What Your Audience Will{' '}
              <span className="text-gradient">Walk Away With</span>
            </h2>

            <div className="space-y-6">
              {data.deliverablesBullets.map((bullet, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{bullet}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Justin Section */}
      <section className="py-24 bg-primary-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">About Justin</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-display">
              Meet <span className="text-gradient">Mr. Fascinate</span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              {data.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
              What <span className="text-gradient">Audiences Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-gradient-border"
              >
                <div className="relative z-10 p-8">
                  <Quote className="w-8 h-8 text-primary-500/30 mb-4" />
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    {testimonial.organization && (
                      <p className="text-white font-bold">{testimonial.organization}</p>
                    )}
                    <p className="text-gray-400 text-xs">
                      {testimonial.author}{testimonial.role && `, ${testimonial.role}`}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-24 bg-primary-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
                <HelpCircle size={16} className="text-primary-500" />
                <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
                Common <span className="text-gradient">Questions</span>
              </h2>
            </motion.div>

            <div className="flex flex-col gap-3">
              {data.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="card-gradient-border"
                  >
                    <button
                      className="relative z-10 w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left group"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <h3 className={`text-lg font-semibold transition-colors ${isOpen ? 'text-gradient' : 'text-white group-hover:text-primary-400'}`}>
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isOpen ? 'border-primary-500 text-primary-400' : 'border-gray-600 text-gray-500 group-hover:border-primary-500/50'}`}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="relative z-10 px-5 md:px-6 pb-6 pt-0">
                            <div className="border-t border-primary-500/20 pt-4">
                              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-24 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/10 to-accent-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display">
              Ready to Bring This Message to{' '}
              <span className="text-gradient">Your Audience?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              {data.ctaSubtext}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="btn-gradient-solid inline-flex items-center justify-center gap-2"
              >
                Book Justin
                <ArrowRight size={18} />
              </button>
              <a
                href="/ai-assessment.html"
                className="btn-gradient-solid inline-flex items-center justify-center gap-2"
              >
                Take Free AI Assessment
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
