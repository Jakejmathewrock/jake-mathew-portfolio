import React from 'react';
import { skillGroups } from '../data/skillsData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Skills() {
  const [ref, isRevealed] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section id="skills" className="section-block" aria-label="Skills">
      <div
        ref={ref}
        className={`container reveal-item ${isRevealed ? 'is-visible' : ''}`}
      >
        <div className="section-title-line">
          <span className="mono-label">02 Skills</span>
        </div>

        {/* 5-column plain text lists */}
        <div className="skills-plain-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skills-group-col">
              <h3 className="skills-mono-heading mono-text">
                /{group.category}
              </h3>
              <ul className="skills-plain-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-text-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
