/** Editable portfolio content. Provided video samples retain their source filenames and Drive links. */
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
  previewUrl?: string;
  originalFilename?: string;
  driveUrl?: string;
  durationSeconds?: number;
  width?: number;
  height?: number;
  format?: 'portrait' | 'landscape';
  sampleKind?: 'provided' | 'illustrative';
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
  heroImage: '/media/curated-reel-poster.webp',
  heroImageAlt: 'A warm food close-up from the Bombay Kitchen video sample',
  heroMediaIsSample: false,
  showreelLabel: 'SELECTED SAMPLE REEL',
  showreelDescription: 'A short curated reel from the AI Video Samplings collection. Explore the full selected videos below.',
  heroVideoUrl: '/media/curated-reel.mp4',
  showreelVideoUrl: '/media/curated-reel.mp4',
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

export const collection = {
  "title": "AI Video Samplings",
  "folderUrl": "https://drive.google.com/drive/folders/1lL-UokaQRUVwCd4JxJ-IOW9RoirltGw6",
  "totalFiles": 18,
  "selectedCount": 8,
  "updatedAt": "2026-11-15"
};

export const categories = [
  "All Projects",
  "AI Commercials",
  "AI Storytelling",
  "Documentary",
  "Motion Graphics",
  "Animation",
  "Faceless Content"
];

