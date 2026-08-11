import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, FileText } from 'lucide-react';
import { audienceOutcomes } from '../data/speakerData';

const audienceLinks: Record<string, string> = {
  'Corporate Leadership Teams': '/ai-keynote-speaker-corporate',
  'STEM & Technology Conferences': '/ai-literacy-workshop',
  'K-12 Educators': '/ai-professional-development',
  'College Students & Faculty': '/ai-keynote-speaker-higher-education',
  'Professional Development Events': '/ai-professional-development',
};

const topics = [
  {
    image: '/P1122594.00_08_35_24.Still010.webp',
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
    image: '/AITeacherTraining_1.8.1.png',
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
    image: '/DSC03201.webp',
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
    image: '/workshop session.jpg',
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

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header: title left, description right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display leading-none flex-shrink-0">
            AI & STEM<br />
            <span className="text-gradient">TRAINING</span>
          </h2>
          <p className="text-gray-300 max-w-md text-lg md:text-xl md:pb-2">
            <span className="font-bold text-white">Keynotes</span> and hands-on{' '}
            <span className="font-bold text-white">workshops</span> that help educators
            bring AI into the classroom and enterprise teams put it to work. Every session
            is customized for each client.
          </p>
        </motion.div>

        {/* Topic rows */}
        <div className="mb-16">
          {topics.map((topic, index) => {
            const isOpen = openIndex === index;
            const num = String(index + 1).padStart(2, '0');
            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Divider */}
                <div className="border-t border-white/10" />

                {/* Row */}
                <button
                  className="w-full py-8 flex items-center gap-6 text-left group"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  {/* Number */}
                  <span className="text-primary-400 font-bold text-sm tracking-widest w-8 flex-shrink-0 font-display">
                    {num}
                  </span>

                  {/* Title + Description */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-xl md:text-2xl font-bold font-display transition-colors duration-200 ${isOpen ? 'text-gradient' : 'text-white group-hover:text-primary-300'}`}>
                      {topic.title.toUpperCase()}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{topic.description}</p>
                  </div>

                  {/* Photo */}
                  <div className="flex-shrink-0 hidden sm:block">
                    <div className="w-28 h-20 md:w-36 md:h-24 rounded-lg overflow-hidden">
                      <img
                        src={topic.image}
                        alt={topic.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Plus/Minus button */}
                  <div className={`flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-200 ${isOpen ? 'border-primary-500 text-primary-400 bg-primary-500/10' : 'border-white/20 text-white/50 group-hover:border-primary-500/50 group-hover:text-primary-400'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
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
                      <div className="pl-14 pb-8">
                        <p className="text-gray-300 mb-4 leading-relaxed max-w-3xl">{topic.details}</p>
                        <div className="flex flex-wrap items-center gap-4 mb-5">
                          {topic.learnMoreUrl && (
                            <button
                              onClick={(e) => { e.stopPropagation(); onVideoClick(topic.learnMoreUrl!); }}
                              className="inline-flex items-center gap-1.5 text-primary-400 hover:text-primary-300 font-medium transition-colors text-sm"
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
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-primary-500/20 hover:bg-primary-500/30 border border-primary-500/40 hover:border-primary-500/70 px-3 py-1.5 rounded-lg transition-all"
                            >
                              <FileText size={14} />
                              View One-Pager
                            </a>
                          )}
                        </div>
                        <ul className="space-y-2 max-w-3xl">
                          {topic.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary-500 to-accent-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-gray-300 text-sm">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          {/* Final divider */}
          <div className="border-t border-white/10" />
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
              YOUR AUDIENCE <span className="text-gradient">WILL GAIN</span>
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
          <p className="text-gray-400 mb-4 uppercase tracking-wider text-sm">Explore more</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Corporate Leadership Teams', 'STEM & Technology Conferences', 'K-12 Educators', 'College Students & Faculty', 'Professional Development Events'].map((audience) => (
              <Link
                key={audience}
                to={audienceLinks[audience]}
                className="btn-gradient-border py-2 px-4 text-sm cursor-pointer hover:scale-105 transition-transform"
              >
                {audience}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
