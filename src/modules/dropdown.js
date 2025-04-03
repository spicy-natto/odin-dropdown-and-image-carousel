function getAssociatedDropdownId(button) {
  return button.getAttribute("data-dropdown-id");
}

function getDropDownElement(button) {
  return document.getElementById(getAssociatedDropdownId(button));
}

function generateDisplayToggleFun(dropdown) {
  return function toggleDisplayProperty() {
    const currDisplayPropValue = window.getComputedStyle(dropdown).getPropertyValue("display");
    if (currDisplayPropValue === "none") {
      dropdown.style.display = "flex";
    } else {
      dropdown.style.display = "none";
    }
  };
}

function addDropdownClickEvent(button) {
  button.addEventListener(
    "click",
    generateDisplayToggleFun(getDropDownElement(button))
  );
}

function addClickEventToAllDropdowns() {
  const dropdownButtons = Array.from(
    document.getElementsByClassName("dropdown-button")
  );
  dropdownButtons.forEach((button) => addDropdownClickEvent(button));
}

export default addClickEventToAllDropdowns;