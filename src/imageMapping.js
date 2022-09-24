import euporia from "./assets/destination/image-europa.png";
import mars from "./assets/destination/image-mars.png";
import titan from "./assets/destination/image-titan.png";
import moon from "./assets/destination/image-moon.png";

const images = {
  euporia,
  mars,
  titan,
  moon,
};

function getImageByKey(key) {
  return images[key];
}

export default getImageByKey;
