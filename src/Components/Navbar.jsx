import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../util/logo.svg";
import Links from "./Links";

const Navbar = ({ size }) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <button onClick={() => setShowLinks(!showLinks)} className="nav-toggle">
          {window.innerWidth <= 768 && <GiHamburgerMenu />}
        </button>
        {window.innerWidth >=768 && <Links />}

        <img src={logo} alt="Logo" className="logo" />
      </div>
      {window.innerWidth <= 768 && (
        <div className={showLinks ? "showing sliding" : "sliding"}>
          <button
            onClick={() => setShowLinks(!showLinks)}
            className="nav-toggle"
          >
            <GiHamburgerMenu />
          </button>
          <Links />
        </div>)
      }
    </nav>
  );
};

export default Navbar;
