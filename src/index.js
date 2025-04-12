import "./css/styles.css";
import Carousel from "./modules/Carousel.js";
import addClickEventToAllDropdowns from "./modules/dropdown.js";
import deer from "./images/deer.jpg";
import funnyCow from "./images/funny-cow-picture.jpg";
import lake from "./images/lake.jpg";
import path from "./images/path.jpg";

const imagesWithAltText = [
  { image: deer, altText: "Deer" },
  { image: funnyCow, altText: "Funny Cow" },
  { image: lake, altText: "lake" },
  { image: path, altText: "path" },
];


addClickEventToAllDropdowns();

const carousel = new Carousel(imagesWithAltText);
carousel.init();