import React from "react";
import rick from "../util/rick.png";

const About = () => {
  return (
    <div className="landing">
      <h1>RV AC Repairs</h1>
      <h2>We live in a society</h2>
      <div className="img-container">
        <img src={rick} alt="rick" />
      </div>
    </div>
  );
};

export default About;
