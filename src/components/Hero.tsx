import { siteConfig } from '../data/siteConfig';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section className="hero">
      <div className="mesh m1" />
      <div className="mesh m2" />
      <div className="mesh m3" />
      <div className="mesh m4" />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="status">
              <span className="ping">
                <i />
              </span>{' '}
              Available for QA, SDE &amp; Strategy/Ops roles
            </span>
            <p className="role">QA Engineer &middot; Developer &middot; Strategy &amp; Operations</p>
            <h1>
              Veeri Jay Durga <span className="g">Surendra Gowda</span>
            </h1>
            <p className="lede">
              I build software and I make sure it holds up — from{' '}
              <strong>validating reinforcement-learning tasks</strong> and structured QA testing to{' '}
              <strong>full-stack web apps</strong> in Java &amp; Python, <strong>data science</strong>, and{' '}
              <strong>network analysis tooling</strong>.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#projects">
                View my work
              </a>
              <button className="btn btn-ghost" type="button" onClick={onOpenResume}>
                Résumé &#8595;
              </button>
              <a className="btn btn-ghost" href={siteConfig.github} target="_blank" rel="noopener">
                GitHub &#8599;
              </a>
            </div>
            <div className="meta">
              <span>
                <b>MCA (AIML)</b> @ JAIN University
              </span>
              <span>
                <b>QA Analyst</b> @ Scaler AI Labs
              </span>
              <span>{siteConfig.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
