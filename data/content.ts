/** Editable starter content. Replace samples with your own credited work before sharing as a finished portfolio. */
export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: number;
  description: string;
  image: string;
  imageAlt: string;
  videoUrl?: string;
  embedUrl?: string;
  captionsUrl?: string;
  sample: boolean;
  client: string;
  challenge: string;
  concept: string;
  process: string;
  outcome: string;
  tools: string[];
};

export const studio = {
  name: 'Mayor Joe',
  shortName: 'MAYOR JOE',
  identityIsPlaceholder: false,
  profession: 'AI Filmmaker / Video Editor',
  tagline: 'Where imagination becomes motion.',
  heroEyebrow: "I DON'T JUST EDIT VIDEOS.",
  heroTitle: "I CREATE WHAT DOESN'T EXIST.",
  heroDescription: 'Give your product, brand, or bold idea a story worth watching. I combine cinematic editing, AI visuals, and creative direction to make the value clear—and the next step easy to see.',
  availability: 'Open for creative collaborations',
  availabilityConfirmed: false,
  heroImage: '/images/hero.webp',
  heroImageAlt: 'Earth’s curved horizon seen from orbit, stock reference photograph',
  heroMediaIsSample: true,
  showreelDescription: '18-second mood study · Animated stock reference images · Silent footage',
  heroVideoUrl: '/videos/hero-reel.mp4',
  showreelVideoUrl: '/videos/hero-reel.mp4',
  showreelEmbedUrl: '',
  portrait: '/images/mayor-joe.webp',
  portraitAlt: 'Mayor Joe, AI filmmaker and video editor',
  portraitIsSample: false,
  bio: [
    "I'm Mayor Joe, an AI video editor and creative storyteller passionate about creating visuals that challenge what people believe is possible.",
    'I combine emerging AI technology with cinematic editing, visual storytelling, and thoughtful creative direction to transform ideas into experiences that make people stop, watch, and remember.',
    "For me, technology is not the creativity. It's the canvas.",
  ],
  bioIsPlaceholder: false,
  philosophy: 'Human imagination. New possibilities. Every frame with purpose.',
  achievements: [] as string[],
  mediaKitUrl: '',
};

export const categories = [
  'All Projects',
  'AI Commercials',
  'Cinematic AI Films',
  'Social Media Ads',
  'Product Animations',
  'Music Videos',
  'Motion Graphics',
  'AI Visual Effects',
];

