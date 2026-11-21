import React from 'react';
import { projectsData } from '../data/projectsData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Projects() {
  const [ref, isRevealed] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section id="projects" className="section-block" aria-label="Projects">
      <div
        ref={ref}
        className={`container reveal-item ${isRevealed ? 'is-visible' : ''}`}
      >
        <div className="section-title-line">
          <span className="mono-label">03 Projects</span>
        </div>

        {/* Editorial project rows */}
        <div className="projects-editorial-list">
          {projectsData.map((project) => (
            <article key={project.id} className="project-editorial-row">
              {/* Left Column: Number, Title, Description, Tech, Links */}
              <div className="project-editorial-info">
                <span className="project-mono-num mono-text">/{project.number}</span>
                <h3 className="project-serif-title">{project.title}</h3>
                <p className="project-one-liner">{project.description}</p>
                <p className="project-tech-line mono-text">{project.tech}</p>

                <div className="project-links-line">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-text-action"
                    >
                      GitHub &rarr;
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-text-action"
                    >
                      Live &rarr;
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Real screenshot in a fixed frame with slow zoom */}
              <div className="project-screenshot-wrap">
                <div className="screenshot-fixed-frame">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="screenshot-img"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to autovista.svg if PNG issue or vice versa
                      if (e.target.src.endsWith('.png')) {
                        e.target.src = '/autovista.svg';
                      }
                    }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Simple single line: "More projects coming soon." */}
        <div className="more-projects-line mono-text">
          More projects coming soon.
        </div>
      </div>
    </section>
  );
}
