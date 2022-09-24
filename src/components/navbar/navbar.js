import React from "react";
import logo from "../../assets/shared/logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navlinks">
        <ul>
          <li>
            <a href="/">
              <span>01</span> Home
            </a>
          </li>
          <li>
            <a href="/destination">
              <span>02</span> Destination
            </a>
          </li>
          <li>
            <a href="/">
              <span>03</span> Crew
            </a>
          </li>
          <li>
            <a href="/">
              <span>04</span> Technology
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
