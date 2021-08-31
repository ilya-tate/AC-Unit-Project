import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="landing">
        <div className="title-container">
          <h1>RV AC Repairs</h1>
          <h2>We live in a hot state</h2>
        </div>

        <div className="img-container">
          <img
            src="https://picsum.photos/500/300?grayscale"
            alt="Landing Picture"
          />
        </div>
        <div className="about-container">
          <h3 className="title about-title">About</h3>
          <p className="about">
            Est do cillum elit sunt culpa Lorem. Eu ex do minim culpa excepteur
            nisi nisi. Laborum consectetur id ex fugiat ad amet Lorem.
          </p>
        </div>
        <div className="experience-container">
          <h3 className="experience-title">Experience</h3>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
          </ul>
        </div>
        <div className="contact-container">
          <Link to="/contact" className="contact">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
