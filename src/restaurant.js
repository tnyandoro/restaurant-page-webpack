import loadLanding from './landing';
import loadMenu from './menu';
import loadContact from './contact'

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const placeName = document.createElement("h1");
  placeName.classList.add("Place-Name");
  placeName.textContent = "KaiCoco";

  header.appendChild(placeName);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");
// use a callback
  const indexButton = document.createElement("button");
  indexButton.classList.add("button-nav");
  indexButton.textContent = "home";
  indexButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    steActiveButton(indexButton);
    loadLanding();
  })
}


