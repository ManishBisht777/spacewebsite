import React from "react";

import getImageByKey from "../../imageMapping";

const Dest = ({ props }) => {
  return (
    <div className="planetbox">
      <div className="planetimg">
        <img src={getImageByKey(props.images.png)} alt={props.name} />
      </div>
      <div className="planetinfo">
        <h1>{props && props.name}</h1>
        <p>{props && props.description}</p>
        <div className="info">
          <p>
            Avg Distance <span>{props.distance}</span>
          </p>
          <p>
            est travel time <span>{props.travel}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dest;
