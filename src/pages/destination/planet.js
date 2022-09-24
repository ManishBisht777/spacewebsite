import React from "react";
import destinationdesktop from "../../assets/destination/background-destination-desktop.jpg";
import destinationtablet from "../../assets/destination/background-destination-tablet.jpg";
import destinationphone from "../../assets/destination/background-destination-mobile.jpg";
import "./planet.css";
import moon from "../../assets/destination/image-mars.png";

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
      <h3>
        <span>01</span> Pick your destination
      </h3>
      <div className="planetbox">
        <div className="planetimg">
          <img src={moon} alt="moon" />
        </div>
        <div className="planetinfo">
          <ul>
            <li>
              <a href="/">Moon</a>
            </li>
            <li>
              <a href="/">mars</a>
            </li>
            <li>
              <a href="/">europia</a>
            </li>
            <li>
              <a href="/">titan</a>
            </li>
          </ul>
          <h1>Moon</h1>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="info">
            <p>
              Avg Distance <span>384,400 Km</span>
            </p>
            <p>
              est travel time <span>3 days </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Planet;
