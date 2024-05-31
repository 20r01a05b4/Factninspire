import React, { useState } from 'react';
import './App.css';
import image from "./pages/Images/banner2.jpg";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container row align-items-center">
          <div className="logo-container col-md-3 text-center">
            <img src={image} alt="channel logo" width="120" height="120" />
          </div>
          <div className="col-md-9 d-flex flex-column navbar-outer-container">
            <div className="logoname">
              <h1 className="logo text-center">Welcome to FactsnInspire</h1>
            </div>
            <div className="navbar-toggle" onClick={toggleNavbar}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="navbar-container">
              <a href="/">Home</a>
              <a href="/video">Video</a>
              <a href="/contact">Contact</a>
              <a href="/about">About</a>
            </div>
          </div>
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
            <a href="https://x.com/Factsninspire?t=VlO3q_BXEIn-EqwhfinTqw&s=09" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
