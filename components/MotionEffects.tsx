'use client';

import { Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function MotionEffects() {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const progress = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const stopped = useRef(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const value = paused || reduced;
    stopped.current = value;
    document.documentElement.classList.toggle('motion-paused', value);
    if (value) document.querySelectorAll<HTMLVideoElement>('.hero-media video, .project-image video').forEach(video => video.pause());
    window.dispatchEvent(new CustomEvent('portfolio-motion-change', { detail: value }));
    return () => { document.documentElement.classList.remove('motion-paused'); };
  }, [paused, reduced]);

  useEffect(() => {
    let scrollFrame = 0;
    let pointerFrame = 0;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateProgress = () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        if (progress.current) progress.current.style.transform = `scaleX(${height > 0 ? Math.min(window.scrollY / height, 1) : 0})`;
        document.documentElement.classList.toggle('page-scrolled', window.scrollY > 40);
      });
    };
    const resetPortrait = () => document.querySelectorAll<HTMLElement>('.hero-portrait-panel').forEach(panel => {
      panel.style.setProperty('--tilt-x', '0deg'); panel.style.setProperty('--tilt-y', '0deg');
    });
    const pointer = (event: PointerEvent) => {
      if (stopped.current || !finePointer.matches || event.pointerType === 'touch') return;
      cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        if (cursor.current) { cursor.current.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`; cursor.current.style.opacity = '1'; }
        const target = event.target instanceof Element ? event.target : null;
        const panel = target?.closest<HTMLElement>('.hero-portrait-panel');
        resetPortrait();
        if (panel) {
          const bounds = panel.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width;
          const y = (event.clientY - bounds.top) / bounds.height;
          panel.style.setProperty('--tilt-x', `${(0.5 - y) * 3}deg`);
          panel.style.setProperty('--tilt-y', `${(x - 0.5) * 3}deg`);
          panel.style.setProperty('--pointer-x', `${x * 100}%`);
          panel.style.setProperty('--pointer-y', `${y * 100}%`);
        }
        const surface = target?.closest<HTMLElement>('.service, .project-card');
        if (surface) {
          const bounds = surface.getBoundingClientRect();
          surface.style.setProperty('--mouse-x', `${(event.clientX - bounds.left) / bounds.width * 100}%`);
          surface.style.setProperty('--mouse-y', `${(event.clientY - bounds.top) / bounds.height * 100}%`);
        }
      });
    };
    const leave = () => { resetPortrait(); if (cursor.current) cursor.current.style.opacity = '0'; };
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    window.addEventListener('pointermove', pointer, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave);
    updateProgress();
    return () => {
      cancelAnimationFrame(scrollFrame); cancelAnimationFrame(pointerFrame);
      window.removeEventListener('scroll', updateProgress); window.removeEventListener('resize', updateProgress);
      window.removeEventListener('pointermove', pointer); document.documentElement.removeEventListener('pointerleave', leave);
      resetPortrait();
    };
  }, []);

  return <>
    <div className="scroll-progress" aria-hidden="true"><div ref={progress} className="scroll-progress-fill"/></div>
    <div ref={cursor} className="ambient-cursor" aria-hidden="true"/>
    <button type="button" className="motion-toggle" onClick={() => setPaused(value => !value)} aria-pressed={paused || reduced} disabled={reduced} aria-label={reduced ? 'Reduced motion is enabled in your system settings' : paused ? 'Resume ambient animations' : 'Pause ambient animations'}>
      {paused || reduced ? <Play size={12}/> : <Pause size={12}/>}<span className="motion-toggle-label">{reduced ? 'Reduced motion' : paused ? 'Resume motion' : 'Pause motion'}</span>
    </button>
  </>;
}
