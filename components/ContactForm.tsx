'use client';

import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { contacts, services, studio } from '@/data/content';

type ContactFormProps = { initialType?: string };
type SubmissionResult = { delivered?: boolean; accepted?: boolean; ok?: boolean; message?: string };

/**
 * Endpoint contract: POST JSON with name, email, company, projectType, budget,
 * deadline, description and website (honeypot). Return 2xx JSON containing
 * delivered:true, accepted:true or ok:true only after accepting the inquiry.
 * The endpoint must independently validate inputs, check the honeypot and rate
 * limit requests. Keep email-provider credentials on the server.
 */
export default function ContactForm({ initialType = '' }: ContactFormProps) {
  const formId = useId();
  const typeRef = useRef<HTMLSelectElement>(null);
  const [projectType, setProjectType] = useState(initialType);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState(false);
  const endpoint = contacts.formEndpoint.trim();

  useEffect(() => { setProjectType(initialType); }, [initialType]);

  useEffect(() => {
    const selectType = (event: Event) => {
      const nextType = (event as CustomEvent<string>).detail;
      if (typeof nextType !== 'string') return;
      const match = services.find(service => service.inquiryType === nextType || service.title === nextType);
      if (match) setProjectType(match.inquiryType);
      setStatus('');
      typeRef.current?.focus({ preventScroll: true });
    };
    window.addEventListener('project-type', selectType);
    return () => window.removeEventListener('project-type', selectType);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const inquiry = {
      name: String(fields.get('name') ?? '').trim(),
      email: String(fields.get('email') ?? '').trim(),
      company: String(fields.get('company') ?? '').trim(),
      projectType: String(fields.get('projectType') ?? ''),
      budget: String(fields.get('budget') ?? ''),
      deadline: String(fields.get('deadline') ?? ''),
      description: String(fields.get('description') ?? '').trim(),
      website: String(fields.get('website') ?? ''),
    };
    setStatus('');
    setError(false);
    if (inquiry.website) {
      setError(true);
      setStatus('This inquiry could not be processed. Please try again.');
      return;
    }

    if (!endpoint) {
      const brief = [
        `${studio.name} — PROJECT INQUIRY`,
        'Prepared locally. This brief has not been sent.',
        '',
        `Name: ${inquiry.name}`,
        `Email: ${inquiry.email}`,
        `Company / Brand: ${inquiry.company || 'Not provided'}`,
        `Project type: ${inquiry.projectType}`,
        `Estimated budget: ${inquiry.budget}`,
        `Expected deadline: ${inquiry.deadline || 'To be discussed'}`,
        '',
        'PROJECT DESCRIPTION',
        inquiry.description,
        '',
      ].join('\n');
      const objectUrl = URL.createObjectURL(new Blob([brief], { type: 'text/plain;charset=utf-8' }));
      const download = document.createElement('a');
      download.href = objectUrl;
      download.download = 'mayor-joe-project-brief.txt';
      document.body.appendChild(download);
      download.click();
      download.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
      setStatus('Project brief downloaded. Nothing has been sent.');
      return;
    }

    let destination: URL;
    try {
      destination = new URL(endpoint);
      if (destination.protocol !== 'https:') throw new Error('HTTPS required');
    } catch {
      setError(true);
      setStatus('Inquiry delivery is not configured correctly. Your details have been kept.');
      return;
    }

    setBusy(true);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(destination.toString(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(inquiry),
        signal: controller.signal,
      });
      const result = await response.json().catch(() => null) as SubmissionResult | null;
      const accepted = result?.delivered === true || result?.accepted === true || result?.ok === true;
      if (!response.ok || !accepted) throw new Error('Delivery was not confirmed');
      setStatus('Your inquiry has been accepted. Thank you for sharing your idea.');
    } catch (reason) {
      setError(true);
      setStatus(reason instanceof Error && reason.name === 'AbortError'
        ? 'The request timed out, so delivery could not be confirmed. Your details have been kept; please try again.'
        : 'Delivery could not be confirmed. Your details have been kept; please try again.');
    } finally {
      window.clearTimeout(timeout);
      setBusy(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} aria-describedby={`${formId}-note`}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor={`${formId}-name`}>Full name <span aria-hidden="true">*</span></label>
          <input id={`${formId}-name`} name="name" autoComplete="name" placeholder="Your name" required maxLength={120} />
        </div>
        <div className="field">
          <label htmlFor={`${formId}-email`}>Email address <span aria-hidden="true">*</span></label>
          <input id={`${formId}-email`} name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={254} />
        </div>
        <div className="field">
          <label htmlFor={`${formId}-company`}>Company / Brand</label>
          <input id={`${formId}-company`} name="company" autoComplete="organization" placeholder="Your brand or company" maxLength={160} />
        </div>
        <div className="field">
          <label htmlFor={`${formId}-type`}>Project type <span aria-hidden="true">*</span></label>
          <select ref={typeRef} id={`${formId}-type`} name="projectType" value={projectType} onChange={event => setProjectType(event.target.value)} required>
            <option value="" disabled>Select a project type</option>
            {services.map(service => <option key={service.id} value={service.inquiryType}>{service.title}</option>)}
            <option value="Something else">Something else / Let's discuss</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor={`${formId}-budget`}>Estimated budget <span aria-hidden="true">*</span></label>
          <select id={`${formId}-budget`} name="budget" required defaultValue="">
            <option value="" disabled>Select a budget range</option>
            <option value="Under $1,000 USD">Under $1,000 USD</option>
            <option value="$1,000–$3,000 USD">$1,000–$3,000 USD</option>
            <option value="$3,000–$5,000 USD">$3,000–$5,000 USD</option>
            <option value="$5,000–$10,000 USD">$5,000–$10,000 USD</option>
            <option value="$10,000+ USD">$10,000+ USD</option>
            <option value="To be discussed">Let's discuss</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor={`${formId}-deadline`}>Expected deadline</label>
          <input id={`${formId}-deadline`} name="deadline" type="date" />
        </div>
        <div className="field span-full">
          <label htmlFor={`${formId}-description`}>Tell me about your idea <span aria-hidden="true">*</span></label>
          <textarea id={`${formId}-description`} name="description" placeholder="The vision, the feeling, the impossible part. I'd love to hear it." rows={4} required minLength={20} maxLength={10000} />
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
          <label htmlFor={`${formId}-website`}>Leave this field empty</label>
          <input id={`${formId}-website`} name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <div className="form-action">
        <p id={`${formId}-note`} className="form-note">{endpoint ? 'Share a few details to start the conversation. Fields marked * are required.' : 'Inquiry delivery is not connected yet. You can prepare and download your brief.'}</p>
        <button className="button button-primary" type="submit" disabled={busy} aria-busy={busy}>
          {busy ? 'Sending inquiry…' : endpoint ? 'Send project inquiry' : 'Download project brief'} <span aria-hidden="true">↗</span>
        </button>
      </div>
      {status && <p className={`form-status${error ? ' form-error' : ''}`} role={error ? 'alert' : 'status'} aria-live={error ? 'assertive' : 'polite'}>{status}</p>}
    </form>
  );
}
