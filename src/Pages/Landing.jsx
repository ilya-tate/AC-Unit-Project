import React from "react";
import { Link } from "react-router-dom";
import rick from '../util/roll.png'

const About = () => {
  return (
    <>
      <div className="landing">
        <div className="img-container">
          <img src={rick} alt = "rick"/>
        </div>
        <div className="text-container">
          <div className="about-container">
            <h3 className="title about-title">About</h3>
            <p className="about">
              Est do cillum elit sunt culpa Lorem. Eu ex do minim culpa
              excepteur nisi nisi. Laborum consectetur id ex fugiat ad amet
              Lorem.
            </p>
          </div>
          <div className="experience-container">
            <h3 className="experience-title">Experience</h3>
            <ul>
              <li>
                Voluptate anim commodo cillum pariatur velit minim velit
                cupidatat sunt cupidatat.
              </li>
              <li>
                Ex occaecat laboris laborum voluptate culpa in voluptate sunt.
              </li>
            </ul>
          </div>
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
