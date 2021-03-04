import { ContextReplacementPlugin } from "webpack";

function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = " Phone: +27 246 123 0987";

  const address = document.createElement("p");
  address.textContent = "Address: 39 Troupant Ave 2191, Magelissig, johannesburg, Gauteng, South Africa";
  
}