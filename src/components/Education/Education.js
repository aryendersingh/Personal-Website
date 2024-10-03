import React from 'react';
import './Education.css';

function Education({educationData}) {
  return (
    <section id="education">
      <div className="section-container">
      <h2>Education</h2>
      <div className="education-timeline">
          {educationData.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-content">
              <div className="education-header">
                <img src={item.logo} alt={`${item.institution} logo`} className="institution-logo" />
                  <div>
                    <h3>{item.degree}</h3>
                    <h4>{item.institution}</h4>
                    <p className="year">{item.year}</p>
            </div>
          </div>
                <p className="description">{item.description}</p>
      </div>
      </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
