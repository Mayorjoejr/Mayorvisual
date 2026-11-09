import type { Metadata, Viewport } from 'next';
import './fonts.css';
import './globals.css';
import { seo, studio } from '@/data/content';
const origin=seo.siteUrl;
export const metadata: Metadata={metadataBase:new URL(origin),title:{default:seo.title,template:`%s — ${studio.name}`},description:seo.description,alternates:{canonical:'/'},openGraph:{type:'website',title:seo.title,description:seo.description,images:[{url:seo.socialImage,width:1400,height:875,alt:'Frame Shift cinematic portfolio — Earth from orbit'}]},twitter:{card:'summary_large_image'},robots:{index:true,follow:true},icons:{icon:'/favicon.svg'}};
export const viewport: Viewport={themeColor:'#08080d',width:'device-width',initialScale:1};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) {return <html lang="en"><body id="top"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:studio.name,url:seo.siteUrl,description:seo.description}).replace(/</g,'\\u003c')}}/><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;}
