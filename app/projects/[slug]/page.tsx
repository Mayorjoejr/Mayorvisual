import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Play } from 'lucide-react';
import { projects, studio, collection } from '@/data/content';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MediaPlayer from '@/components/MediaPlayer';
import ProjectCard from '@/components/ProjectCard';

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  return { title: project?.title, description: project?.description, alternates: { canonical: `/projects/${slug}/` }, openGraph: { title: project ? `${project.title} — ${studio.name}` : studio.name, description: project?.description, images: project ? [{ url: project.image, alt: project.imageAlt }] : [] } };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  if (!project) notFound();
  const seconds = Math.floor(project.durationSeconds || 0);
  const duration = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  return <><Header detail/><main id="main" className="project-page curated-detail"><div className="container">
    <a href="/#work" className="text-link back-work"><ArrowLeft size={16}/> Back to selected films</a>
    <div className="project-title-row"><div><p className="eyebrow">{project.category} <span>/ {project.year}</span></p><h1 className="display">{project.title}</h1></div><span className="outline-tag">SELECTED VIDEO SAMPLE</span></div>
    <p className="project-intro">{project.description}</p>
    <div className="film-meta"><span><Play size={12}/> {duration}</span><span>{project.format === 'portrait' ? 'VERTICAL / 9:16' : 'WIDESCREEN / 16:9'}</span><span>{project.width} × {project.height}</span>{project.driveUrl && <a href={project.driveUrl} target="_blank" rel="noopener noreferrer">Open original on Drive <ArrowUpRight size={13}/></a>}</div>
    <MediaPlayer project={project}/>
    <p className="project-filename">SOURCE FILE / {project.originalFilename}</p>
    <p className="project-source-note">Selected from the {collection.title} collection. Brand names identify the sample subject and do not establish a client relationship.</p>
    <div className="case-body"><aside><p className="eyebrow">FILM NOTES</p><dl><dt>Collection</dt><dd>{collection.title}</dd><dt>Discipline</dt><dd>{project.category}</dd><dt>Format</dt><dd>{project.format === 'portrait' ? 'Vertical video' : 'Widescreen video'}</dd><dt>Duration</dt><dd>{duration}</dd>{project.tools.length > 0 && <><dt>Creative tools</dt><dd>{project.tools.join(', ')}</dd></>}</dl><a className="text-link" href={collection.folderUrl} target="_blank" rel="noopener noreferrer">View the full archive <ArrowUpRight size={15}/></a></aside><div className="case-story">
      <section><span>01 / THE SAMPLE</span><h2>The story on screen.</h2><p>{project.challenge}</p></section>
      <section><span>02 / VISUAL DIRECTION</span><h2>A look with a point of view.</h2><p>{project.concept}</p></section>
      <section><span>03 / EDITING NOTES</span><h2>How the sequence takes shape.</h2><p>{project.process}</p></section>
      <section><span>04 / YOUR NEXT STORY</span><h2>From inspiration to your brief.</h2><p>{project.outcome}</p></section>
    </div></div>
    <section className="related-work"><div className="section-heading"><h2>KEEP WATCHING<span className="violet">.</span></h2><a href="/#work" className="text-link">All selected films <ArrowUpRight size={16}/></a></div><div className="related-grid">{projects.filter(item => item.slug !== slug).slice(0, 2).map((item, index) => <ProjectCard key={item.slug} project={item} index={index}/>)}</div></section>
    <section className="project-contact"><p className="eyebrow">YOUR STORY, NEXT.</p><h2>LET’S MAKE<br/>SOMETHING <span>REAL.</span></h2><a className="button button-primary" href="/#offers">Plan your next video <ArrowUpRight size={18}/></a></section>
  </div></main><Footer/></>;
}
