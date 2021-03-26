/** @format */

import React from "react";
// import { Link } from "react-router-dom";
import { NavHashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div className="header">
      <div
        className="logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <h1>Keybord company</h1>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link
              activeClassName="active"
              to="/#info"
              smooth
              scroll={(el) => scrollWidthOffset(el)}>
              Features
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              to="/#video"
              smooth
              offset={100}
              duration={2000}>
              How it works
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              to="/#switches"
              smooth
              offset={-100}
              duration={2000}>
              Switches
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              to="/#socials"
              smooth
              offset={-100}
              duration={2000}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
