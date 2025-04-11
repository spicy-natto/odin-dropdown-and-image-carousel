import deer from "../images/deer.jpg";
import funnyCow from "../images/funny-cow-picture.jpg";
import lake from "../images/lake.jpg";
import path from "../images/path.jpg";

const imagesWithAltText = [
  { image: deer, altText: "Deer" },
  { image: funnyCow, altText: "Funny Cow" },
  { image: lake, altText: "lake" },
  { image: path, altText: "path" },
];

class Carousel {
  carouselDiv = document.getElementById("carousel");
  navCirclesDiv = document.getElementById("nav-circles");
  currIndex = 0;
  imageDomArray;
  navCircleArray;

  constructor(imageAltMapping) {
    this.imageAltMapping = imageAltMapping;
  }

  createImgElementArray() {
    this.imageDomArray = this.imageAltMapping.map((imageAlt) =>
      this.#createImgElement(imageAlt)
    );
    console.log(this.imageDomArray);
  }

  #createImgElement({ image, altText }) {
    const img = document.createElement("img");
    img.setAttribute("src", image);
    img.setAttribute("alt", altText);
    return img;
  }

  #createNavCircleElement({id, value}) {
    const radioButton = document.createElement("input");
    radioButton.setAttribute("type", "radio");
    radioButton.setAttribute("name", "image-select");
    radioButton.setAttribute("id", id);
    radioButton.setAttribute("value", value);
    return radioButton;
  }
}

export default new Carousel(imagesWithAltText);
