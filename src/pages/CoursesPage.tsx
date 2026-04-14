import { useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, BookOpen, Users, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import StickyBookingButton from '../components/StickyBookingButton';
import { useState } from 'react';

interface Course {
  title: string;
  platform: string;
  description: string;
  thumbnail: string;
  link: string;
  price?: string;
  badge?: string;
  comingSoon?: boolean;
  rating?: number;
  reviews?: string;
}

const enterpriseCourses: Course[] = [
  {
    title: 'AI Agents for Everyday Professionals',
    platform: 'LinkedIn Learning',
    description: 'Learn how to build AI agents using the beginner-friendly platform n8n. Justin walks you through practical use cases for automating everyday work, from data processing to multi-step workflows.',
    thumbnail: '/courses/course-2.jpg',
    link: 'https://www.linkedin.com/learning/ai-agents-for-everyday-professionals-simple-automations-to-speed-up-your-work-no-code-required/when-to-use-and-not-use-an-ai-agent',
    badge: '50,000+ Learners',
    rating: 4.6,
    reviews: '1,000+',
  },
  {
    title: 'AI Agents in Your Browser',
    platform: 'LinkedIn Learning',
    description: 'Discover how to use AI agents directly in your browser to research, summarize, and automate tasks across the web. Built for professionals who want to get more done without switching tools.',
    thumbnail: '/courses/course-3.jpg',
    link: '#',
    rating: 4.7,
    reviews: '200+',
  },
  {
    title: 'Claude CoWork 7-Day Challenge',
    platform: 'LinkedIn Learning',
    description: 'A week-long guided challenge where you learn to work alongside Claude as your AI co-worker. Each day covers a new use case, from writing and analysis to building automated workflows.',
    thumbnail: '/courses/course-1.jpg',
    link: '#',
    rating: 4.6,
    reviews: '200+',
  },
  {
    title: 'Claude Code for Everyday Professionals',
    platform: 'LinkedIn Learning',
    description: 'Master Claude Code as your AI-powered coding assistant. Learn how to use conversational AI to write, debug, and ship code faster, even if you have zero programming experience.',
    thumbnail: '/courses/course-3.jpg',
    link: '#',
    badge: 'New',
  },
];

const educatorCourses: Course[] = [
  {
    title: 'Bringing AI Into Your Classroom',
    platform: 'Kajabi',
    description: 'A step-by-step course for K-12 and higher ed educators who want to use AI in their teaching. Covers responsible use policies, lesson integration, and tools that save hours of prep time.',
    thumbnail: '/AITeacherTraining_1.8.1.png',
    link: '#',
    price: '$49',
    comingSoon: true,
  },
  {
    title: 'Vibe Coding Lesson Plans for Teachers',
    platform: 'Kajabi',
    description: 'Build engaging, standards-aligned coding lessons using AI as your co-pilot. Designed for educators with any level of technical experience who want to bring computer science into their curriculum.',
    thumbnail: '/workshop session.jpg',
    link: '#',
    price: '$97',
    comingSoon: true,
  },
  {
    title: 'AI Agents for Educators',
    platform: 'Kajabi',
    description: 'Learn how to build AI agents that handle grading rubrics, parent communication, lesson planning, and administrative tasks so you can spend more time teaching.',
    thumbnail: '/AI Empowerment.jpg',
    link: '#',
    price: '$197',
    comingSoon: true,
  },
];

function CourseCard({ course, index }: { course: Course; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-gradient-border group block"
    >
      <div className="relative z-10">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden rounded-t-[15px]">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Badge */}
          {course.badge && (
            <div className="absolute top-4 left-4">
              <span className="bg-accent-400 text-primary-950 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md">
                {course.badge}
              </span>
            </div>
          )}
          {/* Coming Soon overlay */}
          {course.comingSoon && (
            <div className="absolute top-4 right-4">
              <span className="bg-primary-500/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md">
                Coming Soon
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-primary-400 text-sm font-semibold uppercase tracking-wider">
              {course.platform}
            </p>
            {course.price && (
              <span className="text-accent-400 font-bold text-lg">{course.price}</span>
            )}
          </div>
          <h3 className="text-xl font-bold text-white font-display mb-3">
            {course.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {course.description}
          </p>
          {course.rating && (
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => {
                  const fill = Math.min(1, Math.max(0, course.rating! - i));
                  return (
                    <div key={i} className="relative w-4 h-4">
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>
              <span className="text-white font-semibold text-sm">{course.rating}</span>
              <span className="text-gray-500 text-sm">({course.reviews} reviews)</span>
            </div>
          )}
          {course.comingSoon ? (
            <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">
              Available Soon
            </span>
          ) : (
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient-border inline-flex items-center gap-2 text-sm py-2 px-5"
            >
              Start Learning
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function CoursesPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const enterpriseRef = useRef(null);
  const enterpriseInView = useInView(enterpriseRef, { once: true, margin: '-100px' });
  const educatorRef = useRef(null);
  const educatorInView = useInView(educatorRef, { once: true, margin: '-100px' });

  useEffect(() => {
    document.title = 'AI & STEM Courses | Justin Shaifer';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI training courses by Justin Shaifer on LinkedIn Learning and Fascinate Media. Courses for enterprise professionals and educators.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-primary-950">
      <Navbar
        links={[
          { name: 'Enterprise', href: '#enterprise' },
          { name: 'Educators', href: '#educators' },
          { name: 'Main Site', href: '/' },
        ]}
        onBookClick={() => setIsBookingModalOpen(true)}
      />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      <StickyBookingButton onBookClick={() => setIsBookingModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-display tracking-tight">
              AI{' '}
              <span className="text-gradient">COURSES</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Self-paced AI training for professionals who want to work smarter and educators who want to bring AI into the classroom. Built by Justin Shaifer, Forbes 30 Under 30 and LinkedIn Learning instructor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section id="enterprise" className="py-20 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={enterpriseRef}
            initial={{ opacity: 0, y: 20 }}
            animate={enterpriseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
                FOR <span className="text-gradient">ENTERPRISE</span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl">
              AI training courses on LinkedIn Learning designed to help professionals and teams start using AI at work today.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {enterpriseCourses.map((course, index) => (
              <div key={course.title} className="relative">
                <CourseCard course={course} index={index} />
                {index < enterpriseCourses.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-6 z-10 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educator Section */}
      <section id="educators" className="py-20 bg-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={educatorRef}
            initial={{ opacity: 0, y: 20 }}
            animate={educatorInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
                FOR <span className="text-gradient">EDUCATORS</span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl">
              Courses built specifically for K-12 and higher ed teachers who want to bring AI into their practice without the learning curve.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {educatorCourses.map((course, index) => (
              <div key={course.title} className="relative">
                <CourseCard course={course} index={index} />
                {index < educatorCourses.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-6 z-10 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightning Lesson Section */}
      <section className="py-20 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-gradient-border">
              <div className="relative z-10 p-8 md:p-12">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-accent-400 text-primary-950 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md">
                        Free Lightning Lesson
                      </span>
                      <span className="text-gray-400 text-sm">Maven</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                      Launch an App with AI:{' '}
                      <span className="text-gradient">For Non-Technical Professionals</span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      A free 30-minute live session where Justin Shaifer and Gabe Williams show you exactly how to build a functional app from scratch using AI. See real tools, real demos, and walk away knowing what's possible even if you've never written a line of code.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                      <div className="glass rounded-lg p-4 text-center">
                        <p className="text-white font-bold text-lg">Free</p>
                        <p className="text-gray-400 text-sm">No cost to attend</p>
                      </div>
                      <div className="glass rounded-lg p-4 text-center">
                        <p className="text-white font-bold text-lg">30 min</p>
                        <p className="text-gray-400 text-sm">Lightning Lesson</p>
                      </div>
                      <div className="glass rounded-lg p-4 text-center">
                        <p className="text-white font-bold text-lg">Live</p>
                        <p className="text-gray-400 text-sm">Virtual on Zoom</p>
                      </div>
                    </div>
                    <a
                      href="https://maven.com/p/a19b2f/launch-an-app-with-ai-for-non-technical-professionals"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gradient-solid inline-flex items-center gap-2"
                    >
                      Secure Your Seat
                      <ArrowRight size={18} />
                    </a>
                  </div>
                  <div className="flex-shrink-0 w-full lg:w-auto">
                    <div className="glass rounded-xl p-6 max-w-sm mx-auto">
                      <h3 className="text-white font-bold font-display text-lg mb-4">What You'll See</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-accent-400 text-xs font-bold">1</span>
                          </div>
                          <p className="text-gray-300 text-sm">Which companies are advancing with AI and what's holding the rest back</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-accent-400 text-xs font-bold">2</span>
                          </div>
                          <p className="text-gray-300 text-sm">Live demos of real apps built by non-technical professionals for actual workplace problems</p>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-accent-400 text-xs font-bold">3</span>
                          </div>
                          <p className="text-gray-300 text-sm">A complete functional app built from scratch in real time</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Want a Custom Training for{' '}
              <span className="text-gradient">Your Team?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Justin delivers live keynotes and hands-on workshops customized for your organization. Get in touch to build something tailored to your team.
            </p>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="btn-gradient-solid inline-flex items-center justify-center gap-2"
            >
              Book Justin
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
