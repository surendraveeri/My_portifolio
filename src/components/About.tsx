import { useReveal } from '../hooks/useReveal';
import portraitImg from '../assets/portrait.jpg';

export default function About() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="about">
      <div className="wrap reveal" ref={revealRef}>
        <div className="about-grid">
          <div className="portrait">
            <img src={portraitImg} alt="Portrait of Veeri Jay Durga Surendra Gowda" />
            <div className="badge">
              <div className="t">Veeri Jay Durga Surendra Gowda</div>
              <div className="d">QA Intern · Scaler AI Labs</div>
            </div>
          </div>
          <div>
            <span className="label c-violet">About</span>
            <h2>Curious by default, precise on purpose.</h2>
            <p style={{ marginTop: 20 }}>
              I&rsquo;m a problem solver with a strong foundation in software development and quality
              assurance, Recently completed my Master of Computer Applications at JAIN University,
              Bangalore.
            </p>
            <p>
              As a QA analyst at Scaler AI Labs, I test and validate reinforcement-learning tasks across
              robotics and audio — work that rewards structured thinking and an eye for edge cases.
              Alongside it, I&rsquo;ve built full-stack systems in Java (Spring Boot) and Python (Flask),
              data science projects, and a network-analysis tool that captures and monitors live traffic.
            </p>
            <p>
              That same structured, analytical approach — mapping processes, documenting clearly, and
              coordinating the moving parts — is also what draws me to strategy and operations work.
            </p>
            <div className="lang-line">
              <span className="lang-k">Languages</span>
              <span>English &middot; Telugu &middot; Hindi &middot; Kannada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
