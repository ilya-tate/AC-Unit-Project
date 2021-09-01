import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../util/logo.svg";
import Links from "./Links";

const Navbar = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [showLinks, setShowLinks] = useState(false);

  const changeSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeSize);
    return () => {
      window.removeEventListener("resize", changeSize);
    };
  });

  return (
    <nav className="navbar">
      <div className="nav-center">
        {size < 768 && (
          <button
            onClick={() => setShowLinks(!showLinks)}
            className="nav-toggle"
          >
            <GiHamburgerMenu />
          </button>
        )}
        {size > 768 && <h1>RV AC Repair</h1>}

        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className={showLinks || size > 768 ? "showing sliding" : "sliding"}>
        <button onClick={() => setShowLinks(!showLinks)} className="nav-toggle">
          {size < 768 && <GiHamburgerMenu />}
        </button>
        <Links />
      </div>
    </nav>
  );
};

export default Navbar;