export const projects: Project[] = [
  {
    id: '01', slug: 'otherworld', videoUrl: '/videos/otherworld.mp4', title: 'OTHERWORLD', category: 'Cinematic AI Films', year: 2026,
    description: 'A visual study in solitude, scale, and worlds beyond the familiar.',
    image: '/images/project-otherworld.webp', imageAlt: 'Earth and its curved blue horizon photographed from orbit',
    sample: true, client: 'Self-initiated concept / sample',
    challenge: 'Imagine a destination that feels vast and unfamiliar while keeping the story grounded in a single human perspective.',
    concept: 'A lone traveler enters an impossible landscape. Quiet compositions and a restrained palette let atmosphere carry the narrative.',
    process: 'Suggested production approach: establish a visual language, develop concept frames, test shot continuity, animate selected scenes, and shape the sequence through editing and sound.',
    outcome: 'An illustrative portfolio concept showing how an original world could become a cinematic short. Finished production footage has not been supplied.',
    tools: [],
  },
  {
    id: '02', slug: 'velocity', videoUrl: '/videos/velocity.mp4', title: 'VELOCITY', category: 'AI Commercials', year: 2026,
    description: 'Sculpted light. Precise movement. A fictional automotive campaign.',
    image: '/images/project-velocity.webp', imageAlt: 'A dark sports car on the road at dusk, stock reference photograph',
    sample: true, client: 'Self-initiated concept / sample',
    challenge: 'Explore how a product story can communicate energy and precision through light, pace, and carefully selected details.',
    concept: 'A fictional automotive spot that moves between dramatic silhouette, close material studies, and open-road scale.',
    process: 'Suggested production approach: moodboards and shot planning, concept development, motion tests, editorial assembly, sound design, and finishing.',
    outcome: 'A sample creative direction for an automotive commercial. It is not commissioned by or affiliated with any vehicle brand.',
    tools: [],
  },
  {
    id: '03', slug: 'objects-in-motion', videoUrl: '/videos/objects-in-motion.mp4', title: 'OBJECTS IN MOTION', category: 'Product Animations', year: 2026,
    description: 'An everyday object, reimagined as a study of form and feeling.',
    image: '/images/project-objects-in-motion.webp', imageAlt: 'Black over-ear headphones on a pale studio surface, stock reference',
    sample: true, client: 'Self-initiated concept / sample',
    challenge: 'Build a memorable product introduction from simple shapes, materials, and a deliberate sense of movement.',
    concept: 'A minimal product suspended in a sculptural environment. Macro detail and slow motion make texture part of the story.',
    process: 'Suggested production approach: prepare a clean product reference, define lighting and surface treatment, develop motion studies, composite, and grade.',
    outcome: 'An illustrative product animation direction ready to be replaced with an owned or approved product film.',
    tools: [],
  },
  {
    id: '04', slug: 'after-hours', videoUrl: '/videos/after-hours.mp4', title: 'AFTER HOURS', category: 'Social Media Ads', year: 2026,
    description: 'A nocturnal mood piece built around rhythm and a striking first frame.',
    image: '/images/project-after-hours.webp', imageAlt: 'Rainy city street with glowing lights between tall buildings',
    sample: true, client: 'Self-initiated concept / sample',
    challenge: 'Translate a cinematic mood into a concise social format with a clear visual idea from the opening moment.',
    concept: 'Reflections, fleeting light, and city textures form a compact story designed for vertical and square compositions.',
    process: 'Suggested production approach: plan the visual hook, develop a short shot list, build the edit around rhythm, add sound, and adapt for delivery formats.',
    outcome: 'A sample social campaign concept. No engagement, conversion, or performance results are claimed.',
    tools: [],
  },
  {
    id: '05', slug: 'resonance', videoUrl: '/videos/resonance.mp4', title: 'RESONANCE', category: 'Music Videos', year: 2026,
    description: 'Sound imagined as light, texture, and an evolving visual world.',
    image: '/images/project-resonance.webp', imageAlt: 'A live performer reaching upward through stage haze, stock reference',
    sample: true, client: 'Self-initiated concept / sample',
    challenge: 'Give a musical atmosphere a visual identity without relying on a literal narrative.',
    concept: 'An abstract performance world where color, scale, and recurring forms evolve with an imagined soundtrack.',
    process: 'Suggested production approach: map musical sections, develop recurring motifs, explore transitions, assemble the visual sequence, and refine timing.',
    outcome: 'An illustrative music video treatment. No artist collaboration or licensed soundtrack is implied.',
    tools: [],
  },
  {
    id: '06', slug: 'liquid-light', videoUrl: '/videos/liquid-light.mp4', title: 'LIQUID LIGHT', category: 'Motion Graphics', year: 2026,
    description: 'An abstract exploration of luminous materials and impossible motion.',
    image: '/images/project-liquid-light.webp', imageAlt: 'An abstract sculptural composition in violet, pink and cyan',
    sample: true, client: 'Self-initiated concept / sample',
    challenge: 'Make an abstract sequence feel tactile, coherent, and purposeful through a limited visual vocabulary.',
    concept: 'Fluid metallic forms and controlled lighting become an evolving motion study, with space for titles or brand elements.',
    process: 'Suggested production approach: define materials and composition, test transformation ideas, build transitions, composite, and finish with a consistent grade.',
    outcome: 'A sample motion design direction, not a completed client identity or visual effects commission.',
    tools: [],
  },
];

