import LandingPageLayout from './LandingPageLayout';

const pageData = {
  // SEO
  title: 'AI Literacy Workshop for Enterprise Teams | Justin Shaifer',
  metaDescription: 'Book Justin Shaifer for an AI literacy workshop for enterprise teams. Hands-on training that closes the AI participation gap and builds real skills your team can use immediately.',
  canonicalUrl: 'https://justinshaifer.com/ai-literacy-workshop',

  // Hero
  h1: 'AI Literacy Workshop for Enterprise Teams',
  subheadline: 'Reading about AI is not the same as using it. Justin Shaifer leads hands-on workshops that build real AI skills your team can apply the moment they get back to their desks.',
  heroImage: '/workshop session.jpg',
  heroImagePosition: 'left' as const,
  heroOverlayStrength: 'light' as const,

  // Problem Section
  problemH2: 'Your Team Needs Skills, and They Need Them Yesterday',
  problemParagraphs: [
    'Most AI training stops at awareness. People leave knowing AI is important but having zero idea what to do with it. That\'s a presentation, and presentations fade.',
    'The distance between understanding AI and being able to work with it only closes when people get their hands on the tools. Slides can only take you so far.',
    'Justin\'s workshops are built for teams who want to walk out with something they built, something they own.',
  ],

  // What Justin Delivers
  deliverablesBullets: [
    'Working AI agents and automated workflows they build themselves during the session',
    'Prompt techniques they can reuse across any AI tool, beyond just the one shown in class',
    'A personalized toolkit matched to what they actually do at work',
  ],

  // About
  aboutParagraphs: [
    'Justin "Mr. Fascinate" Shaifer is a Forbes 30 Under 30 science communicator and enterprise AI trainer focused on closing the AI participation gap. His AI courses on LinkedIn Learning have reached over 50,000 learners, and he has delivered hands-on workshops for teams at Google, LinkedIn, NVIDIA, Intuit, and hundreds of organizations.',
    'Justin\'s workshop style comes from years of creating educational content for LinkedIn Learning and producing hands-on STEM programming. Every session is designed for people to leave with something they built themselves.',
  ],
  aboutImage: '/suit-transparent.webp',

  // Testimonials
  testimonials: [
    {
      quote: 'Your keynote was absolutely perfect - it was funny, personal, motivating and educational. You hit all the right points and got the room absolutely buzzing. What\'s more, I want to thank you for your hard work and preparation. You didn\'t miss a deadline and you took feedback into stride in a way that informed the overall presentation in the best way.',
      author: 'Event Producer',
      role: 'PBS Boston',
      organization: 'WGBH',
    },
    {
      quote: 'Justin was wonderful. He had teachers and kids laughing and nodding their heads in agreement. It was the youthful, truthful jolt of energy we needed! Several administrators told me they had already booked Justin based on videos we circulated or were planning to book him after they saw him in action.',
      author: 'Administrator',
      role: 'Education Leader',
      organization: 'NYC Department of Education',
    },
    {
      quote: 'The event was a success and Justin was the perfect person to launch this year\'s GSC. His personality, his work, and his engagement really embodied the spirit of the green schools movement. Audience feedback has been overwhelmingly positive.',
      author: 'Event Coordinator',
      role: 'Green Schools Conference',
      organization: 'USGBC',
    },
    {
      quote: 'Justin was a big hit. His remarks really resonated with the audience and I\'m sure he gained many new fans. He was extremely cooperative and easy to work with.',
      author: 'Event Coordinator',
      role: 'CPB Staff',
      organization: 'Corporation for Public Broadcasting',
    },
  ],

  // Final CTA
  ctaSubtext: 'Let\'s talk about what your team needs and how Justin can deliver it.',

  // FAQs
  faqs: [
    {
      question: 'Will this work for my team\'s skill level?',
      answer: `Justin designs every workshop around the room. Before any session he learns about your team's roles, tools, and comfort level with AI. He's led workshops for groups ranging from complete beginners to technical teams already experimenting with AI. If you're unsure about fit, ask for references from a similar group.`,
    },
    {
      question: 'How do I justify the investment to my leadership?',
      answer: `The easiest way: participants leave with working AI tools they built themselves during the session. Justin also provides post-event satisfaction data via Talkadot that you can share directly with stakeholders. Many clients book follow-up workshops because the results are visible immediately.`,
    },
    {
      question: 'How is this different from a typical AI presentation?',
      answer: `Most AI training is someone talking at a room with slides. Justin's workshops are hands-on from the start. Participants build their own AI agents, write prompts, and walk out with workflows they can use at work the next morning. He builds with AI daily, so the examples come from real experience.`,
    },
    {
      question: 'What does the booking process look like?',
      answer: `Reach out via the contact form with your event date, team size, and goals. You'll hear back within 48 hours. From there it's a short call to understand your team's needs, a straightforward contract, and Justin handles the rest including pre-workshop research and custom content development.`,
    },
    {
      question: 'Does Justin travel for in-person workshops?',
      answer: `Yes, nationally and internationally. Travel logistics are handled as part of the booking process. Virtual workshops are also available.`,
    },
    {
      question: 'What is included in a typical workshop?',
      answer: `A standard workshop includes a pre-session discovery call, a customized 2-4 hour hands-on training, all participant materials and prompt templates, and post-workshop resources your team can reference afterward. Half-day and full-day formats are also available.`,
    },
    {
      question: 'Can the workshop be tailored to our industry?',
      answer: `Every workshop is tailored. Justin researches your industry, your team's daily workflows, and the AI tools most relevant to what they actually do. Past workshops have been customized for teams in finance, healthcare, education, media, and government.`,
    },
    {
      question: 'What kind of promotional support does Justin offer to help market the event?',
      answer: `Justin is happy to create custom promotional videos to help market your workshop internally or externally. He also promotes events across his social platforms, which have a combined reach of over 80,000 followers.`,
    },
  ],

  // Video Embed
  videoEmbed: {
    vimeoId: '1077747719',
    thumbnailUrl: 'https://i.vimeocdn.com/video/2007841923-b518e3a81d79209c29f56ad8abac7909bc919a8e3029f10d93613cc2de61667d-d_640',
    title: 'See Justin in Action',
    description: 'Watch Justin deliver the hands-on, practical AI training that has earned him a 98% satisfaction rate from audiences worldwide. His workshops combine live demonstrations, real-world use cases, and immediately actionable skills your team can apply the same day.',
  },

  // Logo Wall
  logoWallLabel: 'Past Workshop Clients Include:',
  logoWall: [
    { src: '/corporate/Google_2015_logo.svg.webp', alt: 'Google' },
    { src: '/corporate/Samsung-emblem.png', alt: 'Samsung' },
    { src: '/corporate/Capital_One_logo.svg.png', alt: 'Capital One' },
    { src: '/corporate/Intuit-logo-super-blue_(1).png', alt: 'Intuit' },
    { src: '/corporate/Toshiba_logo.svg.png', alt: 'Toshiba' },
    { src: '/corporate/allstate-logo.png', alt: 'Allstate' },
    { src: '/corporate/1361978.png', alt: 'Client Logo' },
  ],
};

export default function AILiteracyWorkshop() {
  return <LandingPageLayout data={pageData} />;
}
