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
  aboutImage: '/headshot8.jpg',

  // Testimonials
  testimonials: [
    {
      quote: 'Your keynote was absolutely perfect. It was funny, personal, motivating and educational. You hit all the right points and got the room absolutely buzzing.',
      author: 'Event Organizer',
      role: 'Corporate Conference',
    },
    {
      quote: 'Informative, inspiring, and thought provoking. Justin did a great job explaining how AI is changing the world. He gave great examples of why incorporating AI is essential.',
      author: 'Workshop Participant',
      role: 'Talkadot Review',
    },
  ],

  // Final CTA
  ctaSubtext: 'Let\'s talk about what your team needs and how Justin can deliver it.',
};

export default function AILiteracyWorkshop() {
  return <LandingPageLayout data={pageData} />;
}
