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
  heroImagePosition: 'left' as const,
  heroImageMobileStyle: { objectPosition: 'left top' },
  heroOverlayStrength: 'light' as const,

  // Problem Section
  problemH2: 'Students Are Graduating Before They\'re Ready for AI',
  problemParagraphs: [
    'AI is already reshaping every industry your students will enter. But most academic programs are still catching up. Faculty are unsure how to teach AI, and students are left experimenting on their own.',
    'There\'s a growing disconnect between what students are learning on campus and what employers assume they already know. That gap gets wider every semester.',
    'Justin helps campuses move past the "should we use AI?" debate and into the "here\'s how we actually do this" conversation.',
  ],

  // What Justin Delivers
  deliverablesBullets: [
    'Which AI tools actually matter for their discipline, with specific applications they can picture using',
    'Approaches faculty can bring into their courses this semester, instead of waiting until next year',
    'Enough confidence with AI to lead the conversation instead of avoiding it',
  ],

  // About
  aboutParagraphs: [
    'Justin "Mr. Fascinate" Shaifer is a Forbes 30 Under 30 science communicator and keynote speaker focused on closing the AI participation gap. His AI courses on LinkedIn Learning have reached over 50,000 learners, and he has spoken at universities including Purdue, Georgia State, and dozens of higher education conferences nationwide.',
    'Growing up on the south side of Chicago shaped Justin\'s commitment to making STEM accessible to everyone. As founder of Fascinate Media and host of the Curiosity Theory podcast, he brings that same energy to helping the next generation participate in an AI-driven economy.',
  ],
  aboutImage: '/suit-transparent.webp',

  // Testimonials
  testimonials: [
    {
      quote: 'We LOVED Justin! His keynote address was EXACTLY what we had asked for. Judging from facial expressions and reactions of the audience, and the number of questions asked during the Q&A, it was very clear that the students truly enjoyed the presentation. Afterwards, Justin spent a very full hour talking with many students who had lined up to chat with him.',
      author: 'Faculty Member',
      role: 'Event Organizer',
      organization: 'Sacred Heart University',
    },
    {
      quote: 'It was really a great success and he was super easy to work with. It wasn\'t an easy crowd for a Friday afternoon and high school students but he held their attention. The faculty were so impressed with how quiet they were - a true indication of how he kept them engaged. I think it was a homerun!',
      author: 'Event Coordinator',
      role: 'University Staff',
      organization: 'Purdue University',
    },
    {
      quote: 'You helped us kick off a project that will no doubt bring value and inspiration to not only A&T but also the broader public. You came through and really blessed it! Thank you for your contribution, we appreciate your thoughtfulness, professionalism, and dedication to the vision.',
      author: 'Project Lead',
      role: 'University Staff',
      organization: 'North Carolina A&T State University',
    },
    {
      quote: 'I want to express my gratitude to Justin for the amazing job he did today. The students and my colleagues enjoyed the discussions immensely. Justin masterfully managed the panelists, attended to audience questions and comments and still stayed within the theme of the discussion.',
      author: 'Event Organizer',
      role: 'Faculty',
      organization: 'Albion College',
    },
  ],

  // Final CTA
  ctaSubtext: 'Let\'s talk about what your campus needs and how Justin can deliver it.',

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
    thumbnailUrl: 'https://i.vimeocdn.com/video/2007841923-b518e3a81d79209c29f56ad8abac7909bc919a8e3029f10d93613cc2de61667d-d_640',
    title: 'See Justin in Action',
    description: 'Watch Justin deliver the practical, engaging AI literacy content that has earned him a 98% satisfaction rate from audiences worldwide. His keynotes combine real demonstrations, relatable stories, and actionable frameworks that your faculty and students can use immediately.',
  },

  // Logo Wall
  logoWallLabel: 'Past Higher Education Clients Include:',
  logoWall: [
    { src: '/Higher Ed/purdue-university-logo-freelogovectors.net_.png', alt: 'Purdue University' },
    { src: '/Higher Ed/NYU-Logo.png', alt: 'NYU' },
    { src: '/Higher Ed/Fordham-University-Logo.png', alt: 'Fordham University' },
    { src: '/Higher Ed/color-center-reverse-UWlogo-print-1024x675.webp', alt: 'University of Washington' },
    { src: '/Higher Ed/Montana_tech_univ_logo.png', alt: 'Montana Tech' },
    { src: '/Higher Ed/delaware-state-university-logo.png', alt: 'Delaware State University' },
    { src: '/Higher Ed/bryant_bulldogs_logo_wordmark_20048058.png', alt: 'Bryant University' },
    { src: '/Higher Ed/Antelope_Valley_College_logo.png', alt: 'Antelope Valley College' },
    { src: '/Higher Ed/NYC_DOE_Logo.png', alt: 'NYC Department of Education' },
    { src: '/Higher Ed/login-logo.png', alt: 'Institution' },
  ],
};

export default function AISpeakerHigherEd() {
  return <LandingPageLayout data={pageData} />;
}
