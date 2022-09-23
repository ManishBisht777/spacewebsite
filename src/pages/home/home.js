import React from "react";
import "./home.css";

const Home = () => {
  return (
    <main className="home">
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
