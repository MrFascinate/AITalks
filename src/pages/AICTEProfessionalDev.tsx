import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Linkedin, CheckCircle, Quote, Play, Users, Star, Building2, MessageSquare, HelpCircle, ChevronDown } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import BookingModal from '../components/BookingModal';
import VideoModal from '../components/VideoModal';
import StickyBookingButton from '../components/StickyBookingButton';
import Footer from '../components/Footer';

const cteStats = [
  { icon: MessageSquare, value: '10,000+', label: 'Audience Reviews' },
  { icon: Users, value: '5M+', label: 'People Reached' },
  { icon: Building2, value: '250+', label: 'Clients' },
  { icon: Star, value: '98%', label: 'Satisfaction Rate' },
];

const cteFaqs = [
  {
    question: 'Can this professional development count toward educator certification or PD hours?',
    answer: "Justin's PD sessions are designed to meet professional development standards, and many districts and state CTE coordinators have applied them toward required PD hours. We can provide a certificate of participation and session documentation to support your approval process. Check with your specific state's CTE coordinator for requirements.",
  },
  {
    question: 'Can the session be customized for specific CTE pathways like healthcare, manufacturing, or IT?',
    answer: "Yes. Justin has delivered AI PD across healthcare, manufacturing, IT, business services, and other CTE pathways. Each session can be tailored to the specific industries your program serves, with examples and tools relevant to those career tracks — not generic AI content that misses the mark for hands-on programs.",
  },
  {
    question: 'Is this available for virtual or hybrid PD days?',
    answer: "Yes. Justin delivers both in-person and virtual professional development sessions. Virtual PD includes the same hands-on format with live demonstrations, guided activities, and real-time Q&A. Many state CTE conferences have hosted Justin virtually with strong feedback from educators across multiple districts.",
  },
];

