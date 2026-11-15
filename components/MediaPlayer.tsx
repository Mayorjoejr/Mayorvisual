'use client';
import { useState } from 'react';
import type { Project } from '@/data/content';

export default function MediaPlayer({ project, autoPlay = false }: { project: Project; autoPlay?: boolean }) {
  const [failed, setFailed] = useState(false);
  const portrait = project.format === 'portrait';
  if (project.embedUrl) return <div className="embed-player"><iframe src={project.embedUrl} title={`${project.title} video`} loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/></div>;
  if (project.videoUrl) return <div className={`media-stage ${portrait ? 'is-portrait' : 'is-landscape'}`}><video className="detail-player" controls autoPlay={autoPlay} playsInline preload="none" poster={project.image} onError={() => setFailed(true)} aria-label={`${project.title} video sample`}><source src={project.videoUrl}/>{project.captionsUrl && <track kind="captions" src={project.captionsUrl} srcLang="en" label="English" default/>}Your browser does not support this video. <a href={project.driveUrl || project.videoUrl}>Open the video</a>.</video>{failed && <p className="video-fallback" role="status">This player could not load the film. <a href={project.driveUrl || project.videoUrl} target="_blank" rel="noopener noreferrer">Open the original video ↗</a></p>}</div>;
  return <div className="missing-video"><img src={project.image} alt={project.imageAlt}/>{project.driveUrl && <a href={project.driveUrl} target="_blank" rel="noopener noreferrer">Watch the original on Drive ↗</a>}</div>;
}
