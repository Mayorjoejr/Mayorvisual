'use client';

import { useId, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { deliveryFormats, packageGoals, packages, type OfferPackage } from '@/data/sales';

const goalPackage: Record<string, string> = {
  'Sell a product': 'product-launch',
  'Launch a brand': 'signature-film',
  'Grow an audience': 'social-campaign',
};

function approvedCheckout(offer: OfferPackage) {
  if (!offer.checkoutApproved || !offer.checkoutUrl.trim() || !offer.priceLabel.trim()) return '';
  try {
    const url = new URL(offer.checkoutUrl);
    return url.protocol === 'https:' ? url.toString() : '';
  } catch {
    return '';
  }
}

export default function OfferBuilder() {
  const formatHint = useId();
  const [goal, setGoal] = useState<string>('Grow an audience');
  const [packageId, setPackageId] = useState('social-campaign');
  const [formats, setFormats] = useState<string[]>(['9:16']);
  const [formatNotice, setFormatNotice] = useState('');
  const selected = packages.find(offer => offer.id === packageId) || packages[0];
  const checkout = approvedCheckout(selected);

  function chooseGoal(next: string) {
    setGoal(next);
    const recommendation = goalPackage[next];
    if (packages.some(offer => offer.id === recommendation)) setPackageId(recommendation);
  }

  function toggleFormat(format: string) {
    if (formats.includes(format)) {
      if (formats.length === 1) {
        setFormatNotice('Keep at least one delivery format selected.');
        return;
      }
      setFormats(current => current.filter(value => value !== format));
    } else {
      setFormats(current => [...current, format]);
    }
    setFormatNotice('');
  }

  function buildBrief() {
    const description = [
      `Project starting point: ${selected.name}`,
      `My goal: ${goal}`,
      `Delivery formats: ${formats.join(', ')}`,
      '',
      'Scope to discuss:',
      ...selected.inclusions.map(item => `- ${item}`),
      '',
      'My idea, audience and message:',
    ].join('\n');
    window.dispatchEvent(new CustomEvent('project-request', {
      detail: {
        projectType: selected.inquiryType,
        packageName: selected.name,
        goal,
        formats: [...formats],
        description,
      },
    }));
    if (location.hash !== '#contact') location.hash = 'contact';
    else document.getElementById('contact')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  return <section id="offers" className="sales-offers section-space container">
    <div className="section-kicker reveal">
      <p className="eyebrow"><span className="section-number">YOUR NEXT MOVE /</span> CHOOSE A STARTING POINT</p>
      <span className="eyebrow muted">A CLEARER PATH FROM IDEA TO VIDEO</span>
    </div>
    <div className="section-heading reveal">
      <h2 className="section-title">ONE GOAL.<br/>THE RIGHT <span className="violet">VIDEO.</span></h2>
      <p>Start with what you want to achieve.<br/>Shape the scope before you commit.</p>
    </div>

    <fieldset className="sales-goal-fieldset">
      <legend><span className="sales-step-label">01</span> What should your video help you do?</legend>
      <div className="sales-goal-options">
        {packageGoals.map(item => <button type="button" key={item} data-goal={item} aria-pressed={goal === item} className={goal === item ? 'active' : ''} onClick={() => chooseGoal(item)}>{item}<ArrowUpRight size={15}/></button>)}
      </div>
    </fieldset>

    <div className="sales-package-intro"><span className="sales-step-label">02</span><p>Choose your creative starting point</p><span>Final scope agreed in your proposal.</span></div>
    <div className="sales-package-grid" role="group" aria-label="Choose a project starting point">
      {packages.map((offer, index) => <button type="button" key={offer.id} data-package-id={offer.id} className={`sales-package-card${selected.id === offer.id ? ' selected' : ''}`} aria-pressed={selected.id === offer.id} onClick={() => setPackageId(offer.id)}>
        <span className="sales-package-top"><span>0{index + 1} / {offer.eyebrow}</span>{selected.id === offer.id ? <CheckCircle2 size={20} aria-hidden="true"/> : <span className="sales-package-radio" aria-hidden="true"/>}</span>
        <strong className="sales-package-name">{offer.name}</strong>
        <span className="sales-package-best">{offer.bestFor}</span>
        <span className="sales-package-description">{offer.description}</span>
        <span className="sales-package-inclusions">{offer.inclusions.map(item => <span key={item}><Check size={14} aria-hidden="true"/>{item}</span>)}</span>
        <span className="sales-package-bottom"><span>{offer.priceLabel.trim() || 'Tailored project quote'}</span><span>{selected.id === offer.id ? 'Selected' : 'Select this project'} <ArrowRight size={14}/></span></span>
      </button>)}
    </div>

    <div className="sales-offer-builder">
      <fieldset className="sales-format-fieldset" aria-describedby={formatHint}>
        <legend><span className="sales-step-label">03</span> Where will it play?</legend>
        <p id={formatHint}>Choose the formats you need. Keep at least one selected.</p>
        <div className="sales-format-options">
          {deliveryFormats.map(format => <label key={format} className={formats.includes(format) ? 'selected' : ''}><input type="checkbox" value={format} checked={formats.includes(format)} onChange={() => toggleFormat(format)}/><span className={`sales-format-frame format-${format.replace(':', '-')}`} aria-hidden="true"/><strong>{format}</strong><span>{format === '9:16' ? 'Reels & stories' : format === '1:1' ? 'Square feeds' : 'YouTube & web'}</span></label>)}
        </div>
        <p className="sales-format-notice" aria-live="polite">{formatNotice}</p>
      </fieldset>
      <div className="sales-offer-summary" aria-live="polite" aria-atomic="true">
        <div className="sales-summary-kicker"><SlidersHorizontal size={16}/><span>YOUR PROJECT, AT A GLANCE</span></div>
        <h3>{selected.name}</h3>
        <p>{goal} <span aria-hidden="true">/</span> {formats.join(' + ')}</p>
        <ul>{selected.inclusions.map(item => <li key={item}><Check size={14} aria-hidden="true"/>{item}</li>)}</ul>
        <span className="sales-summary-price">{selected.priceLabel.trim() || 'A quote built around your scope'}</span>
        <p className="sales-summary-note">Scope and delivery confirmed in your proposal.</p>
        <div className="sales-offer-cta">
          {checkout && <a className="button button-primary" href={checkout} target="_blank" rel="noopener noreferrer">Continue to secure checkout <ArrowUpRight size={17}/></a>}
          <button type="button" data-build-brief="true" className={`button ${checkout ? 'button-outline' : 'button-primary'}`} onClick={buildBrief}>{checkout ? 'Discuss the scope first' : 'Build my project brief'} <ArrowUpRight size={17}/></button>
        </div>
        {!checkout && <p className="sales-summary-reassurance">No payment is taken here. Start by preparing your brief.</p>}
      </div>
    </div>
  </section>;
}
