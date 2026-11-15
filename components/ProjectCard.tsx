'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Play, X } from 'lucide-react';
import type { Project } from '@/data/content';
import MediaPlayer from './MediaPlayer';

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const portrait = project.format === 'portrait';
  const seconds = Math.floor(project.durationSeconds || 0);
  const duration = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  useEffect(() => {
    const stop = (event: Event) => { if ((event as CustomEvent<boolean>).detail) setActive(false); };
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reduce = () => { if (query.matches) setActive(false); };
    window.addEventListener('portfolio-motion-change', stop); query.addEventListener('change', reduce);
    return () => { window.removeEventListener('portfolio-motion-change', stop); query.removeEventListener('change', reduce); };
  }, []);
  const start = () => {
    if (!open && !document.documentElement.classList.contains('motion-paused') && window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches && !(navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData) setActive(true);
  };
  const watch = () => { setActive(false); setOpen(true); dialog.current?.showModal(); };
  const close = () => { dialog.current?.close(); setOpen(false); };
  return <article className={`project-card curated-project ${portrait ? 'portrait' : 'landscape'}`} data-project={project.slug} data-category={project.category} onMouseEnter={start} onMouseLeave={() => setActive(false)} onBlur={() => setActive(false)}>
    <button type="button" className="project-image" data-watch-project={project.slug} onClick={watch} aria-label={`Watch ${project.title}, ${project.category}, ${duration}`}>
      {portrait && <img className="project-poster-backdrop" src={project.image} alt="" aria-hidden="true" width={project.width || 720} height={project.height || 1280} loading="lazy"/>}
      <img className="project-main-poster" src={project.image} alt={project.imageAlt} width={project.width || 1400} height={project.height || 875} loading="lazy"/>
      {active && (project.previewUrl || project.videoUrl) && <video ref={video} src={project.previewUrl || project.videoUrl} muted autoPlay loop playsInline preload="none" onCanPlay={() => { if (!document.documentElement.classList.contains('motion-paused') && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) video.current?.play().catch(() => {}); else video.current?.pause(); }} aria-hidden="true"/>}
      <span className="project-number">/{String(index + 1).padStart(2, '0')}</span><span className="project-type-pill">{portrait ? 'VERTICAL FILM' : 'WIDESCREEN FILM'}</span><span className="project-play"><Play size={17} fill="currentColor"/></span><span className="project-hover-label">Watch film <ArrowUpRight size={18}/></span>{seconds > 0 && <span className="project-duration">{duration}</span>}
    </button>
    <div className="project-info"><div><p className="project-category">{project.category}<span>/ {project.year}</span></p><h3><a data-project-details={project.slug} href={`/projects/${project.slug}/`}>{project.title}</a></h3></div><a className="project-detail-link" href={`/projects/${project.slug}/`} aria-label={`Read film notes for ${project.title}`}><ArrowUpRight size={27} strokeWidth={1.3}/></a></div>
    <p className="project-description">{project.description}</p>
    <dialog ref={dialog} className="film-lightbox" data-project-dialog={project.slug} aria-label={`${project.title} video player`} onClose={() => setOpen(false)} onCancel={() => setOpen(false)} onClick={event => { if (event.target === event.currentTarget) close(); }}>
      <div className="film-lightbox-shell"><header className="film-lightbox-header"><div><span className="eyebrow">{project.category} / {duration}</span><h2>{project.title}</h2></div><button type="button" data-close-film={project.slug} onClick={close} aria-label={`Close ${project.title}`}><X size={24}/></button></header><div className="film-lightbox-media" data-player-for={project.slug}>{open && <MediaPlayer project={project} autoPlay/>}</div><footer className="film-lightbox-footer"><span>SELECTED SAMPLE / {project.originalFilename}</span><div><a href={`/projects/${project.slug}/`}>Film notes <ArrowUpRight size={14}/></a>{project.driveUrl && <a href={project.driveUrl} target="_blank" rel="noopener noreferrer">Open original <ArrowUpRight size={14}/></a>}</div></footer></div>
    </dialog>
  </article>;
}
