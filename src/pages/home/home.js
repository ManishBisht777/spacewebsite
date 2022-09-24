import React from "react";
import "./home.css";
import homedesktop from "../../assets/home/background-home-desktop.jpg";
import hometablet from "../../assets/home/background-home-tablet.jpg";
import homephone from "../../assets/home/background-home-mobile.jpg";

const Home = () => {
  return (
    <main className="home">
      <div className="homebg">
        <picture>
          <source media="(min-width: 1000px)" srcSet={homedesktop} />
          <source media="(min-width: 768px)" srcSet={hometablet} />
          <img src={homephone} alt="homebg" />
        </picture>
      </div>

      <div className="homeinfo">
        <h3>
          SO, YOU WANT TO TRAVEL TO <span>Space</span>
        </h3>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="explore">
        <button>explore</button>
      </div>
    </main>
  );
};

export default Home;
