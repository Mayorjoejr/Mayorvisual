import type { Metadata } from 'next';
import { ArrowDownToLine, ArrowLeft, Check } from 'lucide-react';
import Brand from '@/components/Brand';

export const metadata:Metadata={title:'Download your portfolio',description:'Download the complete Mayor Joe portfolio as one self-contained HTML file.',alternates:{canonical:'/download/'},robots:{index:false,follow:false}};

export default function DownloadPage(){
  return <main id="main" className="download-page">
    <a href="/" aria-label="Mayor Joe home"><Brand/></a>
    <div className="download-content">
      <p className="eyebrow"><span className="status-dot"/> READY TO TAKE WITH YOU</p>
      <h1>YOUR PORTFOLIO.<br/><span>ONE HTML FILE.</span></h1>
      <p className="download-intro">The complete portfolio in one portable file, with compact videos embedded for offline playback. No installation or server needed.</p>
      <a className="button button-primary download-file" href="/downloads/mayor-joe.html" download="mayor-joe.html"><ArrowDownToLine size={18}/> Download HTML <span>Single file</span></a>
      <ul>{['Embedded images, fonts, and videos','Eight selected videos and their film notes','Quick-play gallery, filters, and project planner'].map(item=><li key={item}><Check size={14}/>{item}</li>)}</ul>
      <p className="download-note">After downloading, double-click <strong>mayor-joe.html</strong> to open it.<br/>Compact video edition. Full-quality films are available in the online portfolio and Drive archive. The inquiry form saves briefs locally.</p>
      <a href="/" className="text-link"><ArrowLeft size={15}/> Back to the website</a>
    </div>
    <p className="download-footer">MAYOR JOE — WHERE IMAGINATION BECOMES MOTION.</p>
  </main>;
}
