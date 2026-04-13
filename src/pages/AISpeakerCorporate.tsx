import LandingPageLayout from './LandingPageLayout';

const pageData = {
  // SEO
  title: 'AI Keynote Speaker for Corporate Events | Justin Shaifer',
  metaDescription: 'Book Justin Shaifer, Forbes 30 Under 30 AI keynote speaker for corporate events. Practical AI literacy training that closes the AI participation gap and gets your team using AI today.',
  canonicalUrl: 'https://justinshaifer.com/ai-keynote-speaker-corporate',

  // Hero
  h1: 'AI Keynote Speaker for Corporate Events',
  subheadline: 'Your team knows AI is changing everything. They just don\'t know how to use it yet. Justin Shaifer delivers practical, hands-on AI keynotes that turn spectators into participants.',
  heroImage: '/AITeacherTraining_1.8.1.png',
  heroOverlayStrength: 'light' as const,

  // Problem Section
  problemH2: 'Your Team Is Watching AI Pass Them By',
  problemParagraphs: [
    'Most corporate teams are stuck in one of two places: overwhelmed by AI hype, or waiting for someone to tell them what to do. Meanwhile, competitors are already using AI to move faster, think sharper, and get more done with less.',
    'The gap between knowing about AI and actually using it is called the AI participation gap. And it\'s growing every day your team sits on the sidelines.',
    'Justin\'s keynotes don\'t just explain AI. They show your people exactly how to start using it before they leave the room.',
  ],

  // What Justin Delivers
  deliverablesBullets: [
    'A clear understanding of which AI tools actually matter for their roles, not the hype, the practical stuff',
    'Hands-on frameworks they can apply to their daily work starting the same day',
    'The confidence to experiment with AI instead of fearing it',
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
      quote: 'Your keynote was absolutely perfect. It was funny, personal, motivating and educational. You hit all the right points and got the room absolutely buzzing.',
      author: 'Event Organizer',
      role: 'Corporate Conference',
    },
    {
      quote: 'Justin\'s talk was AMAZING! I came away much more excited and ready to begin leveraging AI. The resources shared gave me a better understanding on leveraging the correct AI for specific tasks.',
      author: 'Breanna Oropeza',
      role: 'Conference Attendee',
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