export const projects: Project[] = [
  {
    "id": "01",
    "slug": "bombay-kitchen",
    "title": "BOMBAY KITCHEN",
    "category": "AI Commercials",
    "year": 2026,
    "description": "A restaurant story told through warm light, appetizing detail, and a clear final invitation.",
    "image": "/media/posters/bombay-kitchen.webp",
    "imageAlt": "Pizza, plated dishes and shared dining moments in the Bombay Kitchen video sample",
    "videoUrl": "/media/films/bombay-kitchen.mp4",
    "previewUrl": "/media/previews/bombay-kitchen.mp4",
    "originalFilename": "Bombay Kitchen.mov",
    "driveUrl": "https://drive.google.com/file/d/1U6wgy3DDsRqoqnnO1xLk8YTheU__7oUj/view?usp=drivesdk",
    "durationSeconds": 25.819,
    "width": 1000,
    "height": 562,
    "format": "landscape",
    "sample": true,
    "sampleKind": "provided",
    "client": "AI Video Samplings / video sample",
    "challenge": "This sample explores how an offer can become tangible through food detail, setting, and a clear next step.",
    "concept": "Warm restaurant imagery and close product views establish a recognizable hospitality mood before the closing brand screen.",
    "process": "The sequence moves between exterior context, food close-ups, a shared table, and a branded call to action.",
    "outcome": "A 26-second landscape sample combining food detail, hospitality atmosphere, and a final call to action.",
    "tools": []
  },
  {
    "id": "02",
    "slug": "ai-storytelling-reels",
    "title": "AI STORYTELLING / REELS",
    "category": "AI Storytelling",
    "year": 2026,
    "description": "One recognizable character. Two elegant settings. A story designed for a vertical screen.",
    "image": "/media/posters/ai-storytelling-reels.webp",
    "imageAlt": "A woman in a red dress in the supplied AI Storytelling Reels sample",
    "videoUrl": "/media/films/ai-storytelling-reels.mp4",
    "previewUrl": "/media/previews/ai-storytelling-reels.mp4",
    "originalFilename": "AI Storytelling Video Ad for Instagram Reels  Consistent AI Character.mp4",
    "driveUrl": "https://drive.google.com/file/d/1TA5cy2eUdQrJ26ZRJ6mtz9dXo1FNRSqQ/view?usp=drivesdk",
    "durationSeconds": 60.186,
    "width": 720,
    "height": 1280,
    "format": "portrait",
    "sample": true,
    "sampleKind": "provided",
    "client": "AI Video Samplings / video sample",
    "challenge": "Keep a central character visually recognizable while moving between locations, shot scales, and moods.",
    "concept": "A woman in a red dress connects the cool gallery setting with a warmer social scene. Portraits, wider compositions, and detail shots vary the view.",
    "process": "The visible edit alternates establishing frames, character movement, close portraits, and soft transitions between the two settings.",
    "outcome": "A one-minute portrait-format storytelling sample linking two settings through a recognizable central character.",
    "tools": []
  },
  {
    "id": "03",
    "slug": "documentary-video-05",
    "title": "DOCUMENTARY VIDEO 05",
    "category": "Documentary",
    "year": 2026,
    "description": "Portraiture, gathering scenes, and a warm visual treatment shape a documentary-style sequence.",
    "image": "/media/posters/documentary-video-05.webp",
    "imageAlt": "Sepia portraits, kora players and gathering scenes in Documentary Video 05",
    "videoUrl": "/media/films/documentary-video-05.mp4",
    "previewUrl": "/media/previews/documentary-video-05.mp4",
    "originalFilename": "Documentary Video  (5).mp4",
    "driveUrl": "https://drive.google.com/file/d/1sfOnxSkuaHrCecbRol9NrB2kzOeuKbzt/view?usp=drivesdk",
    "durationSeconds": 77.367,
    "width": 720,
    "height": 1280,
    "format": "portrait",
    "sample": true,
    "sampleKind": "provided",
    "client": "AI Video Samplings / video sample",
    "challenge": "Hold attention across a documentary-style sequence while preserving a cohesive visual atmosphere.",
    "concept": "Kora players, elders addressing groups, settlement scenes, and close portraits are brought together by a consistent warm treatment and on-screen captions.",
    "process": "The edit shifts between intimate portraits and wider social settings, using captions to accompany the changing visual subjects.",
    "outcome": "A 77-second portrait-format documentary-style sample with a warm palette, on-screen captions, intimate portraiture, and wider social scenes.",
    "tools": []
  },
  {
    "id": "04",
    "slug": "youtube-motion-graphic-02",
    "title": "YOUTUBE MOTION GRAPHIC 02",
    "category": "Motion Graphics",
    "year": 2026,
    "description": "A concise editorial explainer built from type, simple graphics, and a controlled visual rhythm.",
    "image": "/media/posters/youtube-motion-graphic-02.webp",
    "imageAlt": "A globe, pizza imagery and restrained type in YouTube Motion Graphic 02",
    "videoUrl": "/media/films/youtube-motion-graphic-02.mp4",
    "previewUrl": "/media/previews/youtube-motion-graphic-02.mp4",
    "originalFilename": "YouTube Short Motion Graphic 2.mp4",
    "driveUrl": "https://drive.google.com/file/d/1TCBwzG4ksuIZu_1YyutpAVnJ9Jiqz6N3/view?usp=drivesdk",
    "durationSeconds": 14.527,
    "width": 1280,
    "height": 720,
    "format": "landscape",
    "sample": true,
    "sampleKind": "provided",
    "client": "AI Video Samplings / video sample",
    "challenge": "Make a short explanation legible through a small set of visual elements and a clear editorial sequence.",
    "concept": "A globe, pizza imagery, gear outlines, and selective color accents support the typographic thread.",
    "process": "The visible sequence moves from an introductory line to visual examples and a concise closing statement, with a restrained gray, black, blue, and red palette.",
    "outcome": "A 15-second landscape motion-graphics sample that combines type, illustrative elements, and a restrained editorial palette.",
    "tools": []
  },
  {
    "id": "05",
    "slug": "popin-jobs",
    "title": "POPIN JOBS",
    "category": "AI Commercials",
    "year": 2026,
    "description": "A job-search story moves from the first-job question to an app-focused call to action.",
    "image": "/media/posters/popin-jobs.webp",
    "imageAlt": "A job-search app presentation and animated character in the Popin Jobs sample",
    "videoUrl": "/media/films/popin-jobs.mp4",
    "previewUrl": "/media/previews/popin-jobs.mp4",
    "originalFilename": "AI Video Ad for Popin Jobs Modern Job Search Platform Commercial.mov",
    "driveUrl": "https://drive.google.com/file/d/1sIhCXUcY6kdb6bUtmdxSTkRXMkz9A_zL/view?usp=drivesdk",
    "durationSeconds": 22.174,
    "width": 720,
    "height": 1280,
    "format": "portrait",
    "sample": true,
    "sampleKind": "provided",
    "client": "AI Video Samplings / video sample",
    "challenge": "Connect a relatable first-job moment with a specific product presentation and a visible next step.",
    "concept": "Character scenes, a phone interface, energetic graphics, and a closing Search / Apply / Connect message form the visual structure.",
    "process": "The edit introduces a job-search situation, shifts into app and feature imagery, then closes on a branded action screen.",
    "outcome": "A 22-second portrait-format app-commercial sample with character scenes, product presentation, and an explicit closing action.",
    "tools": []
  },
  {
    "id": "06",
    "slug": "ai-christmas-animation",
    "title": "AI CHRISTMAS ANIMATION",
    "category": "Animation",
    "year": 2026,
    "description": "A festive visual collage moves from an illustrated opening into lights, markets, and seasonal atmosphere.",
    "image": "/media/posters/ai-christmas-animation.webp",
    "imageAlt": "Christmas lights, festive markets and a cozy interior from the supplied seasonal animation sample",
    "videoUrl": "/media/films/ai-christmas-animation.mp4",
    "previewUrl": "/media/previews/ai-christmas-animation.mp4",
    "originalFilename": "AI CHRISTMAS  ANIMATED VIDEO.mp4",
    "driveUrl": "https://drive.google.com/file/d/1Rnl--g2Nx6t2JeqfqvzGtSgW3qX_D1aB/view?usp=drivesdk",
    "durationSeconds": 21.739,
    "width": 1000,
    "height": 562,
    "format": "landscape",
    "sample": true,
    "sampleKind": "provided",
    "client": "AI Video Samplings / video sample",
    "challenge": "Create a cohesive seasonal mood across illustrated, collage, and live-action-style imagery.",
    "concept": "A Christmas house illustration introduces a sequence of lights, photo arrangements, markets, ornaments, and a warm indoor scene.",
    "process": "The visible edit uses a festive color palette and transitions between animated elements, montage imagery, and seasonal details.",
    "outcome": "A 22-second landscape seasonal sample blending an illustrated opening, animated collage transitions, and festive montage imagery.",
    "tools": []
  },
  {
    "id": "07",
    "slug": "documentary-video-03",
    "title": "DOCUMENTARY VIDEO 03",
    "category": "Documentary",
    "year": 2026,
    "description": "An expansive visual sequence combines a central figure, group movement, terrain, and captioned storytelling.",
    "image": "/media/posters/documentary-video-03.webp",
    "imageAlt": "A central figure and expansive terrain in the warm-toned Documentary Video 03 sample",
    "videoUrl": "/media/films/documentary-video-03.mp4",
    "previewUrl": "/media/previews/documentary-video-03.mp4",
    "originalFilename": "Documentary Video  (3).mp4",
    "driveUrl": "https://drive.google.com/file/d/1meroYe46XC0koxIIBcYgYB3UATwAScpi/view?usp=drivesdk",
    "durationSeconds": 79.155,
    "width": 576,
    "height": 1024,
    "format": "portrait",
    "sample": true,
    "sampleKind": "provided",
    "client": "AI Video Samplings / video sample",
    "challenge": "Balance a central figure with wider group and landscape compositions in a documentary-style edit.",
    "concept": "Sepia-toned portraits, settlement views, marching groups, and broad terrain create a consistent sense of visual scale.",
    "process": "The edit changes shot scale while retaining a warm palette and on-screen captions across the sequence.",
    "outcome": "A 79-second portrait-format documentary-style sample using a cohesive sepia palette, captions, and shifts between a central figure and expansive group scenes.",
    "tools": []
  },
  {
    "id": "08",
    "slug": "ai-faceless-video",
    "title": "AI FACELESS VIDEO",
    "category": "Faceless Content",
    "year": 2026,
    "description": "Typography, human reactions, and neural imagery create an expressive faceless-content sample.",
    "image": "/media/posters/ai-faceless-video.webp",
    "imageAlt": "An illustrated brain and neural imagery in the supplied AI Faceless Video",
    "videoUrl": "/media/films/ai-faceless-video.mp4",
    "previewUrl": "/media/previews/ai-faceless-video.mp4",
    "originalFilename": "AI FACELESS VIDEO.mp4",
    "driveUrl": "https://drive.google.com/file/d/1Fq8pgCPg6mfNWiGMrv7TMviVeCkABmc7/view?usp=drivesdk",
    "durationSeconds": 63.232,
    "width": 1000,
    "height": 562,
    "format": "landscape",
    "sample": true,
    "sampleKind": "provided",
    "client": "AI Video Samplings / video sample",
    "challenge": "Build a visual thread through reaction shots, illustrative images, and typography without a presenter-led setup.",
    "concept": "The sequence moves from a Bad Trip title and distressed reactions toward neural imagery, expressive portraits, and a brighter closing mood.",
    "process": "The visible edit alternates large type, human close-ups, illustrative brain imagery, and environmental scenes.",
    "outcome": "A one-minute landscape sample combining large typography, human reaction shots, illustrative neural imagery, and environmental scenes.",
    "tools": []
  }
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
  description: 'Explore eight selected videos from Mayor Joe’s AI Video Samplings collection: commercials, AI storytelling, documentary, motion graphics, animation, and faceless content. Plan your next video project.',
  socialImage: '/images/mayor-joe.webp',
};
