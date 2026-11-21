import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useCountUp } from '../hooks/useCountUp';
import { statsData } from '../data/statsData';

function StatItem({ stat, isTriggered }) {
  const animatedNumber = useCountUp(stat.value, 1400, isTriggered, false);

  return (
    <div className="stat-plain-col">
      <div className="stat-serif-number">
        {animatedNumber}{stat.suffix}
      </div>
      <div className="stat-plain-label mono-text">
        {stat.label}
      </div>
    </div>
  );
}

export default function About() {
  const [ref, isRevealed] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section id="about" className="section-block" aria-label="About">
      <div
        ref={ref}
        className={`container reveal-item ${isRevealed ? 'is-visible' : ''}`}
      >
        <div className="section-title-line">
          <span className="mono-label">01 About</span>
        </div>

        {/* Two-column layout */}
        <div className="about-two-col">
          {/* Left: photo in a different crop */}
          <div className="about-photo-col">
            <div className="plain-photo-frame">
              <img
                src="/jake.jpg"
                alt="Jake J. Mathew"
                className="about-rect-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Bio & Education */}
          <div className="about-content-col">
            <p className="bio-lead-text">
              I'm Jake J. Mathew, an aspiring Software Developer and Integrated MCA student passionate about technology and innovation. I enjoy building web applications, solving problems, and exploring new technologies using C, C++, Java, JavaScript, Python, and SQL. My goal is to create meaningful digital experiences and continuously grow as a developer.
            </p>

            <p className="education-simple-line mono-text">
              3rd year Integrated MCA, Amal Jyoti College of Engineering, Kanjirappally
            </p>
          </div>
        </div>

        {/* Plain row of big serif numbers */}
        <div className="stats-plain-row">
          {statsData.map((stat) => (
            <StatItem
              key={stat.id}
              stat={stat}
              isTriggered={isRevealed}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
