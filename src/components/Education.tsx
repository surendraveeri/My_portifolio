import { education } from '../data/education';
import { useReveal } from '../hooks/useReveal';

export default function Education() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="education">
      <div className="wrap reveal" ref={revealRef}>
        <span className="label c-amber">Education</span>
        <h2>Academic background</h2>
        <div className="rows">
          {education.map((item) => (
            <div className="row" key={item.title}>
              <div className="meta">
                <span className="tag-mini">{item.scoreTag}</span>
                <br />
                {item.period}
              </div>
              <div>
                <h3>{item.title}</h3>
                <div className="org">
                  <a href={item.orgUrl} target="_blank" rel="noopener">
                    {item.orgName}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
