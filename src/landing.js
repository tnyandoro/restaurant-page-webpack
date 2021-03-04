function createLanding() {
  const landing = document.createElement("div");
  landing.classList.add("landing");

  const logoImage = document.createElement("img");
  logoImage.src = "image/logo.png";
  logoImage.alt = "KAICO";

  landing.appendChild(createParagraph("A fusion of Greek Flavours, tradition and home based generosity"));
  landing.appendChild(createParagraph("A fusion of Greek Flavours, tradition and home based generosity"));
}