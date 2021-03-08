import loadLanding from "./landing";
import loadMenu from "./menu";
import loadDrinks from "./drinks";
import loadContact from "./contact";

const createHeader = () => {
  const header = document.createElement("header");
  header.classList.add("header");

  const placeName = document.createElement("h1");
  placeName.classList.add("placeName");
  placeName.textContent = "KaiCoco";

  header.appendChild(placeName);
  header.appendChild(createNav());

  return header;
};

const createNav = () => {
  const nav = document.createElement("nav");
// use a callback
// create the index button
const indexButton = document.createElement("button");
indexButton.classList.add("button-nav");
indexButton.textContent = "Home";
indexButton.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) return;
  setActiveButton(indexButton);
  loadLanding();
});

// create the menu button
const menuButton = document.createElement("button");
  menuButton.classList.add("button-nav");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(menuButton);
    loadMenu();
  });

  // create the drinks button
  const drinksButton = document.createElement("button");
  drinksButton.classList.add("button-nav");
  drinksButton.textContent = "Drinks";
  drinksButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(drinksButton);
    loadDrinks();
  });

  // create the  contact button
  const contactButton = document.createElement("button");
  contactButton.classList.add("button-nav");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(contactButton);
    loadContact();
  });

  nav.appendChild(indexButton);
  nav.appendChild(menuButton);
  nav.appendChild(drinksButton);
  nav.appendChild(contactButton);

  return nav;
};

// set the active button 
const setActiveButton = button => {
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
  
};

// set the head function
const createPage = () => {
  const page = document.createElement("main");
  page.classList.add("main");
  page.setAttribute("id", "main");
  return page;
};

// create the footer 
const createFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = "Copyright © 2021 KAICOCO-FOODS"

  

  
  footer.appendChild(copyright);
  

  return footer;
};

// the restaurant function 
const startWebsite = () => {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createPage());
  content.appendChild(createFooter());

 
  setActiveButton(document.querySelector(".button-nav"));
  loadLanding();
 
};

export default startWebsite;