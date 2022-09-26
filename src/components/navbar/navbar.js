import React, { useState } from "react";
import logo from "../../assets/shared/logo.svg";
import "./navbar.css";
import { Link } from "react-router-dom";

import openicon from "../../assets/shared/icon-hamburger.svg";
import closeicon from "../../assets/shared/icon-close.svg";

const Navbar = () => {
  const [navopen, setnavopen] = useState(false);
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
            <Link to="/crew">
              <span>03</span> Crew
            </Link>
          </li>
          <li>
            <Link to="/technology">
              <span>04</span> Technology
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobilebar">
        {!navopen ? (
          <div
            className="navicon"
            onClick={() => {
              setnavopen(!navopen);
            }}
          >
            <img src={openicon} alt="" />
          </div>
        ) : (
          ""
        )}
      </div>
      {navopen && (
        <>
          <div
            onClick={() => {
              setnavopen(!navopen);
            }}
            className=" hamburger"
          >
            <img src={closeicon} className="closeicon" alt="" />
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
                <Link to="/crew">
                  <span>03</span> Crew
                </Link>
              </li>
              <li>
                <Link to="/technology">
                  <span>04</span> Technology
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
