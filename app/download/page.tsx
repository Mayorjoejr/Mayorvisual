import type { Metadata } from 'next';
import { ArrowDownToLine, ArrowLeft, Check } from 'lucide-react';
import Brand from '@/components/Brand';

export const metadata:Metadata={title:'Download your portfolio',description:'Download the complete Frame Shift portfolio as one self-contained HTML file.',alternates:{canonical:'/download/'},robots:{index:false,follow:false}};

export default function DownloadPage(){
  return <main id="main" className="download-page">
    <a href="/" aria-label="Frame Shift home"><Brand/></a>
    <div className="download-content">
      <p className="eyebrow"><span className="status-dot"/> READY TO TAKE WITH YOU</p>
      <h1>YOUR PORTFOLIO.<br/><span>ONE HTML FILE.</span></h1>
      <p className="download-intro">The complete cinematic experience, ready to open in your browser. No installation, server, or internet connection needed.</p>
      <a className="button button-primary download-file" href="/downloads/frame-shift.html" download="frame-shift.html"><ArrowDownToLine size={18}/> Download HTML <span>6.4 MB</span></a>
      <ul>{['Embedded images, fonts, and videos','All six project case studies','Filters, comparison slider, and mobile navigation'].map(item=><li key={item}><Check size={14}/>{item}</li>)}</ul>
      <p className="download-note">After downloading, double-click <strong>frame-shift.html</strong> to open it.<br/>The inquiry form prepares a local brief; it does not send a message.</p>
      <a href="/" className="text-link"><ArrowLeft size={15}/> Back to the website</a>
    </div>
    <p className="download-footer">FRAME / SHIFT — WHERE IMAGINATION BECOMES MOTION.</p>
  </main>;
}
