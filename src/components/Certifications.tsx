import { certifications } from '../data/education';
import { useReveal } from '../hooks/useReveal';

export default function Certifications() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="certifications">
      <div className="wrap reveal" ref={revealRef}>
        <span className="label c-green">Certifications</span>
        <h2>Recognition &amp; credentials</h2>
        <div className="rows" style={{ marginTop: 24 }}>
          {certifications.map((cert) => (
            <div className="cert" key={cert.title}>
              <div className="ck">&#10003;</div>
              <div>
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
