import { projects } from '../data/projects';
import { useReveal } from '../hooks/useReveal';

export default function Projects() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <section id="projects">
      <div className="wrap reveal" ref={revealRef}>
        <span className="label c-pink">Projects</span>
        <h2>Things I&rsquo;ve built</h2>
        <div className="proj-grid stagger">
          {projects.map((project) => (
            <div className={`card ${project.accent}`} key={project.title}>
              <span className="kind">{project.kind}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              {project.links.length === 1 ? (
                <a className="glink" href={project.links[0].url} target="_blank" rel="noopener">
                  {project.links[0].label} <span className="a">&rarr;</span>
                </a>
              ) : (
                <div className="card-links">
                  {project.links.map((link) => (
                    <a
                      className={`glink${link.isDemo ? ' demo' : ''}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener"
                      key={link.url}
                    >
                      {link.label} <span className="a">&rarr;</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
