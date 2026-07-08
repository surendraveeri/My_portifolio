import { useReveal } from '../hooks/useReveal';
import { siteConfig } from '../data/siteConfig';
import { openGmailCompose } from '../utils/mail';
import type { FormEvent, MouseEvent } from 'react';

interface ContactProps {
  onOpenResume: () => void;
}

export default function Contact({ onOpenResume }: ContactProps) {
  const revealRef = useReveal<HTMLDivElement>();

  function handleEmailClick(e: MouseEvent) {
    e.preventDefault();
    openGmailCompose();
  }

  function handleResumeClick(e: MouseEvent) {
    e.preventDefault();
    onOpenResume();
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;

    openGmailCompose({ subject, body });
    form.reset();
  }

  return (
    <section id="contact">
      <div className="wrap reveal" ref={revealRef}>
        <div className="contact-card">
          <div className="mesh m1" style={{ top: -180, right: -120 }} />
          <div className="mesh m2" style={{ bottom: -160, left: -80, top: 'auto', right: 'auto' }} />
          <div className="inner">
            <span className="label">Contact</span>
            <h2>Let&rsquo;s build something reliable.</h2>
            <p className="sub">
              Open to QA, software engineering, and strategy &amp; operations opportunities. The fastest
              way to reach me is email — I&rsquo;ll get back to you.
            </p>
            <div className="clist">
              <a href={`mailto:${siteConfig.email}`} onClick={handleEmailClick}>
                <span className="k">Email</span>
                <span>{siteConfig.email}</span>
              </a>
              <a href={`tel:${siteConfig.phone}`}>
                <span className="k">Phone</span>
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <a href={siteConfig.github} target="_blank" rel="noopener">
                <span className="k">GitHub</span>
                <span>{siteConfig.githubDisplay}</span>
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener">
                <span className="k">LinkedIn</span>
                <span>{siteConfig.linkedinDisplay}</span>
              </a>
              <a href="#" onClick={handleResumeClick}>
                <span className="k">Résumé</span>
                <span>View &amp; download PDF</span>
              </a>
            </div>

            <form className="msg-form" onSubmit={handleSubmit}>
              <label htmlFor="msgName" className="msg-label">
                Your Name
              </label>
              <input type="text" id="msgName" name="name" placeholder="Your Name" required />

              <label htmlFor="msgEmail" className="msg-label">
                Your Email
              </label>
              <input type="email" id="msgEmail" name="email" placeholder="you@example.com" required />

              <label htmlFor="msgBody" className="msg-label">
                Your Message
              </label>
              <textarea id="msgBody" name="message" rows={5} placeholder="Your Message" required />

              <button type="submit" className="btn btn-primary msg-send">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
