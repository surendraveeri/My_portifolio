import { skillGroups } from '../data/skills';
import { useReveal } from '../hooks/useReveal';

export default function Skills() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="skills">
      <div className="wrap reveal" ref={revealRef}>
        <span className="label c-blue">Skills</span>
        <h2>Tools &amp; technologies</h2>
        <div className="skill-block stagger">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tags">
                {group.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
