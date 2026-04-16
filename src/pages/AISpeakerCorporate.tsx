import LandingPageLayout from './LandingPageLayout';

const pageData = {
  // SEO
  title: 'AI Keynote Speaker for Corporate Events | Justin Shaifer',
  metaDescription: 'Book Justin Shaifer, Forbes 30 Under 30 AI keynote speaker for corporate events. Practical AI literacy training that closes the AI participation gap and gets your team using AI today.',
  canonicalUrl: 'https://justinshaifer.com/ai-keynote-speaker-corporate',

  // Hero
  h1: 'AI Keynote Speaker for Corporate Events',
  subheadline: 'Your team knows AI is changing everything. They just don\'t know how to use it yet. Justin Shaifer delivers practical, hands-on AI keynotes that turn spectators into participants.',
  heroImage: '/corporate/concept schools3.JPG',
  heroImagePosition: 'left' as const,
  heroImageStyle: {},
  heroImageMobileStyle: { objectPosition: '20% center' },
  heroOverlayStrength: 'light' as const,

  // Problem Section
  problemH2: 'Your Team Is Watching AI Pass Them By',
  problemParagraphs: [
    'Most teams are in one of two places with AI: overwhelmed by the hype, or waiting for permission to start. Either way, they\'re sitting it out while the teams that figured it out already have a real advantage.',
    'The problem is deeper than awareness. Everyone knows AI is a big deal. But knowing about AI and knowing how to use it are completely different things.',
    'Justin\'s keynotes close that gap. People leave with tools open on their laptops, ready to go.',
  ],

  // What Justin Delivers
  deliverablesBullets: [
    'Which AI tools are worth their time, cutting through the noise to focus on what\'s useful for their specific roles',
    'Workflows they can take back to their desks and use the same week',
    'The confidence to try things with AI instead of waiting for someone else to figure it out',
  ],

  // About
  aboutParagraphs: [
    'Justin "Mr. Fascinate" Shaifer is a Forbes 30 Under 30 science communicator and keynote speaker focused on closing the AI participation gap. His AI courses on LinkedIn Learning have reached over 50,000 learners, and he has spoken for corporate teams at Google, LinkedIn, NVIDIA, Allstate, and hundreds of enterprise organizations.',
    'As founder of Fascinate Media and host of the Curiosity Theory podcast, Justin brings both technical depth and the ability to make complex ideas click. His presentations consistently earn 98% satisfaction ratings from audiences worldwide.',
  ],
  aboutImage: '/suit-transparent.webp',

  // Testimonials
  testimonials: [
    {
      quote: 'It\'s great to have an overview of the AI landscape from someone you trust, since Justin demos most of the AI tools he shows us. He makes sure to give us a use-case walkthrough which is really nice. I think he should be the first introduction to AI for beginners!',
      author: 'Bjoern Jensen',
      role: '',
      organization: 'Allstate Insurance',
    },
    {
      quote: 'Justin\'s talk was AMAZING! I came away much more excited and ready to begin working with AI. The resources shared gave me a better understanding of leveraging the correct AI for specific tasks. Great use of my time — I look forward to following Justin\'s journey and diving deeper into the world of AI.',
      author: 'Breanna Oropeza',
      role: '',
      organization: 'Allstate Insurance',
    },
    {
      quote: 'Enlightening, engaging and energizing!!! Made me think of the young people in my life and what is most important.',
      author: 'Allison Fonseca',
      role: 'Strategic Account Executive / Customer Success',
      organization: 'Workflow Services',
    },
    {
      quote: 'Dynamic and necessary messaging for our future. Impressive life path — keep doing fascinating things!',
      author: 'Jen Yakimicki Guimond',
      role: 'V.P. of Commercial Services',
      organization: 'NCG Hospitality',
    },
    {
      quote: 'Loved your session. Great information and future-proofing — congratulations on making such an incredible impact.',
      author: 'Bryan Mendelson',
      role: '',
      organization: 'Assurant',
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
    vimeoId: '1072452030',
    thumbnailUrl: 'https://i.vimeocdn.com/video/2001368940-4d371ea53f4cdcbb4bd46a309e1a1ba95594690c7fc9a2640121e91a339fa47d-d_640',
    title: 'See Justin in Action',
    description: 'Watch Justin deliver the practical, engaging AI training that has earned him a 98% satisfaction rate from corporate audiences worldwide. His keynotes combine live demonstrations, relatable stories, and actionable frameworks your team can implement immediately.',
  },

  // Logo Wall
  logoWallLabel: 'Past Corporate Clients Include:',
  logoWall: [
    { src: '/corporate/Google_2015_logo.svg.webp', alt: 'Google' },
    { src: '/corporate/Samsung-emblem.png', alt: 'Samsung' },
    { src: '/corporate/Capital_One_logo.svg.png', alt: 'Capital One' },
    { src: '/corporate/Intuit-logo-super-blue_(1).png', alt: 'Intuit' },
    { src: '/corporate/Toshiba_logo.svg.png', alt: 'Toshiba' },
    { src: '/corporate/allstate-logo.png', alt: 'Allstate' },
    { src: '/images/morgan stanley logo.png', alt: 'Morgan Stanley' },
    { src: '/corporate/1361978.png', alt: 'Client Logo' },
  ],
};

export default function AISpeakerCorporate() {
  return <LandingPageLayout data={pageData} />;
}
