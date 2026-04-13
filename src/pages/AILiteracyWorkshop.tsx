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
  problemH2: 'Your Team Needs Skills, Not Another Presentation',
  problemParagraphs: [
    'Most AI training fails because it stops at awareness. People leave knowing that AI exists but having no idea how to actually use it. That\'s not training. That\'s a missed opportunity.',
    'The AI participation gap is the distance between understanding AI and being able to work with it. Closing that gap requires hands-on practice with real tools, real use cases, and real guidance.',
    'Justin\'s workshops are built for teams who want to leave with working knowledge, not just inspiration.',
  ],

  // What Justin Delivers
  deliverablesBullets: [
    'Working AI agents and automated workflows they build during the session',
    'Prompt engineering frameworks they can reuse across any AI tool',
    'A personalized AI toolkit matched to their specific roles and responsibilities',
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
  ],

  // Video Embed
  videoEmbed: {
    vimeoId: '1077747719',
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
