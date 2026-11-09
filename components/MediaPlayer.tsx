'use client';
import type { Project } from '@/data/content';
export default function MediaPlayer({ project }: {project:Project}) {
  if(project.embedUrl) return <div className="embed-player"><iframe src={project.embedUrl} title={`${project.title} video`} loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/></div>;
  if(project.videoUrl) return <video className="detail-player" controls playsInline preload="none" poster={project.image} aria-label={`${project.title}${project.sample?' stock reference motion preview':''}`}><source src={project.videoUrl}/>{project.captionsUrl&&<track kind="captions" src={project.captionsUrl} srcLang="en" label="English" default/>}Your browser does not support this video. <a href={project.videoUrl}>Download video</a>.</video>;
  return <div className="missing-video"><img src={project.image} alt={project.imageAlt}/><p>Concept frame · Film coming soon</p></div>;
}
