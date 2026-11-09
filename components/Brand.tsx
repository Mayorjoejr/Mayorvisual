import { studio } from '@/data/content';
export default function Brand() {
  const parts=studio.name.split('/');
  return <span className="brand"><svg aria-hidden="true" viewBox="0 0 30 30" width="28" height="28"><path d="M2 10V2h8M20 2h8v8M28 20v8h-8M10 28H2v-8" fill="none" stroke="currentColor" strokeWidth="3"/><path d="m11 10 9 5-9 5z" fill="currentColor"/></svg><span>{parts.map((part,i)=><span key={i}>{i>0&&<span className="brand-slash">/</span>}{part.trim()}</span>)}</span></span>;
}
