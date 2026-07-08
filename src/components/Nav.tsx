import type { MouseEvent } from 'react';
import { navLinks } from '../data/navLinks';
import { siteConfig } from '../data/siteConfig';
import { useNavSpy } from '../hooks/useNavSpy';
import type { ThemeMode } from '../types';
import { openGmailCompose } from '../utils/mail';

interface NavProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

const SECTION_IDS = ['about', 'skills', 'work', 'projects'];

export default function Nav({ theme, onToggleTheme }: NavProps) {
  const activeId = useNavSpy(SECTION_IDS);

  function handleEmailClick(e: MouseEvent) {
    e.preventDefault();
    openGmailCompose();
  }

  return (
    <nav className="nav" id="nav">
      <a href="#top" className="brand">
        {siteConfig.shortInitials}
        <b>.</b>
      </a>

      <div className="nav-icons">
        <a href={siteConfig.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23H.24V8.25zM8.5 8.25h4.31v2.02h.06c.6-1.14 2.06-2.34 4.24-2.34 4.53 0 5.37 2.98 5.37 6.86V23h-4.5v-6.36c0-1.52-.03-3.47-2.11-3.47-2.12 0-2.44 1.65-2.44 3.36V23H8.5V8.25z" />
          </svg>
        </a>
        <a href={siteConfig.github} target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
            <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.16.69-3.83-1.35-3.83-1.35-.52-1.32-1.26-1.67-1.26-1.67-1.03-.71.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.73.4-1.24.72-1.53-2.53-.29-5.18-1.26-5.18-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.44.11-3.01 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.72.11 3.01.73.8 1.17 1.82 1.17 3.06 0 4.38-2.66 5.34-5.19 5.62.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
          </svg>
        </a>
        <a href={`mailto:${siteConfig.email}`} aria-label="Email" title="Email" onClick={handleEmailClick}>
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m3 6 9 7 9-7" />
          </svg>
        </a>
        <a href={`tel:${siteConfig.phone}`} aria-label="Call" title="Call">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.3 11.3 0 0 0 3.54.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.44.57 3.54a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
      </div>

      <div className="nav-links">
        {navLinks.map((link) => {
          const sectionId = link.href.startsWith('#') ? link.href.slice(1) : null;
          const isActive = sectionId !== null && sectionId === activeId;
          return (
            <a
              key={link.href}
              href={link.href}
              className={isActive ? 'active' : undefined}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener' : undefined}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      <button
        className="theme-toggle"
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        title="Toggle dark / light mode"
        onClick={onToggleTheme}
        type="button"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      <a href="#contact" className="nav-cta">
        Contact
      </a>
    </nav>
  );
}
