'use client';
import { useRef } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Brand from './Brand';
import { studio } from '@/data/content';
const links = [['Packages','offers'],['The Work','work'],['Process','process'],['About','about']];
export default function Header({ detail = false }: {detail?:boolean}) {
  const menu = useRef<HTMLDialogElement>(null);
  const href = (id:string) => `${detail?'/':''}#${id}`;
  return <>
    <header className="header"><a href={detail?'/':'#home'} aria-label={`${studio.name} home`} className="brand-link"><Brand/></a><nav aria-label="Main navigation" className="desktop-nav">{links.map(([title,id])=><a key={id} href={href(id)}>{title}</a>)}</nav><a href={href('offers')} className="nav-cta">Plan my video <ArrowUpRight size={15}/></a><button type="button" className="menu-toggle" onClick={()=>menu.current?.showModal()} aria-label="Open navigation"><Menu/></button></header>
    <dialog ref={menu} aria-label="Site navigation" className="mobile-nav"><div className="mobile-nav-top"><Brand/><button onClick={()=>menu.current?.close()} aria-label="Close navigation"><X/></button></div><nav aria-label="Mobile navigation">{[['Home','home'],...links,['Contact','contact']].map(([title,id],i)=><a key={id} href={href(id)} onClick={()=>menu.current?.close()}><small>0{i+1}</small>{title}<ArrowUpRight/></a>)}</nav><p>{studio.name.toUpperCase()} / {studio.tagline.toUpperCase()}</p></dialog>
  </>;
}
