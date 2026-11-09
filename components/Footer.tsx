import { ArrowUp } from 'lucide-react';
import Brand from './Brand';
import { contacts, studio } from '@/data/content';
export default function Footer() {
  const social = Object.entries(contacts).filter(([key,value]) => ['instagram','behance','linkedin','youtube','vimeo'].includes(key)&&value);
  return <footer className="footer"><div className="footer-main"><a href="/#home" aria-label={`${studio.name} home`}><Brand/></a><p>{studio.tagline}</p><a className="back-top" href="#top">Back to top <ArrowUp size={16}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {studio.name}</span><nav aria-label="Footer navigation"><a href="/#work">Work</a><a href="/#about">About</a><a href="/#contact">Contact</a>{contacts.email&&<a href={`mailto:${contacts.email}`}>{contacts.email}</a>}{social.map(([name,url])=><a key={name} href={url} target="_blank" rel="noopener noreferrer">{name}</a>)}</nav><span>INDEPENDENT SPIRIT. LIMITLESS POSSIBILITIES.</span></div></footer>;
}
