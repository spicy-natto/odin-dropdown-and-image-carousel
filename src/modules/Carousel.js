class Carousel {
  #imageWrapperDiv = document.getElementById("image-wrapper");
  #navCirclesDiv = document.getElementById("nav-circles");
  #backButton = document.getElementById("back-button");
  #nextButton = document.getElementById("next-button");
  #currIndex = 0;
  #imageDomArray;
  #navCircleDomArray;
  #numberOfImages;

  constructor(imageAltMapping) {
    this.imageAltMapping = imageAltMapping;
    this.#numberOfImages = imageAltMapping.length;
  }

  init() {
    this.#createImgElementArray();
    this.#createNavElementArray();
    this.#setCurrentImage();
    this.#addChildrenToParent(this.#navCirclesDiv, this.#navCircleDomArray);
  }

  #addChildrenToParent(parent, elementsArray) {
    elementsArray.forEach((element) => parent.appendChild(element));
  };

  #setCurrentImage() {
    this.#imageWrapperDiv.innerHTML = "";
    this.#imageWrapperDiv.appendChild(this.#imageDomArray[this.#currIndex]);
  }

  #createImgElementArray() {
    this.#imageDomArray = this.imageAltMapping.map((imageAlt, index) =>
      this.#createImgElement(imageAlt, index)
    );
    console.log(this.#imageDomArray);
  }

  #createNavElementArray() {
    this.#navCircleDomArray = this.imageAltMapping.map((imageAlt, index) =>
      this.#createNavCircleElement({ id: imageAlt.altText, value: index })
    );
    console.log(this.#navCircleDomArray);
  }

  #createImgElement({ image, altText}, zIndex) {
    const img = document.createElement("img");
    img.classList.add("display-image");
    img.setAttribute("src", image);
    img.setAttribute("alt", altText);
    return img;
  }

  #createNavCircleElement({ id, value }) {
    const radioButton = document.createElement("input");
    radioButton.setAttribute("type", "radio");
    radioButton.setAttribute("name", "image-select");
    radioButton.setAttribute("id", id);
    radioButton.setAttribute("value", value);
    return radioButton;
  }
}

export default Carousel;
