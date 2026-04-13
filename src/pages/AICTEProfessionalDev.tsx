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
    question: 'Will this resonate with my specific audience?',
    answer: `Justin customizes every keynote to the event, industry, and audience. Before any engagement he researches the organization, the room, and the specific challenge they're navigating. His presentations have landed for audiences as different as Fortune 500 leadership teams, K-12 educators, HBCU students, and government agencies. If you're unsure, ask for references from a similar audience.`,
  },
  {
    question: 'How do I justify the investment to my leadership?',
    answer: `Justin's clients consistently report that his sessions generate more post-event conversation than any other speaker at their events. He provides post-event satisfaction data via Talkadot that you can share directly with stakeholders. Many clients book him for multiple events specifically because the ROI is easy to demonstrate internally.`,
  },
  {
    question: 'What makes Justin different from other AI speakers?',
    answer: `Most AI speakers explain the technology. Justin demonstrates it live, connects it to human stories your audience actually recognizes, and leaves them with tools they can use the same day. He is also one of the only speakers in this space whose credibility comes from building with AI rather than advising on it.`,
  },
  {
    question: 'What does the booking process actually look like?',
    answer: `Reach out via the contact form with your event date, audience size, and goals. You will hear back within 48 hours. From there it is a short call to confirm fit, a straightforward contract, and Justin handles the rest including pre-event research and any custom content development.`,
  },
  {
    question: 'Does Justin travel for in-person events?',
    answer: `Yes, nationally and internationally. Travel logistics are handled as part of the booking process.`,
  },
  {
    question: 'What is included in a typical booking?',
    answer: `A standard keynote booking includes a pre-event discovery call to understand your goals, a customized 45-60 minute presentation, Q&A session, and post-event resources for attendees. Additional options include breakout sessions, workshops, meet-and-greets, and extended working sessions.`,
  },
  {
    question: 'Do you offer extras (book signings, meet-and-greets)?',
    answer: `Justin offers a variety of add-ons to enhance the attendee experience. These include signed posters, meet-and-greets, extended Q&A sessions, custom videos for attendees, and time to answer questions after the presentation. Let us know what would work best for your event!`,
  },
  {
    question: 'What kind of promotional support does Justin offer to help market the event?',
    answer: `Justin is happy to create custom promotional videos to help market your event. He also actively promotes events across his social platforms, which have a combined reach of over 80,000 followers. This helps drive awareness and excitement before your event.`,
  },
];

export default function AICTEProfessionalDev() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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
      quote: 'It was an amazing day and I just don\'t think Justin\'s contribution/impact could have been better. His presentation was a home run and had real value for our participants and students.',
      author: 'Conference Organizer',
      role: 'OSTA Leadership',
      organization: 'Oregon Science Teachers Association',
    },
    {
      quote: 'Justin was wonderful. He had teachers and kids laughing and nodding their heads in agreement. It was the youthful, truthful jolt of energy we needed! Several administrators told me they had already booked Justin based on videos we circulated or were planning to book him after they saw him in action.',
      author: 'Administrator',
      role: 'Education Leader',
      organization: 'NYC Department of Education',
    },
    {
      quote: 'I wanted to extend a sincere thank you for all of your work. Justin was absolutely fantastic with our students and, as evidenced by the hundreds of selfies with students and all of the positive reviews in the building, he clearly resonated with our students and larger community.',
      author: 'School Administrator',
      role: 'School Leadership',
      organization: 'Watertown High School',
    },
    {
      quote: 'Justin is such an amazing speaker and his message really resonated with students. We really enjoyed his talk on "STEM is Cool". I highly recommend him as a keynote for any event!',
      author: 'Program Manager',
      role: 'STEM Education',
      organization: 'FIRST Robotics',
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

      {/* Video + Problem Section Combined */}
      <section className="py-16 bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Video on the left - 9:16 aspect ratio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[9/16] w-full max-w-[360px] mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-2xl flex-shrink-0"
            >
              {isVideoPlaying ? (
                <iframe
                  src="https://player.vimeo.com/video/1077747719?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  title="Justin Shaifer AI Professional Development"
                />
              ) : (
                <div
                  className="absolute inset-0 cursor-pointer group"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  {/* Thumbnail */}
                  <img
                    src="https://vumbnail.com/1077747719.jpg"
                    alt="Justin Shaifer AI Professional Development"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-primary-950/30" />
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
              )}
            </motion.div>

            {/* Problem content on the right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1"
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
          </div>
        </div>
      </section>

      {/* What Justin Delivers Section */}
      <section className="relative py-24 bg-primary-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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

      {/* About Justin Section */}
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
              <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">About Justin</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-display">
              Meet <span className="text-gradient">Mr. Fascinate</span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Justin "Mr. Fascinate" Shaifer is a Forbes 30 Under 30 science communicator and keynote speaker focused on closing the AI participation gap. His AI courses on LinkedIn Learning have reached over 50,000 learners, and he has delivered professional development for CTE programs at the state level across Oregon, California, and Montana.
              </p>
              <p>
                Growing up on the south side of Chicago shaped Justin's commitment to making STEM accessible to everyone. As founder of Fascinate Media and host of the Curiosity Theory podcast, he brings that same energy to helping CTE educators prepare students for workforce realities in an AI-driven economy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-primary-950">
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
