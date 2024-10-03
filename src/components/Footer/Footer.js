import React from 'react';
import './Footer.css';

function Footer({footerData}) {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Connect With Me</h3>
          <div className="social-links">
            {footerData.socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
            ))}
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <nav>
            {footerData.quickLinks.map((link, index) => (
              <a key={index} href={link.link}>{link.name}</a>
            ))}
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {footerData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
