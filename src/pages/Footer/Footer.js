import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="footer-text">&copy; 2024 FactsnInspire. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/factsninspire?igsh=MTZjbzZ2NHJsZXExaw==" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com/@factsninspire?si=VPMB7uEVPmvgVxaz" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://x.com/Factsninspire?t=VlO3q_BXEIn-EqwhfinTqw&s=09" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
