import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';
import resumePdf from '../assets/resume.pdf';
import resumePreview from '../assets/resume-preview.jpg';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className={`resume-modal${isOpen ? ' open' : ''}`} aria-hidden={!isOpen}>
      <div className="rm-backdrop" onClick={onClose} />
      <div className="rm-panel" role="dialog" aria-modal="true" aria-label="Résumé">
        <div className="rm-head">
          <span className="rm-title">Résumé — {siteConfig.fullName}</span>
          <div className="rm-actions">
            <a className="rm-btn primary" download={siteConfig.resumeFileName} href={resumePdf}>
              Download PDF
            </a>
            <button className="rm-btn" type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
        <div className="rm-frame">
          <img src={resumePreview} alt={`Résumé — ${siteConfig.fullName}`} />
        </div>
      </div>
    </div>
  );
}
