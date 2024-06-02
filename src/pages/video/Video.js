import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./Video.css"; // Make sure to create and style this file
import Youtube from "../../youtube/Youtube";

const Video = () => {
  return (
    <>
      <Navbar />
      <div className="video-container">
        <h1>Our Videos</h1>
        <div className="video-grid">
          <Youtube></Youtube>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Video;
