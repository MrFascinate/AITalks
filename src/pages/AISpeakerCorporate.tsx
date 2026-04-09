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

  // Logo Wall
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

export default function AISpeakerCorporate() {
  return <LandingPageLayout data={pageData} />;
}
