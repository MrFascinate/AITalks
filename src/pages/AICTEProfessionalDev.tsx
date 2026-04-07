import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Linkedin, CheckCircle, Quote } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AICTEProfessionalDev() {
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
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'person-landing');
    script.textContent = JSON.stringify(personSchema);
    document.head.appendChild(script);

    return () => {
      const schemaToRemove = document.querySelector('script[data-schema="person-landing"]');
      if (schemaToRemove) {
        schemaToRemove.remove();
      }
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

  // PLACEHOLDER TESTIMONIALS - Replace with real quotes
  const testimonials = [
    {
      quote: '[PLACEHOLDER: Add testimonial quote from CTE director or PD coordinator]',
      author: '[Name]',
      role: '[Title], [Organization]',
    },
    {
      quote: '[PLACEHOLDER: Add testimonial quote from educator or state CTE organization]',
      author: '[Name]',
      role: '[Title], [Organization]',
    },
  ];

  return (
    <div className="min-h-screen bg-primary-950">
      <Navbar />

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
                src="/Motana-13.webp"
                alt="Justin Shaifer speaking at a CTE conference"
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
      {/* NOTE: These are placeholder testimonials - replace with real quotes */}
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
