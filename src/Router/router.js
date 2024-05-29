import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Video from "../pages/video/Video";
import App from "../App";
import Contact from "../pages/contact/Contact";
import About from "../pages/About/About";

const Rout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/video" element={<Video />} />
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rout;