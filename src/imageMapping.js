import euporia from "./assets/destination/image-europa.png";
import mars from "./assets/destination/image-mars.png";
import titan from "./assets/destination/image-titan.png";
import moon from "./assets/destination/image-moon.png";

import crew1 from "./assets/crew/image-douglas-hurley.png";
import crew2 from "./assets/crew/image-mark-shuttleworth.png";
import crew3 from "./assets/crew/image-victor-glover.png";
import crew4 from "./assets/crew/image-anousheh-ansari.png";

import tech1_1 from "./assets/technology/image-launch-vehicle-landscape.jpg";
import tech1_2 from "./assets/technology/image-launch-vehicle-portrait.jpg";
import tech2_1 from "./assets/technology/image-space-capsule-landscape.jpg";
import tech2_2 from "./assets/technology/image-space-capsule-portrait.jpg";
import tech3_1 from "./assets/technology/image-spaceport-landscape.jpg";
import tech3_2 from "./assets/technology/image-spaceport-portrait.jpg";

const images = {
  euporia,
  mars,
  titan,
  moon,
  crew1,
  crew2,
  crew3,
  crew4,
  tech1_1,
  tech1_2,
  tech2_1,
  tech2_2,
  tech3_1,
  tech3_2,
};

function getImageByKey(key) {
  return images[key];
}

export default getImageByKey;
