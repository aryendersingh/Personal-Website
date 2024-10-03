import React from 'react';
import './Skills.css';

function Skills( {skillsData}) {
  return (
    <section id="skills">
      <div className="section-container">
        <h2>Skills</h2>
        <div className="skills-content">
          <div className="skills">
            {skillsData.map((skill, index) => (
              <span key={index} className="skill-item">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
