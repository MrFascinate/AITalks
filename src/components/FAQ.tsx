import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
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

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-primary-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl" />
      </div>

      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
            FREQUENTLY ASKED{' '}
            <span className="text-gradient">QUESTIONS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to know about booking Justin for your event.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card-gradient-border"
              >
                <button
                  className="relative z-10 w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left group"
                  onClick={() => toggle(index)}
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
  );
}
