(()=>{"use strict";function e(e){var t=document.createElement("p");return t.textContent=e,t}const t=function(){var t=document.getElementById("head");t.textContent="",t.appendChild(function(){var t=document.createElement("div");t.classList.add("landing");var n=document.createElement("img");return n.src="image/logo.png",n.alt="KAICO",t.appendChild(n),t.appendChild(e("A fusion of Greek Flavours, tradition and home based generosity")),t.appendChild(e("Greek Flavours delivered straight to your doorstep")),t.appendChild(e("Greek Flavours delivered straight to your doorstep")),t}())};function n(e,t){var n=document.createElement("div");n.classList.add("menu-item");var a=document.createElement("h2");a.textContent=e;var d=document.createElement("p");d.textContent=t;var i=document.createElement("img");return i.src="images/".concat(e.toLowerCase(),".jpg"),i.alt="".concat(e),MenuItem.appendChild(i),MenuItem.appendChild(a),MenuItem.appendChild(d),n}function a(){var e=document.createElement("header");e.classList.add("header");var a=document.createElement("h1");return a.classList.add("Place-Name"),a.textContent="KaiCoco",e.appendChild(a),e.appendChild(function(){var e=document.createElement("nav"),a=document.createElement("button");a.classList.add("button-nav"),a.textContent="Home",a.addEventListener("click",(function(e){e.target.classList.contains("active")||(o(a),t())}));var d=document.createElement("button");d.classList.add("button-nav"),d.textContent="menu",d.addEventListener("click",(function(e){var t;e.target.classList.contains("active")||(o(d),(t=document.getElementById("head")).textContent="",t.appendChild(function(){var e=document.createElement("div");return e.classList.add("menu"),e.appendChild(n("MEZE","Hummus with Spicy Lamb Mince With pine kernels and served with pita bread")),e.appendChild(n("DIP & EAT","Mini Trio of Dips Choice of 3 mini dips. Served with grissini bread.")),e.appendChild(n("POTATO CHIPS","Family Size Potato Chips")),e.appendChild(n("VILLAGE GREEK ","Tomatoes, cucumber, red onion, olives and feta.")),e.appendChild(n("PLATED CHICKEN SOUVLAKI","3 Skewers served with chips, pita bread, chopped tomato, red onion and your choice of dip.")),e.appendChild(n("WRAPS NAPA","Choose *meat, roasted brinjal, tahina, tomato & red onion")),e.appendChild(n("MEAT (KREAS)","Skinny Pork Chops *meat, roasted brinjal,red onion rings")),e.appendChild(n("CHICKEN (KOTA)","10 Piece chicken. Drumsticks and thighs coal-grilled with olive oil, oregano and fresh lemon. Served with chips")),e.appendChild(n("SEAFOOD (THALASSINA)","Prawn and Calamari Combo 4 King prawns and 135g fried calamari with lemon butter and crispy potato chips.")),e.appendChild(n("CHOCOLATE TAHINA & HALVA BROWNIE","Dark chocolate brownie with tahina marbling and halva chunks. Served with ice cream.")),e}()))}));var i=document.createElement("button");i.classList.add("button-nav"),i.textContent="drinks",i.addEventListener("click",(function(e){e.target.classList.contains("active")||(o(i),loadDrinks())}));var r=document.createElement("button");return r.classList.add("button-nav"),r.textContent="contact",r.addEventListener("click",(function(e){var t;e.target.classList.contains("active")||(o(r),(t=document.getElementById("head")).textContent="",t.appendChild(function(){var e=document.createElement("div");e.classList.add("contact");var t=document.createElement("p");t.textContent=" Phone: +27 246 123 0987";var n=document.createElement("p");return n.textContent="Address: 39 Troupant Ave 2191, Magelissig, johannesburg, Gauteng, South Africa",e.appendChild(t),e.appendChild(n),e}()))})),e.appendChild(a),e.appendChild(d),e.appendChild(i),e.appendChild(r),e}()),e}var d,i,o=function(e){document.querySelectorAll(".button-nav").forEach((function(e){void 0!==e&&e.classList.remove("active")})),e.classList.add("active")};(i=document.getElementById("content")).appendChild(a()),i.appendChild(((d=document.createElement("head")).classList.add("head"),d.setAttribute("id","head"),d)),i.appendChild(function(){var e=document.createElement("footer");e.classList.add("footer");var t=document.createElement("p");return t.textContent="Copyright © 2021 KAICOCO",e.appendChild(t),e}()),o(document.querySelector(".button-nav")),t()})();
//# sourceMappingURL=main.js.map