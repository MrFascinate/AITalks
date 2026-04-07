import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Linkedin, BookOpen, CheckCircle, Quote } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
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
}

interface LandingPageLayoutProps {
  data: LandingPageData;
}

export default function LandingPageLayout({ data }: LandingPageLayoutProps) {
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
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'person-landing');
    script.textContent = JSON.stringify(personSchema);
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const schemaToRemove = document.querySelector('script[data-schema="person-landing"]');
      if (schemaToRemove) {
        schemaToRemove.remove();
      }
    };
  }, [data]);

  const credibilityItems = [
    { icon: Award, text: 'Forbes 30 Under 30' },
    { icon: Linkedin, text: 'LinkedIn Learning Instructor' },
    { icon: BookOpen, text: '50,000+ Learners' },
  ];

  const logoClients = ['ABC News', 'PBS', 'NVIDIA', 'Hulu', 'Google', 'LinkedIn'];

  return (
    <div className="min-h-screen bg-primary-950">
      <Navbar />

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
            >
              <a
                href="/#contact"
                className="btn-gradient-solid inline-flex items-center gap-2"
              >
                Book Justin
                <ArrowRight size={18} />
              </a>
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
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
            <span className="uppercase tracking-wider">As seen in:</span>
            {logoClients.map((client) => (
              <span key={client} className="text-gray-400">{client}</span>
            ))}
          </div>
        </div>
      </section>

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
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Bring This Message to{' '}
              <span className="text-gradient">Your Audience?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              {data.ctaSubtext}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="btn-gradient-solid inline-flex items-center justify-center gap-2"
              >
                Book Justin
                <ArrowRight size={18} />
              </a>
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