export default function AICTEProfessionalDev() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'AI Professional Development for CTE Programs | Justin Shaifer';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI literacy professional development for CTE programs. Justin Shaifer delivers practical PD that prepares educators and students for workforce realities in an AI-driven economy.');
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://justinshaifer.com/ai-professional-development');
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
      "description": "Forbes 30 Under 30 AI literacy keynote speaker delivering professional development for CTE programs. Expert in closing the AI participation gap.",
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
        "LinkedIn Learning Instructor"
      ],
      "knowsAbout": [
        "Artificial Intelligence",
        "AI Literacy",
        "CTE Professional Development",
        "Career and Technical Education",
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

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": cteFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
      })),
    };
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.setAttribute('data-schema', 'faq-landing');
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      document.querySelector('script[data-schema="person-landing"]')?.remove();
      document.querySelector('script[data-schema="faq-landing"]')?.remove();
    };
  }, []);

  const clientOrgs = [
    'Oregon CTE',
    'California CTE',
    'Montana CTE',
    'NSTA',
    'WSTA',
    'California Community College Association',
    'NCMPR',
    'NYC Department of Education',
    'Smithsonian',
  ];

  const deliverables = [
    'A clear framework for integrating AI literacy into existing CTE curriculum without overhauling what already works',
    'Practical tools educators can use in the classroom the next day',
    'The confidence to lead AI conversations with students, parents, and industry partners',
  ];

  const testimonials = [
    {
      quote: 'Justin\'s presentation was transformative for our faculty. Teachers left feeling empowered and excited to integrate AI tools into their curriculum immediately.',
      author: 'Dr. Sarah Mitchell',
      role: 'Dean of Instruction, Maricopa Community Colleges',
    },
    {
      quote: 'The most practical and engaging AI session we\'ve ever hosted. Justin made complex concepts accessible and gave our staff actionable strategies they could use the next day.',
      author: 'Michael Torres',
      role: 'Director of Professional Development, Houston ISD',
    },
  ];

  return (
    <div className="min-h-screen bg-primary-950">
      <Navbar />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoUrl="https://vimeo.com/1082939720" />
      <StickyBookingButton onBookClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img
            src="/AI Empowerment.jpg"
            alt="Justin Shaifer delivering professional development"
            className="w-full h-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 via-primary-950/50 to-primary-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-primary-950/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-display tracking-tight"
            >
              <span className="text-gradient">AI</span> Literacy Professional Development for{' '}
              <span className="text-gradient">CTE</span> Programs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Your CTE students are preparing for industries that AI is actively reshaping. Most professional development gives educators theory with no practical application. Justin Shaifer delivers PD that closes the gap between what educators know about AI and what they can actually do with it.
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

      {/* Credibility Bar - Organizations */}
      <section className="py-12 bg-primary-900 border-y border-primary-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
              Organizations Justin Has Worked With
            </h2>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-8">
            {clientOrgs.map((org, index) => (
              <motion.span
                key={org}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-gray-300 font-medium text-sm md:text-base"
              >
                {org}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-6 border-t border-primary-800/50">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary-400" />
              </div>
              <span className="text-gray-300 font-medium">Forbes 30 Under 30</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-primary-400" />
              </div>
              <span className="text-gray-300 font-medium">LinkedIn Learning Instructor</span>
            </motion.div>
          </div>

          <div className="mt-8">
            <p className="text-center text-gray-400 text-sm uppercase tracking-wider mb-6">
              Past Education Clients Include:
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
                {(() => {
                  const cteLogos = [
                    { src: '/Higher Ed/NYC_DOE_Logo.png', alt: 'NYC Department of Education' },
                    { src: '/Higher Ed/Antelope_Valley_College_logo.png', alt: 'Antelope Valley College' },
                    { src: '/Higher Ed/Montana_tech_univ_logo.png', alt: 'Montana Tech' },
                    { src: '/Higher Ed/delaware-state-university-logo.png', alt: 'Delaware State University' },
                    { src: '/Higher Ed/color-center-reverse-UWlogo-print-1024x675.webp', alt: 'University of Washington' },
                    { src: '/Higher Ed/purdue-university-logo-freelogovectors.net_.png', alt: 'Purdue University' },
                    { src: '/Higher Ed/NYU-Logo.png', alt: 'NYU' },
                    { src: '/Higher Ed/bryant_bulldogs_logo_wordmark_20048058.png', alt: 'Bryant University' },
                  ];
                  return [...cteLogos, ...cteLogos].map((logo, index) => (
                    <img
                      key={index}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-10 md:h-12 w-auto max-w-[120px] object-contain flex-shrink-0"
                    />
                  ));
                })()}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-primary-950 border-b border-primary-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {cteStats.map((stat, index) => (
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
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-display">
                CTE Students Are Entering Industries Being{' '}
                <span className="text-gradient">Reshaped by AI</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Healthcare, manufacturing, IT, business services. Every industry CTE programs prepare students for is changing because of AI. But most professional development still treats AI as a future topic instead of a present reality.
                </p>
                <p>
                  That leaves educators uncertain about how to integrate AI into their curriculum and students graduating without the AI literacy their employers expect.
                </p>
                <p>
                  Justin has delivered AI professional development at the state CTE level across Oregon, California, and Montana. He understands what CTE directors are facing and brings practical strategies that work in real classrooms with real time constraints.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/workshop session.jpg"
                alt="Justin Shaifer leading a hands-on workshop"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-primary-950/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Justin Delivers Section */}
      <section className="relative py-24 bg-primary-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          className="hidden lg:block absolute bottom-0 -left-[8%] w-[55%]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/suit-transparent.webp"
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
              What Your Educators Will{' '}
              <span className="text-gradient">Walk Away With</span>
            </h2>

            <div className="space-y-6">
              {deliverables.map((bullet, index) => (
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

      {/* AI Readiness Assessment CTA Section */}
      <section className="py-24 bg-primary-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">Free Assessment</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Where Does Your Program{' '}
              <span className="text-gradient">Stand?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Most CTE programs do not know their AI readiness level. That gap is widening every semester. Take the free assessment to find out where your team stands and what it takes to close the AI participation gap.
            </p>

            <a
              href="/ai-assessment.html"
              className="btn-gradient-solid inline-flex items-center gap-2"
            >
              Take the Free Assessment
              <ArrowRight size={18} />
            </a>
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
              What <span className="text-gradient">Educators Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
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
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
            {cteFaqs.map((faq, index) => {
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
              Ready to Bring AI Literacy to Your{' '}
              <span className="text-gradient">CTE Program?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's talk about what your educators need and how Justin can deliver it.
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
