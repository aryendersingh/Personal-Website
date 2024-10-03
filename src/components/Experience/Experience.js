import React from 'react';
import './Experience.css';

function Experience({experiences}) {
  return (
    <section id="experience">
      <div className="section-container">
      <h2>Work Experience</h2>
      <div className="timeline">
          {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <div className="experience-header">
                <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
                  <div>
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                  <p className="date">{exp.date}</p>
                </div>
              </div>
              <ul>
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
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

export default Experience;
