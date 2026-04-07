import LandingPageLayout from './LandingPageLayout';

const pageData = {
  // SEO
  title: 'AI Keynote Speaker for Higher Education | Justin Shaifer',
  metaDescription: 'Book Justin Shaifer, Forbes 30 Under 30 AI keynote speaker for higher education. Helping faculty and students close the AI participation gap with practical AI literacy.',
  canonicalUrl: 'https://justinshaifer.com/ai-keynote-speaker-higher-education',

  // Hero
  h1: 'AI Keynote Speaker for Higher Education',
  subheadline: 'Your students will graduate into an AI-driven economy. The question is whether they\'ll be ready to participate in it. Justin Shaifer helps faculty and students build the AI literacy that matters.',
  heroImage: '/AI Empowerment.jpg',

  // Problem Section
  problemH2: 'Students Are Graduating Without the Skills They Need',
  problemParagraphs: [
    'AI is already reshaping every industry your students will enter. But most academic programs are still catching up. Faculty are uncertain how to teach AI, and students are left experimenting on their own with no guidance.',
    'This is the AI participation gap in higher education. And it\'s leaving graduates unprepared for the workforce they\'re about to enter.',
    'Justin\'s keynotes give faculty practical tools they can use immediately and show students what AI literacy actually looks like in practice.',
  ],

  // What Justin Delivers
  deliverablesBullets: [
    'A practical framework for integrating AI into coursework without compromising academic integrity',
    'Real examples of how AI is already being used in the industries students will enter',
    'The confidence to engage with AI as a tool, not a threat to critical thinking',
  ],

  // About
  aboutParagraphs: [
    'Justin "Mr. Fascinate" Shaifer is a Forbes 30 Under 30 science communicator and keynote speaker focused on closing the AI participation gap. His AI courses on LinkedIn Learning have reached over 50,000 learners, and he has spoken at universities including Purdue, Georgia State, and dozens of higher education conferences nationwide.',
    'Growing up on the south side of Chicago shaped Justin\'s commitment to making STEM accessible to everyone. As founder of Fascinate Media and host of the Curiosity Theory podcast, he brings that same energy to helping the next generation participate in an AI-driven economy.',
  ],
  aboutImage: '/headshot8.jpg',

  // Testimonials
  testimonials: [
    {
      quote: 'Justin\'s presentation was transformative for our faculty. Teachers left feeling empowered and excited to integrate AI tools into their curriculum immediately.',
      author: 'Dr. Sarah Mitchell',
      role: 'Dean of Instruction, Maricopa Community Colleges',
    },
    {
      quote: 'The most practical and engaging AI session we\'ve ever hosted. Justin made complex concepts accessible and gave our staff actionable strategies they could use the next day.',
      author: 'Michael Torres',
      role: 'Director of Professional Development, Houston ISD',
    },
  ],

  // Final CTA
  ctaSubtext: 'Let\'s talk about what your campus needs and how Justin can deliver it.',
};

export default function AISpeakerHigherEd() {
  return <LandingPageLayout data={pageData} />;
}
