import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Video.css"; // Make sure to create and style this file

const Video = () => {
  return (
    <>
      <Navbar />
      <div className="video-container">
        <h1>Our Videos</h1>
        <div className="video-grid">
          {/* Video 1 */}
          <div className="video-card">
            <iframe
              width="560"
              height="400" // Adjusted height
              src="https://www.youtube.com/embed/PqbxV1Hw_Tg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-info">
              <h2>Video Title 1</h2>
              <p>Description of Video 1</p>
            </div>
          </div>
          {/* Video 2 */}
          <div className="video-card">
            <iframe
              width="560"
              height="400" // Adjusted height
              src="https://www.youtube.com/embed/VIDEO_ID_2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-info">
              <h2>Video Title 2</h2>
              <p>Description of Video 2</p>
            </div>
          </div>
          {/* Video 3 */}
          <div className="video-card">
            <iframe
              width="560"
              height="400" // Adjusted height
              src="https://www.youtube.com/embed/VIDEO_ID_3"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-info">
              <h2>Video Title 3</h2>
              <p>Description of Video 3</p>
            </div>
          </div>
          {/* Add more video cards as needed */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Video;
