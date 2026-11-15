'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, ChevronDown, MoveHorizontal, Quote } from 'lucide-react';
import { evidence, evidenceMethodology, industryQuote } from '@/data/evidence';
import { projects, studio, testimonials } from '@/data/content';
import { salesFAQs } from '@/data/sales';

export function ValueProposition() {
  const benefits = [
    { id: '01', title: 'Give them a reason to stop.', text: 'Lead with the product, the feeling, or the unexpected detail. Build an opening that makes the message clear from the first frame.' },
    { id: '02', title: 'Make the value easy to see.', text: 'Turn features into a story people can follow. Use purposeful pacing, product detail, and visual direction to make the offer feel tangible.' },
    { id: '03', title: 'Give attention somewhere to go.', text: 'Plan the next step into the creative: explore a product, visit a page, or start a conversation. The video and the call to action should tell the same story.' },
  ];
  return <section className="sales-value section-space container" aria-labelledby="sales-value-title">
    <div className="section-kicker"><p className="eyebrow"><span className="section-number">THE REAL BRIEF /</span> MAKE THE MESSAGE MATTER</p><span className="eyebrow muted">CREATIVE WITH A PURPOSE</span></div>
    <div className="section-heading reveal"><h2 id="sales-value-title" className="section-title">LOOK GOOD.<br/><span className="violet">SAY SOMETHING.</span></h2><p>Your audience should know what makes<br/>your offer worth a closer look.</p></div>
    <div className="sales-value-grid">{benefits.map(benefit => <article className="sales-value-card reveal" key={benefit.id}><span className="sales-value-kicker">/{benefit.id}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div>
    <a className="text-link" href="#offers">Find the right video for your goal <ArrowUpRight size={17}/></a>
  </section>;
}

export function IndustryEvidence() {
  return <section id="evidence" className="sales-evidence section-space" aria-labelledby="evidence-title"><div className="container">
    <div className="section-kicker"><p className="eyebrow"><span className="section-number">THE BIGGER PICTURE /</span> WHY VIDEO DESERVES A PLACE</p><span className="eyebrow muted">PUBLISHED INDUSTRY RESEARCH</span></div>
    <div className="sales-evidence-heading section-heading reveal"><h2 className="section-title" id="evidence-title">THE CASE FOR<br/><span className="outline-text">BETTER VIDEO.</span></h2><p>People use video to understand, assess,<br/>and decide. Here is what one survey found.</p></div>
    <div className="sales-stat-grid">{evidence.map(item => <article className="sales-stat-card reveal" key={item.id}><span className="eyebrow">{item.year} / CONSUMER SURVEY</span><strong>{item.value}</strong><p>{item.label}</p><small>{item.context}</small><a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">{item.sourceName} <ArrowUpRight size={12}/></a></article>)}</div>
    <details className="sales-evidence-method"><summary>Read the source and methodology <ChevronDown size={14}/></summary><p>{evidenceMethodology.description}</p><p>{evidenceMethodology.limitation} <a href={evidenceMethodology.sourceUrl} target="_blank" rel="noopener noreferrer">Read the original report ↗</a></p></details>
    <figure className="sales-industry-quote"><div><p className="eyebrow">INDUSTRY PERSPECTIVE</p><blockquote>“{industryQuote.text}.”</blockquote></div><figcaption><a href={industryQuote.sourceUrl} target="_blank" rel="noopener noreferrer">{industryQuote.attribution} <ArrowUpRight size={13}/></a><span>{industryQuote.context}</span></figcaption></figure>
  </div></section>;
}

const comparisonTabs = [
  { id: 'grade', title: 'Color & atmosphere' },
  { id: 'motion', title: 'Still to motion' },
  { id: 'message', title: 'Message & hook' },
];

export function TransformationShowcase() {
  const [tab, setTab] = useState('grade');
  const [amount, setAmount] = useState(52);
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => { if (tab !== 'motion') video.current?.pause(); }, [tab]);
  return <section id="transformations" className="sales-compare section-space" aria-labelledby="compare-title"><div className="container">
    <div className="section-kicker"><p className="eyebrow"><span className="section-number">THE TRANSFORMATION /</span> LOOK CLOSER</p><span className="eyebrow muted">INTERACTIVE CREATIVE STUDIES</span></div>
    <div className="section-heading reveal"><h2 className="section-title" id="compare-title">SAME IDEA.<br/><span className="violet">STRONGER EXECUTION.</span></h2><p>Explore how color, movement, and a clearer<br/>message can change the creative.</p></div>
    <div className="sales-compare-tabs" role="tablist" aria-label="Explore creative transformations">{comparisonTabs.map((item, i) => <button type="button" role="tab" key={item.id} id={`compare-tab-${item.id}`} data-compare-tab={item.id} aria-selected={tab === item.id} aria-controls={`compare-panel-${item.id}`} tabIndex={tab === item.id ? 0 : -1} className={tab === item.id ? 'active' : ''} onClick={() => setTab(item.id)} onKeyDown={event => {
      let next: number | undefined;
      if (event.key === 'ArrowRight') next = (i + 1) % comparisonTabs.length;
      if (event.key === 'ArrowLeft') next = (i + comparisonTabs.length - 1) % comparisonTabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = comparisonTabs.length - 1;
      if (next !== undefined) { event.preventDefault(); setTab(comparisonTabs[next].id); document.getElementById(`compare-tab-${comparisonTabs[next].id}`)?.focus(); }
    }}>{String(i + 1).padStart(2, '0')}<span>{item.title}</span><ArrowUpRight size={15}/></button>)}</div>
    <div role="tabpanel" id="compare-panel-grade" data-compare-panel="grade" aria-labelledby="compare-tab-grade" hidden={tab !== 'grade'} tabIndex={0}>
      <div className="sales-compare-grid"><div className="sales-compare-story"><span className="sales-sample-label">ILLUSTRATIVE COLOR STUDY</span><h3>Change the feeling.<br/>Keep the frame.</h3><p>A considered grade can make a scene feel calmer, sharper, warmer, or more cinematic. Drag the divider to compare two treatments.</p><ul><li><Check size={14}/> A more deliberate atmosphere</li><li><Check size={14}/> A consistent visual direction</li><li><Check size={14}/> Color that supports the story</li></ul><p className="sales-compare-caption">One stock photograph with a CSS color treatment. This is a demonstration, not a client before-and-after result.</p></div><div className="comparison-wrap"><div className="comparison"><img className="comparison-base" src="/images/comparison.webp" alt="Original stock photograph of layered mountain silhouettes" width="1400" height="875" loading="lazy"/><img className="comparison-grade" src="/images/comparison.webp" alt="The same mountains with a cinematic color treatment" width="1400" height="875" loading="lazy" style={{ clipPath: `inset(0 ${100 - amount}% 0 0)` }}/><span className="comparison-label before">CINEMATIC TREATMENT</span><span className="comparison-label after">ORIGINAL</span><div className="comparison-line" style={{ left: `${amount}%` }}><span><MoveHorizontal size={20}/></span></div><input type="range" min="3" max="97" value={amount} onChange={event => setAmount(Number(event.target.value))} aria-label="Compare original and cinematic color treatment" aria-valuetext={`${amount} percent cinematic treatment`}/></div><div className="comparison-foot"><span>DRAG TO COMPARE</span><span>STOCK REFERENCE / COLOR STUDY</span></div></div></div>
    </div>
    <div role="tabpanel" id="compare-panel-motion" data-compare-panel="motion" aria-labelledby="compare-tab-motion" hidden={tab !== 'motion'} tabIndex={0}>
      <div className="sales-motion-pair"><figure><span className="sales-sample-label">BEFORE / REFERENCE STILL</span><img src="/images/project-objects-in-motion.webp" alt="Headphones in a still product reference photograph" width="1400" height="875" loading="lazy"/><figcaption>A single frame establishes the object, lighting, and composition.</figcaption></figure><figure><span className="sales-sample-label">AFTER / MOTION REFERENCE</span><video ref={video} controls playsInline preload="none" poster="/images/project-objects-in-motion.webp" aria-label="Silent animated stock reference of headphones"><source src="/videos/objects-in-motion.mp4" type="video/mp4"/></video><figcaption>Press play to explore a short pan-and-zoom motion study.</figcaption></figure></div><p className="sales-compare-caption">Animated stock imagery demonstrating a motion direction. This clip is not a completed AI product film or a client deliverable.</p>
    </div>
    <div role="tabpanel" id="compare-panel-message" data-compare-panel="message" aria-labelledby="compare-tab-message" hidden={tab !== 'message'} tabIndex={0}>
      <div className="sales-message-pair"><article><span className="eyebrow">BEFORE / A GENERIC INTRODUCTION</span><blockquote>“We make videos for businesses.”</blockquote><p>It names the service, but leaves the audience to work out why it matters.</p></article><article><span className="eyebrow">AFTER / A CLEARER REASON TO CARE</span><blockquote>“Give your next launch a story worth watching—and a next step worth taking.”</blockquote><p>A more specific goal, a useful benefit, and a direction for the call to action.</p></article></div><p className="sales-compare-caption">Illustrative copywriting example. Test different hooks against your own audience; no lift or sales result is claimed.</p>
    </div>
    <a className="text-link" href="#offers">Choose a direction for your video <ArrowUpRight size={17}/></a>
  </div></section>;
}

export function CaseStudyPreview() {
  const selected = ['bombay-kitchen','ai-storytelling-reels','documentary-video-05'].map(slug => projects.find(project => project.slug === slug)).filter((project): project is (typeof projects)[number] => Boolean(project));
  return <section id="case-studies" className="sales-cases section-space container" aria-labelledby="case-title"><div className="section-kicker"><p className="eyebrow"><span className="section-number">A CLOSER LOOK /</span> DECISIONS BEHIND THE FRAME</p><span className="eyebrow muted">SELECTED FILM NOTES</span></div><div className="section-heading reveal"><h2 className="section-title" id="case-title">A STORY.<br/><span className="outline-text">A POINT OF VIEW.</span></h2><p>Explore the visual language and editing<br/>choices in the selected samples.</p></div><p className="sales-section-note">A closer look at supplied video samples, with links to the complete films and original files.</p><div className="sales-case-grid">{selected.map(project => <article className="sales-case-card reveal" key={project.slug}><div className="sales-case-image"><img src={project.image} alt={project.imageAlt} width={project.width || 1400} height={project.height || 875} loading="lazy"/><span className="sales-sample-label">{project.category}</span></div><div className="sales-case-body"><span className="eyebrow">SELECTED VIDEO SAMPLE</span><h3>{project.title}</h3><dl className="sales-case-steps"><dt>On screen</dt><dd>{project.description}</dd><dt>Visual direction</dt><dd>{project.concept}</dd><dt>Editing focus</dt><dd>{project.process}</dd></dl><a className="text-link" href={`/projects/${project.slug}/`}>Watch film & read notes <ArrowUpRight size={16}/></a></div></article>)}</div><a className="button button-outline" href="#offers">Find a direction for your video <ArrowUpRight size={16}/></a></section>;
}

export function ProofTestimonials() {
  const approved = testimonials.filter(item => item.approved === true);
  if (!approved.length) return null;
  return <section id="client-stories" className="sales-testimonials section-space container" aria-labelledby="client-stories-title"><div className="section-kicker"><p className="eyebrow">CLIENT STORIES</p><span className="eyebrow muted">APPROVED CLIENT FEEDBACK</span></div><h2 className="section-title" id="client-stories-title">LET THE WORK<br/><span className="violet">DO THE TALKING.</span></h2><div className="sales-testimonial-grid">{approved.map((item, i) => <figure className="sales-testimonial-card" key={`${item.name}-${i}`}><Quote size={27} strokeWidth={1}/>{item.logoUrl && <img src={item.logoUrl} alt={`${item.company || item.name} approved logo`} loading="lazy"/>}<blockquote>“{item.quote}”</blockquote><figcaption><strong>{item.name}</strong><span>{[item.role, item.company].filter(Boolean).join(' / ')}</span></figcaption>{item.projectUrl && <a className="text-link" href={item.projectUrl}>View the project <ArrowUpRight size={14}/></a>}{item.videoUrl && <video controls preload="none" src={item.videoUrl} aria-label={`${item.name} video testimonial`}/>}</figure>)}</div></section>;
}

export function SalesFAQ() {
  return <section id="questions" className="sales-faq section-space container" aria-labelledby="questions-title"><div><p className="eyebrow">A FEW THINGS YOU MIGHT BE WONDERING</p><h2 className="section-title" id="questions-title">CLEAR BEFORE<br/><span className="violet">WE CREATE.</span></h2><p>Choose the goal first. Agree the scope, rights, timing, and investment before production begins.</p><a className="text-link" href="#offers">Build my project brief <ArrowUpRight size={16}/></a></div><div className="sales-faq-list">{salesFAQs.map(item => <details key={item.question}><summary>{item.question}<ChevronDown size={17}/></summary><p>{item.answer}</p></details>)}</div></section>;
}

export function DecisionSummary() {
  return <div className="sales-close"><p className="eyebrow">A SIMPLE WAY TO GET STARTED</p><h3>YOUR IDEA.<br/>A CLEAR NEXT STEP.</h3><ol><li><strong>01</strong><span>Choose the goal and the video direction.</span></li><li><strong>02</strong><span>Build a brief with the formats you need.</span></li><li><strong>03</strong><span>Agree scope, timing, and payment before production.</span></li></ol><p>Tell me what you want the viewer to feel, understand, and do next.</p><blockquote>“Human imagination. Every frame with purpose.”<cite>{studio.name} / CREATIVE APPROACH</cite></blockquote></div>;
}

export function PurchaseBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById('home');
    const contact = document.getElementById('contact');
    if (!hero || !contact) return;
    let heroInView = true;
    let contactInView = false;
    const update = () => setVisible(!heroInView && !contactInView);
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.target === hero) heroInView = entry.isIntersecting; if (entry.target === contact) contactInView = entry.isIntersecting; }); update(); }, { threshold: 0.05 });
    observer.observe(hero); observer.observe(contact);
    return () => observer.disconnect();
  }, []);
  return <aside className={`sales-purchase-bar${visible ? ' is-visible' : ''}`} hidden={!visible} aria-label="Plan your video project"><div><span>MAYOR JOE / YOUR NEXT VIDEO</span><strong>Start with the goal. Build the right brief.</strong></div><a className="button button-primary" href="#offers">Choose my package <ArrowRight size={15}/></a></aside>;
}
