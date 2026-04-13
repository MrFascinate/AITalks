import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Rocket, Briefcase, Laptop, Users, Mic, ChevronDown, FileText } from 'lucide-react';
import { audienceOutcomes } from '../data/speakerData';

const topics = [
  {
    icon: Rocket,
    title: 'Your Workday Streamlined with AI',
    description: 'Practical AI tools and techniques to help corporate professionals transform daily workflows and boost productivity.',
    details: `Are you sure you need to be working so hard? Having direct "conversations" with your data, receiving expert-level consulting and research, and getting a head-start on creative work can all be achieved by leveraging AI. Justin will show you how to become an AI power-user by integrating cutting-edge tools into your daily workflow.`,
    learnMoreUrl: 'https://vimeo.com/1077757454?fl=pl&fe=sh',
    onePagerUrl: '/one-pagers/workday-ai.html',
    bullets: [
      'Discover specific AI tools that match your role and workflow',
      'Master prompt engineering frameworks for professional-grade results',
      'Apply real-world AI use cases — from data analysis to creative production',
      'Protect your team from AI misinformation and "hallucinations"',
      'Seen at: Google, LinkedIn, Allstate, Madison Chamber of Commerce, DevLearn 2024',
    ],
  },
  {
    icon: Briefcase,
    title: 'AI Empowerment & Future of Work',
    description: 'Preparing educators, leaders, and teams to thrive in an AI-driven world.',
    details: `Dive into the nuanced world of Artificial Intelligence with Justin Shaifer. He demystifies the crucial role AI plays in today's educational landscape and beyond — introducing practical AI tools to revolutionize teaching practices, boost student engagement, and future-proof careers. Customized for Higher Education and K-12 audiences.`,
    learnMoreUrl: 'https://vimeo.com/1077747719?fl=pl&fe=sh',
    onePagerUrl: '/one-pagers/ai-empowerment.html',
    bullets: [
      'Build AI literacy and confidence across your organization',
      'Explore the best AI tools for the classroom and the boardroom',
      'Understand why educators and leaders need AI today — not tomorrow',
      'Develop future-proof skills for students and professionals alike',
      'Seen at: NCTIES, Smithsonian, Antelope Valley College, Arizona School Boards Association, Concept Schools',
    ],
  },
  {
    icon: Users,
    title: 'How to Engage Gen Z in STEM',
    description: 'Bridge traditional teaching with modern demands to inspire the next generation.',
    details: `Boring lectures and uninspiring teachers often ruin students' perceptions of STEM. Justin shares his personal story of overcoming adversity — growing up on the south side of Chicago, where STEM was considered anything but cool — to the amazing heights he's reached in his career. He has performed this keynote for over 50,000 students worldwide.`,
    learnMoreUrl: 'https://vimeo.com/1166811589?share=copy&fl=sv&fe=ci',
    onePagerUrl: '/one-pagers/engage-gen-z.html',
    bullets: [
      "Understand Gen Z's core values, communication styles, and motivators",
      'Use storytelling and hands-on learning to make real connections',
      'Design experiences that inspire rather than just instruct',
      'Turn passive audiences into active participants',
      'Seen at: Purdue University, Miami Dade County Schools, USA Science & Engineering Festival, Dubai GITEX Future Stars',
    ],
  },
  {
    icon: Laptop,
    title: 'Hands-on AI Working Sessions',
    description: 'Interactive workshops where participants build real AI skills with applied examples.',
    details: `Justin uses his experience creating hands-on educational courses to walk professionals through how to use AI tools such as AI Agents, AI Browsers, and automated workflows — with hands-on experience and applied examples tailored to your industry.`,
    onePagerUrl: '/one-pagers/hands-on-ai.html',
    bullets: [
      'Build and deploy AI Agents tailored to your workflow',
      'Explore AI Browsers and autonomous research tools',
      'Create automated workflows that run without human input',
      'Apply prompt engineering techniques for professional results',
      'Collaborate on real use cases from your industry in real time',
    ],
  },
];

interface TopicsProps {
  onVideoClick: (url: string) => void;
}

export default function Topics({ onVideoClick }: TopicsProps) {
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
          src="/53970768967_337ff285aa_o.webp"
          alt=""
          className="w-full h-full object-cover opacity-5"
          loading="lazy"
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
                loading="lazy"
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
                          <p className="text-gray-300 mb-3 leading-relaxed">{topic.details}</p>
                          <div className="flex flex-wrap items-center gap-4 mb-5">
                            {topic.learnMoreUrl && (
                              <button
                                onClick={() => onVideoClick(topic.learnMoreUrl!)}
                                className="inline-flex items-center gap-1 text-primary-400 hover:text-primary-300 font-medium transition-colors"
                              >
                                Watch video
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </button>
                            )}
                            {topic.onePagerUrl && (
                              <a
                                href={topic.onePagerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-primary-500/20 hover:bg-primary-500/30 border border-primary-500/40 hover:border-primary-500/70 px-3 py-1.5 rounded-lg transition-all"
                              >
                                <FileText size={14} />
                                View One-Pager
                              </a>
                            )}
                          </div>
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
