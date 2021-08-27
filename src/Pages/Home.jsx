import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="menu-container">
      <div className="row">
        <Link className = "link left-link" to="/about">About</Link>
        <Link className = "link right-link" to="/contact">Contact</Link>
      </div>
      <h1>Company</h1>
      <div className="row">
        <Link className = "link left-link" to = "/gallery">Gallery</Link>
        <Link className = "link right-link" to = "/services">Services</Link>
      </div>
    </div>
  );
};

export default Home;
