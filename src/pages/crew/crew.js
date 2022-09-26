import React, { useState, useEffect } from "react";
import photo1 from "../../assets/crew/image-douglas-hurley.png";

import crewbgdesktop from "../../assets/crew/background-crew-desktop.jpg";
import crewbgmobile from "../../assets/crew/background-crew-mobile.jpg";
import crewbgtablet from "../../assets/crew/background-crew-tablet.jpg";

import "./crew.css";
import data from "../../data/data.json";
import getImageByKey from "../../imageMapping";

const Crew = () => {
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [pic, setPhoto] = useState("");

  const [name, setName] = useState("");

  useEffect(() => {
    setPhoto(photo1);
    setRole(data.crew[0].role);
    setName(data.crew[0].name);
    setBio(data.crew[0].bio);
  }, []);

  const setinfo = (no) => {
    console.log(data.crew[no].images.png);
    setBio(data.crew[no].bio);
    setName(data.crew[no].name);
    setPhoto(getImageByKey(data.crew[no].images.png));
    setRole(data.crew[no].role);
  };

  return (
    <section className="crew">
      <div className="crewbg">
        <picture>
          <source media="(min-width: 1000px)" srcSet={crewbgdesktop} />
          <source media="(min-width: 768px)" srcSet={crewbgtablet} />
          <img src={crewbgmobile} alt="homebg" />
        </picture>
      </div>

      <div className="crewinfo">
        <h3 className="heading">
          <span>02</span> MEET YOUR CREW
        </h3>
        <p className="role">{role}</p>
        <p className="name">{name}</p>
        <p className="bio">{bio}</p>
        <div className="style">
          <button
            value={0}
            className=""
            onClick={(e) => {
              setinfo(e.target.value);
            }}
          ></button>
          <button
            value={1}
            className=""
            onClick={(e) => {
              setinfo(e.target.value);
            }}
          ></button>
          <button
            value={2}
            onClick={(e) => {
              setinfo(e.target.value);
            }}
            className=""
          ></button>
          <button
            value={3}
            className=""
            onClick={(e) => {
              setinfo(e.target.value);
            }}
          ></button>
        </div>
      </div>
      <div className="crewimg">
        <img src={pic} alt="photo1" />
      </div>
    </section>
  );
};

export default Crew;
