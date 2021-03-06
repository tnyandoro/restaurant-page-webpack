function createLanding() {
  const landing = document.createElement("div");
  landing.classList.add("landing");

  const logoImage = document.createElement("img");
  logoImage.src = "images/logo.png";
  logoImage.alt = "KAICO";

  landing.appendChild(logoImage);
  landing.appendChild(createParagraph("A fusion of Greek Flavours, tradition and home based generosity"));
  landing.appendChild(createParagraph("Greek Flavours delivered straight to your doorstep"));
  landing.appendChild(createParagraph("Greek Flavours delivered straight to your doorstep"));

  return landing;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;

  return paragraph;  
}

function loadLanding() {
  const page = document.getElementById("page");
  page.textContent = "";
  page.appendChild(createLanding());
}

export default loadLanding;