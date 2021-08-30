import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../util/logo.svg"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <button onClick={() => setShowLinks(!showLinks)} className="nav-toggle">
          <GiHamburgerMenu/>
        </button>
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
