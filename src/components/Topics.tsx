import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Briefcase, TrendingUp, Users } from 'lucide-react';
import { speakerData, audienceOutcomes } from '../data/speakerData';

const iconMap: Record<string, React.ElementType> = {
  rocket: Rocket,
  briefcase: Briefcase,
  chart: TrendingUp,
  users: Users,
};

export default function Topics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="topics" className="py-24 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Keynote Topics
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            Dynamic{' '}
            <span className="text-gradient">Technical Showcases</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Raving reviews from tens of thousands of audience members for presentations that transform complex topics into actionable insights.
          </p>
        </motion.div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {speakerData.topics.map((topic, index) => {
            const IconComponent = iconMap[topic.icon];
            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-primary-950/50 backdrop-blur-sm border border-primary-800/50 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-gray-400">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Audience Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-2xl p-8 md:p-10"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
            What Your Audience Will Gain
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
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Target Audiences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Perfect for</p>
          <div className="flex flex-wrap justify-center gap-3">
            {speakerData.audiences.map((audience) => (
              <span
                key={audience}
                className="bg-primary-800/50 border border-primary-700/50 text-gray-300 px-4 py-2 rounded-full text-sm hover:border-primary-500/50 hover:text-primary-400 transition-all"
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
