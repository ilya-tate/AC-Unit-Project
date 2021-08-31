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

        <div className="big-container">
          <div className="img-container">
            <img
              src="https://picsum.photos/500/250?grayscale"
              alt="Landing Picture"
            />
          </div>
          <div className="about-container">
            <h3 className="about-title">About</h3>
            <p className="about">
              Est do cillum elit sunt culpa Lorem. Eu ex do minim culpa
              excepteur nisi nisi. Laborum consectetur id ex fugiat ad amet
              Lorem.
            </p>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <Link to="/contact" className="contact">
          CONTACT ME
        </Link>
      </div>
    </>
  );
};

export default About;
