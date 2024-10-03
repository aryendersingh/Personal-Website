import React from 'react';
import './About.css';

function About( {aboutData} ) {
  return (
    <section id="about">
      <div className="section-container">
        <h2>About Me</h2>
        <div className="about-content">
          {aboutData.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
