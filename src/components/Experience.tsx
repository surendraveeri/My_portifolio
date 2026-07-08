import { experience } from '../data/experience';
import { useReveal } from '../hooks/useReveal';

export default function Experience() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="work">
      <div className="wrap reveal" ref={revealRef}>
        <span className="label c-teal">Experience</span>
        <h2>Where I&rsquo;ve worked</h2>
        <div className="rows">
          {experience.map((item) => (
            <div className="row" key={item.role}>
              <div className="meta">
                <span className="tag-mini">{item.period}</span>
                <br />
                {item.tag}
              </div>
              <div>
                <h3>{item.role}</h3>
                <div className="org">
                  <a href={item.orgUrl} target="_blank" rel="noopener">
                    {item.orgName}
                  </a>
                </div>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
