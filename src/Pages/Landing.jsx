import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="landing">
      <h1>RV AC Repairs</h1>
      <h2>We live in a society</h2>
      <div className="img-container">
        <img
          src="https://picsum.photos/260/130?grayscale"
          alt="Landing Picture"
        />
      </div>
      <div className="about-container">
        <h3 className="about-title">About</h3>
        <p className="about">
          Est do cillum elit sunt culpa Lorem. Eu ex do minim culpa excepteur
          nisi nisi. Laborum consectetur id ex fugiat ad amet Lorem.
        </p>
      </div>
      <div className="contact-container">
        <Link to="/contact" className="contact">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default About;
