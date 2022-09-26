import React, { useState, useEffect } from "react";
import technologybgdesktop from "../../assets/technology/background-technology-desktop.jpg";
import technologybgmobile from "../../assets/technology/background-technology-mobile.jpg";
import technologybgtablet from "../../assets/technology/background-technology-tablet.jpg";

import photoLand from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import photoPort from "../../assets/technology/image-launch-vehicle-portrait.jpg";

import "./tech.css";

import data from "../../data/data.json";
import getImageByKey from "../../imageMapping";

const Tech = () => {
  const [bio, setBio] = useState("");
  const [picLand, setPicLand] = useState("");
  const [picPort, setPicPort] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setName(data.technology[0].name);
    setBio(data.technology[0].description);
    setPicLand(photoLand);
    setPicPort(photoPort);
  }, []);

  const setinfo = (no) => {
    setBio(data.technology[no].description);
    setName(data.technology[no].name);
    setPicLand(getImageByKey(data.technology[no].images.landscape));
    setPicPort(getImageByKey(data.technology[no].images.portrait));
  };

  return (
    <section className="technology">
      <div className="techbg">
        <picture>
          <source media="(min-width: 1000px)" srcSet={technologybgdesktop} />
          <source media="(min-width: 768px)" srcSet={technologybgtablet} />
          <img src={technologybgmobile} alt="homebg" />
        </picture>
      </div>

      <h3 className="heading">
        <span>03</span> space LAunch 03
      </h3>

      <div className="techbox">
        <div className="techinfo">
          <div className="style">
            <button
              value={0}
              onClick={(e) => {
                setinfo(e.target.value);
              }}
            >
              1
            </button>
            <button
              value={1}
              onClick={(e) => {
                setinfo(e.target.value);
              }}
            >
              2
            </button>
            <button
              value={2}
              onClick={(e) => {
                setinfo(e.target.value);
              }}
            >
              3
            </button>
          </div>
          <div className="infobox">
            <h3>the treminology ...</h3>
            <h1>{name}</h1>
            <p>{bio}</p>
          </div>
        </div>
        <div className="techimg">
          <picture>
            <source media="(min-width: 1000px)" srcSet={picPort} />
            <img src={picLand} alt="homebg" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Tech;
