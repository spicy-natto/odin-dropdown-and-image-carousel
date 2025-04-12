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
    this.#setCurrNavCircle();
    this.#addChildrenToParent(this.#navCirclesDiv, this.#navCircleDomArray);
    this.#backButton.addEventListener("click", this.#goBack.bind(this));
    this.#nextButton.addEventListener("click", this.#goForward.bind(this));
  }

  #goBack() {
    if ((this.#currIndex - 1) < 0) {
      this.#currIndex = this.#numberOfImages - 1;
    } else {
      this.#currIndex = (this.#currIndex - 1) % this.#numberOfImages;
    }
    console.log(this.#currIndex);
    this.#setCurrentImage();
    this.#setCurrNavCircle();
  }

  #goForward() {
    this.#currIndex = (this.#currIndex + 1) % this.#numberOfImages;
    this.#setCurrentImage();
    this.#setCurrNavCircle();
  }

  #addChildrenToParent(parent, elementsArray) {
    elementsArray.forEach((element) => parent.appendChild(element));
  }

  #setCurrentImage() {
    this.#imageWrapperDiv.innerHTML = "";
    this.#imageWrapperDiv.appendChild(this.#imageDomArray[this.#currIndex]);
  }

  #setCurrNavCircle() {
    this.#navCircleDomArray.forEach((navCircle) => (navCircle.checked = false));
    this.#navCircleDomArray[this.#currIndex].checked = true;
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

  #createImgElement({ image, altText }, zIndex) {
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

    radioButton.addEventListener("click", () => {
      this.#currIndex = value;
      this.#setCurrentImage();
      this.#setCurrNavCircle();
    })
    return radioButton;
  }
}

export default Carousel;
