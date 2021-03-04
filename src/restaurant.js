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


