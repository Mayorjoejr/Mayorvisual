'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import type { Project } from '@/data/content';
export default function ProjectCard({ project, index=0 }: {project:Project;index?:number}) {
  const [active,setActive] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  useEffect(()=>{
    const stop=(event:Event)=>{if((event as CustomEvent<boolean>).detail)setActive(false);};
    const query=window.matchMedia('(prefers-reduced-motion: reduce)');
    const reduce=()=>{if(query.matches)setActive(false);};
    window.addEventListener('portfolio-motion-change',stop);query.addEventListener('change',reduce);
    return ()=>{window.removeEventListener('portfolio-motion-change',stop);query.removeEventListener('change',reduce);};
  },[]);
  const start = () => {if(!document.documentElement.classList.contains('motion-paused')&&window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches && !(navigator as Navigator & {connection?:{saveData?:boolean}}).connection?.saveData) setActive(true);};
  return <a href={`/projects/${project.slug}/`} className="project-card" onMouseEnter={start} onMouseLeave={()=>setActive(false)} onBlur={()=>setActive(false)} aria-label={`View ${project.title}, ${project.category}${project.sample?", sample project":""}`}>
    <div className="project-image"><img src={project.image} alt={project.imageAlt} width="1400" height="875" loading="lazy"/>{active&&project.videoUrl&&<video ref={video} src={project.videoUrl} muted autoPlay loop playsInline preload="none" onCanPlay={()=>{if(!document.documentElement.classList.contains('motion-paused')&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches)video.current?.play().catch(()=>{});else video.current?.pause();}} aria-hidden="true"/>}<span className="project-number">/{String(index+1).padStart(2,'0')}</span>{project.sample&&<span className="sample-pill">SAMPLE CONCEPT</span>}<span className="project-play"><Play size={17} fill="currentColor"/></span><span className="project-hover-label">View project <ArrowUpRight size={18}/></span></div>
    <div className="project-info"><div><p className="project-category">{project.category} <span>/ {project.year}</span></p><h3>{project.title}</h3></div><ArrowUpRight size={27} strokeWidth={1.3}/></div><p className="project-description">{project.description}</p>
  </a>;
}
