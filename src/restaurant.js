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
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.textContent = "home";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    steActiveButton(menuButton);
    loadMenu();
  });

  const drinksButton = document.createElement("button");
  drinksButton.classList.add("button-nav");
  drinksButton.textContent = "home";
  drinksButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    steActiveButton(drinksButton);
    loadDrinks();
  });

  const contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.textContent = "home";
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    steActiveButton(drinksButton);
    loadDrinks();
  });
}


