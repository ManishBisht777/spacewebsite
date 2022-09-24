import React from "react";
import destinationdesktop from "../../assets/destination/background-destination-desktop.jpg";
import destinationtablet from "../../assets/destination/background-destination-tablet.jpg";
import destinationphone from "../../assets/destination/background-destination-mobile.jpg";
import "./planet.css";
import { Link } from "react-router-dom";

import { Outlet } from "react-router-dom";

const Planet = () => {
  return (
    <main className="planet">
      <div className="destinationbg">
        <picture>
          <source media="(min-width: 1000px)" srcSet={destinationdesktop} />
          <source media="(min-width: 768px)" srcSet={destinationtablet} />
          <img src={destinationphone} alt="destinationbg" />
        </picture>
      </div>
      <div className="planetnav">
        <h3>
          <span>01</span> Pick your destination
        </h3>
        <ul>
          <li>
            <Link to="/destination/moon">Moon</Link>
          </li>
          <li>
            <Link to="/destination/mars">mars</Link>
          </li>
          <li>
            <Link to="/destination/europia">europia</Link>
          </li>
          <li>
            <Link to="/destination/titan">titan</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </main>
  );
};

export default Planet;
