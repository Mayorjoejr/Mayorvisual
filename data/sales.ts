/** Editable service starting points. Confirm scope, fees and terms before accepting a project. */
export type OfferPackage = {
  id: string;
  name: string;
  eyebrow: string;
  bestFor: string;
  description: string;
  inclusions: string[];
  inquiryType: string;
  priceLabel: string;
  checkoutUrl: string;
  /** Enable only after linking an accurate, owner-approved checkout for this exact scope. */
  checkoutApproved: boolean;
};

export const packageGoals = ['Sell a product', 'Launch a brand', 'Grow an audience'] as const;
export const deliveryFormats = ['9:16', '1:1', '16:9'] as const;

export const packages: OfferPackage[] = [
  {
    id: 'social-campaign',
    name: 'Social campaign',
    eyebrow: 'MAKE THE FIRST FRAME COUNT',
    bestFor: 'Reels, Shorts, TikTok and paid social',
    description: 'Turn one clear message into a short video with a strong opening, deliberate pacing and a clear next step.',
    inclusions: ['Opening hook and message direction', 'Focused edit with captions and on-screen text', 'Call to action and platform-ready exports'],
    inquiryType: 'Social Media Video',
    priceLabel: '',
    checkoutUrl: '',
    checkoutApproved: false,
  },
  {
    id: 'product-launch',
    name: 'Product launch',
    eyebrow: 'MAKE THE VALUE VISIBLE',
    bestFor: 'Product reveals, launches and demonstrations',
    description: 'Give viewers a closer look at what makes your product worth considering, through detail, atmosphere and movement.',
    inclusions: ['Product story and visual direction', 'Product animation or footage-led edit', 'Benefit-led sequence and delivery formats'],
    inquiryType: 'Product Animation',
    priceLabel: '',
    checkoutUrl: '',
    checkoutApproved: false,
  },
  {
    id: 'signature-film',
    name: 'Signature film',
    eyebrow: 'GIVE YOUR STORY A WORLD',
    bestFor: 'Brand stories, campaigns and creative concepts',
    description: 'Build a distinctive visual story around your idea, with a considered concept, cinematic atmosphere and a cohesive final edit.',
    inclusions: ['Concept, treatment and story direction', 'AI visuals or footage shaped into a coherent film', 'Color, sound and final delivery planning'],
    inquiryType: 'AI Film',
    priceLabel: '',
    checkoutUrl: '',
    checkoutApproved: false,
  },
];

export const salesFAQs = [
  {
    question: 'Do I need to have footage ready?',
    answer: 'You can start with existing footage, product images, a script or an idea. Share what you have in your brief. The proposal will explain what can be used, what needs to be created and what you need to supply.',
  },
  {
    question: 'Will the video use AI, traditional editing, or both?',
    answer: 'The creative approach should serve the story. Your project may use edited footage, generative visuals, animation or a combination. The intended production approach is agreed before work begins.',
  },
  {
    question: 'How do I get a price and start the project?',
    answer: 'Choose a starting point, select your formats and prepare a brief. A tailored proposal will confirm the deliverables, fee, payment schedule and next steps before you commit.',
  },
  {
    question: 'How long will my video take?',
    answer: 'Timing depends on the concept, production method, complexity and feedback schedule. Include your target date in the brief. A delivery timeline is confirmed in the project proposal rather than assumed from a package name.',
  },
  {
    question: 'What happens if I need revisions?',
    answer: 'Your proposal will define review stages, included revision rounds and how changes outside the agreed scope are handled. You will have a clear plan for feedback before production starts.',
  },
  {
    question: 'Can I use the finished video commercially?',
    answer: 'Intended channels, usage rights and any restrictions must be confirmed in the agreement. Music, stock assets, AI tools and supplied materials can have different license terms. Share your planned use so those requirements can be addressed in the scope.',
  },
];
