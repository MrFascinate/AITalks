import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Rocket, Briefcase, Laptop, Users, Mic, ChevronDown } from 'lucide-react';
import { audienceOutcomes } from '../data/speakerData';

const topics = [
  {
    icon: Rocket,
    title: 'Your Workday Streamlined with AI',
    description: 'Practical AI tools and techniques to transform daily workflows and boost productivity.',
    details: `In this high-energy, demo-driven keynote, Justin walks audiences through the AI tools already transforming the modern workplace — from AI writing assistants to intelligent scheduling, automated research, and smart decision-making tools.`,
    bullets: [
      'Identify which AI tools are right for your workflow',
      'Cut repetitive tasks using AI automation',
      'Use AI to draft, edit, summarize, and communicate faster',
      'Protect your team from AI misinformation and "hallucinations"',
      'Walk away with a personalized AI toolkit ready to deploy on day one',
    ],
  },
  {
    icon: Briefcase,
    title: 'AI Empowerment & Future of Work',
    description: 'Preparing teams and organizations to thrive in an AI-driven landscape.',
    details: `AI isn't replacing workers — it's separating those who adapt from those who get left behind. Justin equips leaders and teams with the strategic mindset and practical skills to embrace AI as a competitive advantage.`,
    bullets: [
      'Understand which roles are evolving and thriving with AI',
      'Build an AI-ready culture without fear or overwhelm',
      'Develop an organizational AI strategy from the ground up',
      'Identify opportunities to integrate AI into your business model',
      'Learn from real-world case studies of AI-first companies',
    ],
  },
  {
    icon: Users,
    title: 'How to Engage Gen Z',
    description: 'Bridge traditional teaching with modern demands to inspire the next generation.',
    details: `Gen Z doesn't learn the same way their parents did. Justin brings insider knowledge as a viral STEM educator with millions of views to share what actually captures and keeps their attention.`,
    bullets: [
      "Understand Gen Z's core values, communication styles, and motivators",
      'Use storytelling and hands-on learning to make real connections',
      'Design experiences that inspire rather than just instruct',
      'Turn passive audiences into active participants',
      'Build mentorship pipelines that retain top young talent',
    ],
  },
  {
    icon: Laptop,
    title: 'Hands-on AI Working Sessions',
    description: 'Interactive workshops where participants build real AI skills with applied examples.',
    details: `This isn't a lecture — it's a live, interactive working session where participants leave with real skills. Justin uses his experience creating hands-on educational courses to walk professionals through the most powerful AI tools available today.`,
    bullets: [
      'Build and deploy AI Agents tailored to your workflow',
      'Explore AI Browsers and autonomous research tools',
      'Create automated workflows that run without human input',
      'Apply prompt engineering techniques for professional results',
      'Collaborate on real use cases from your industry in real time',
    ],
  },
];

export default function Topics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="topics" className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/53970768967_337ff285aa_o.jpg"
          alt=""
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-900/98 to-primary-900" />
      </div>

      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Mic size={16} className="text-primary-500" />
            <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">Keynote Topics</span>
          </div>

          {/* Title with Image */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <img
                src="/Group-165-1.png"
                alt="Dynamic Keynote Speaker"
                className="w-48 md:w-56 h-auto rounded-lg"
              />
            </motion.div>

            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
                DYNAMIC{' '}
                <span className="text-gradient">KEYNOTE SPEAKER</span>
              </h2>
              <p className="text-gray-400 max-w-xl text-lg">
                Raving reviews from tens of thousands of audience members for presentations that transform complex topics into actionable insights.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Topics Accordion */}
        <div className="flex flex-col gap-4 mb-16">
          {topics.map((topic, index) => {
            const IconComponent = topic.icon;
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-gradient-border"
              >
                {/* Header row - always visible, clickable */}
                <button
                  className="relative z-10 w-full p-6 md:p-8 flex items-center gap-5 text-left group"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-400 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'scale-110' : 'group-hover:scale-110'}`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-xl font-bold mb-1 font-display transition-all ${isOpen ? 'text-gradient' : 'text-white group-hover:text-gradient'}`}>
                      {topic.title.toUpperCase()}
                    </h3>
                    <p className="text-gray-400 text-sm">{topic.description}</p>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isOpen ? 'border-primary-500 text-primary-400' : 'border-gray-600 text-gray-500 group-hover:border-primary-500/50'}`}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </div>
                </button>

                {/* Expandable content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="relative z-10 px-6 md:px-8 pb-8 pt-0">
                        <div className="border-t border-primary-500/20 pt-6">
                          <p className="text-gray-300 mb-5 leading-relaxed">{topic.details}</p>
                          <ul className="space-y-3">
                            {topic.bullets.map((bullet) => (
                              <li key={bullet} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary-500 to-accent-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-gray-300">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Audience Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="card-gradient-border"
        >
          <div className="relative z-10 p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center font-display">
              WHAT YOUR AUDIENCE <span className="text-gradient">WILL GAIN</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {audienceOutcomes.map((outcome, index) => (
                <motion.div
                  key={outcome}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-400 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Target Audiences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4 uppercase tracking-wider text-sm">Perfect for</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Corporate Leadership Teams', 'STEM & Technology Conferences', 'K-12 Educators', 'College Students & Faculty', 'Professional Development Events'].map((audience) => (
              <span
                key={audience}
                className="btn-gradient-border py-2 px-4 text-sm cursor-default"
              >
                {audience}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
