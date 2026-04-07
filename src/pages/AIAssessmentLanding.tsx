import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Linkedin, BookOpen, BarChart3, Users, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AIAssessmentLanding() {
  useEffect(() => {
    document.title = 'Free AI Readiness Assessment | Justin Shaifer';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Take the free AI Readiness Assessment to see how your organization compares. Get personalized insights and learn how to close the AI participation gap.');
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://justinshaifer.com/free-ai-assessment');
    }
  }, []);

  return (
    <div className="min-h-screen bg-primary-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950" />
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/20 to-accent-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-accent-400/10 to-primary-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
            >
              <BarChart3 className="w-4 h-4 text-primary-400" />
              <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">Free Assessment</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-display tracking-tight"
            >
              How <span className="text-gradient">AI-Ready</span> Is Your Organization?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 mb-10 leading-relaxed"
            >
              Take the free AI Readiness Assessment to see how your team compares to others. In just 5 minutes, you will get personalized insights on where you stand and what it takes to close the AI participation gap.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/ai-assessment.html"
                className="btn-gradient-solid inline-flex items-center justify-center gap-2 text-lg"
              >
                Take the Free Assessment
                <ArrowRight size={20} />
              </a>
              <a
                href="/#contact"
                className="btn-gradient-solid inline-flex items-center justify-center gap-2"
              >
                Book Justin
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Discover Section */}
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
              <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">What You Will Learn</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
              Your Personalized <span className="text-gradient">AI Insights</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: 'Benchmark Your Team',
                description: 'See how your organization\'s AI adoption compares to others in your industry and identify gaps.',
              },
              {
                icon: Target,
                title: 'Spot the Gaps',
                description: 'Discover where your team is falling behind and which skills need the most attention.',
              },
              {
                icon: Users,
                title: 'Get Actionable Steps',
                description: 'Receive practical recommendations tailored to your organization\'s specific situation.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-gradient-border"
              >
                <div className="relative z-10 p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-400 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 font-display">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
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
              <span className="text-primary-400 text-sm font-medium uppercase tracking-wider">The AI Participation Gap</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-display">
              Most Teams Are <span className="text-gradient">Watching, Not Using</span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                AI is transforming every industry. But there is a growing divide between organizations that are actively using AI and those still waiting on the sidelines. This is the AI participation gap.
              </p>
              <p>
                The assessment reveals where your organization stands. Are your people experimenting with AI tools? Do they know which ones actually matter for their work? Are they confident enough to try, or are they stuck in fear and confusion?
              </p>
              <p>
                Understanding where you are is the first step to closing the gap. The assessment gives you that clarity in just 5 minutes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-12 bg-primary-900 border-y border-primary-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-primary-400" />
              <span className="text-gray-300 font-medium">Forbes 30 Under 30</span>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="w-6 h-6 text-primary-400" />
              <span className="text-gray-300 font-medium">LinkedIn Top Voice</span>
            </div>
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-primary-400" />
              <span className="text-gray-300 font-medium">50,000+ LinkedIn Learners</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Justin Section */}
      <section className="relative py-24 bg-primary-950 overflow-hidden">
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
                Justin "Mr. Fascinate" Shaifer is a Forbes 30 Under 30 science communicator and keynote speaker focused on closing the AI participation gap. His AI courses on LinkedIn Learning have reached over 50,000 learners, and he has spoken for organizations including Google, LinkedIn, NVIDIA, Allstate, and hundreds of enterprise teams and universities.
              </p>
              <p>
                The AI Readiness Assessment draws from Justin's experience helping organizations understand where they actually stand with AI adoption. After the assessment, you will have a clear picture of what to prioritize and whether bringing Justin in to speak could help accelerate your team's progress.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-primary-900 relative overflow-hidden">
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
              Find Out Where You <span className="text-gradient">Stand</span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              The assessment takes 5 minutes. The insights could change how your organization approaches AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/ai-assessment.html"
                className="btn-gradient-solid inline-flex items-center justify-center gap-2 text-lg"
              >
                Take the Free Assessment
                <ArrowRight size={20} />
              </a>
              <a
                href="/#contact"
                className="btn-gradient-solid inline-flex items-center justify-center gap-2"
              >
                Book Justin
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
