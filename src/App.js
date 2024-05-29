import React from 'react';
import './App.css';
import image from "./pages/Images/banner2.jpg";

function App() {
  return (
    <>
      <header className="header">
        <div className="container row align-items-center">
          <div className="logo-container col-md-3 text-center">
            <img src={image} alt="channel logo" width="120" height="120" />
          </div>
          <div className="col-md-9 d-flex flex-column">
            <div className="logoname">
              <h1 className="logo text-center">Welcome to FactsnInspire</h1>
            </div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/video">Videos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
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
