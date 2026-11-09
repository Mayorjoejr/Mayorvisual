import { studio } from '@/data/content';
export default function Brand() {
  return <span className="brand"><span className="brand-monogram" aria-hidden="true"><svg viewBox="0 0 40 40" width="32" height="32" fill="none"><path d="M5 28V12l8 9 8-9v16M26 12h9v10c0 5-3 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" strokeLinejoin="miter"/></svg></span><span className="brand-wordmark">{studio.name}</span><span className="brand-dot" aria-hidden="true">.</span></span>;
}
