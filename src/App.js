import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="logo">FactsnInspire</h1>
          <nav className="nav navbar-collapse">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#videos">Videos</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      <section id="home" className="hero">
        <div className="container">
          <h2 className="hero-title">Welcome to FactsnInspire</h2>
          <p className="hero-subtitle">Discover amazing facts and inspire your mind!</p>
          <a href="#videos" className="btn">Watch Videos</a>
        </div>
      </section>
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
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter "></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
