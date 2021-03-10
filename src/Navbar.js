/** @format */

import React from "react";
// import { Link } from "react-router-dom";
import { NavHashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>Keybord company</h1>
      </div>
      <navbar className="navbar">
        <ul>
          <li>
            <Link
              activeClassName="active"
              to="/#info"
              smooth
              offset={-100}
              duration={2000}>
              features
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
              to="/#video"
              smooth
              offset={100}
              duration={2000}>
              How it works
            </Link>
          </li>
        </ul>
      </navbar>
    </div>
  );
};
export default Navbar;
