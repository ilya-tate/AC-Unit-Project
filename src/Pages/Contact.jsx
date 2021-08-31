import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="title">Contact Me</h1>
      <div className="content">
        <div className="img-text">
          <img src="https://picsum.photos/350/180?grayscale" alt="" />
          <div className="text">
            <h3>Clancy Briggs</h3>
            <p className="address">
              Company Address:
              <br /> 24710 W Dove Trail, Buckeye, AZ 85326
            </p>
            <a href="tel:+1623-474-5069" className="phone">
              <button>
                Phone Number:
                <br /> +1 (623) 474-5069
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