export type Service = { id: string; title: string; description: string; cta: string; inquiryType: string };
export const services: Service[] = [
  { id: '01', title: 'AI Video Commercials', description: 'Scroll-stopping, cinematic commercials that transform products and brands into unforgettable visual experiences.', cta: 'Create a commercial', inquiryType: 'AI Video Commercial' },
  { id: '02', title: 'AI Filmmaking', description: 'Original cinematic worlds, surreal storytelling, AI-generated scenes, and imaginative short films.', cta: 'Build a new world', inquiryType: 'AI Film' },
  { id: '03', title: 'Social Media Video Editing', description: 'High-impact Reels, TikToks, YouTube Shorts, and social advertising content designed to grab attention.', cta: 'Make an impression', inquiryType: 'Social Media Video' },
  { id: '04', title: 'AI Product Animation', description: 'Transform ordinary product images into premium, visually compelling animated advertisements.', cta: 'Bring a product to life', inquiryType: 'Product Animation' },
  { id: '05', title: 'Motion Graphics & VFX', description: 'Dynamic visual effects, motion design, compositing, transitions, and cinematic enhancements.', cta: 'Explore the possibilities', inquiryType: 'Motion Graphics & VFX' },
  { id: '06', title: 'Creative Direction & Storytelling', description: 'From initial concept and storyboarding to visual development and finished production.', cta: 'Shape your story', inquiryType: 'Creative Direction' },
];

export type ProcessStep = { id: string; title: string; description: string; detail: string };
export const processSteps: ProcessStep[] = [
  { id: '01', title: 'Discover', description: 'Start with the story.', detail: "Understand your vision, audience, story, and business objectives. Define what the finished work needs to communicate." },
  { id: '02', title: 'Imagine', description: 'Give the idea a world.', detail: 'Develop concepts, visual direction, scripts, and storyboards. Find a clear creative thread before production begins.' },
  { id: '03', title: 'Create', description: 'Build it, frame by frame.', detail: 'Produce visuals, shape the edit, compose scenes, and refine motion and effects into one coherent experience.' },
  { id: '04', title: 'Deliver', description: 'Make every detail count.', detail: 'Polish the film, refine color and sound, and prepare the agreed formats and assets for publishing.' },
];

/** Suggested starter entries only. Keep hidden until verified, or visibly label as illustrative. */
export const tools = [
  { name: 'Kling AI', role: 'Image to motion', sample: true, verified: false },
  { name: 'Runway', role: 'Visual exploration', sample: true, verified: false },
  { name: 'Higgsfield AI', role: 'Camera studies', sample: true, verified: false },
  { name: 'Google Veo', role: 'Generative video', sample: true, verified: false },
  { name: 'Premiere Pro', role: 'Editorial', sample: true, verified: false },
  { name: 'After Effects', role: 'Motion and compositing', sample: true, verified: false },
  { name: 'DaVinci Resolve', role: 'Color and finishing', sample: true, verified: false },
  { name: 'CapCut', role: 'Social formats', sample: true, verified: false },
  { name: 'Photoshop', role: 'Concept development', sample: true, verified: false },
  { name: 'ElevenLabs', role: 'Voice exploration', sample: true, verified: false },
];

export type Testimonial = { approved?: boolean; quote: string; name: string; role?: string; company?: string; projectUrl?: string; videoUrl?: string; logoUrl?: string };
export const testimonials: Testimonial[] = [];

export const contacts = {
  email: '', bookingUrl: '', whatsapp: '', instagram: '', behance: '', linkedin: '', youtube: '', vimeo: '',
  /** Set to your real HTTPS submission endpoint. Empty means delivery is unavailable. */
  formEndpoint: '',
};

export const seo = {
  siteUrl: 'https://frame-shift-cinema.maplespice128.chatgpt.site',
  title: 'Mayor Joe — AI Filmmaker & Creative Video Editor',
  description: 'Build your next product video, social campaign, or brand film with Mayor Joe. Explore creative directions, compare treatments, and plan a clear video project brief.',
  socialImage: '/images/mayor-joe.webp',
};
