import React from "react";
import logo from "../../assets/shared/logo.svg";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navlinks">
        <ul>
          <li>
            <Link to="/">
              <span>01</span> Home
            </Link>
          </li>
          <li>
            <Link to="/destination">
              <span>02</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>03</span> Crew
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>04</span> Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
