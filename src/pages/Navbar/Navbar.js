import React from 'react';
import './Navbar.css';
import image from '../Images/banner2.jpg'; 

function Navbar() {
  return (
    <header className="header">
      <div className="container row align-items-center">
        <div className="logo-container col-md-3 text-center">
          <img src={image} alt="channel logo" width="120" height="120" />
        </div>
        <div className="col-md-9 d-flex flex-column navbar-outer-container">
          <div className="logoname">
            <h1 className="logo text-center">Welcome to FactsnInspire</h1>
          </div>
          <div className="navbar-container">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/video">Video</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
