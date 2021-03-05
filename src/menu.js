function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Meze",
      "Hummus with Spicy Lamb Mince With pine kernels and served with pita bread"
    )
  );
  menu.appendChild(
    createMenuItem(
      "dipneat",
      "Mini Trio of Dips Choice of 3 mini dips. Served with grissini bread."
    )
  );
  menu.appendChild(
    createMenuItem(
      "Potatochips",
      "Family Size Potato Chips"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Greeksalad",
      "Tomatoes, cucumber, red onion, olives and feta."
    )
  );
  menu.appendChild(
    createMenuItem(
      "PLATED CHICKEN SOUVLAKI",
      "3 Skewers served with chips, pita bread, chopped tomato, red onion and your choice of dip."
    )
  );
  menu.appendChild(
    createMenuItem(
      "WRAPS NAPA",
      "Choose *meat, roasted brinjal, tahina, tomato & red onion"
    )
  );
  menu.appendChild(
    createMenuItem(
      "MEAT (KREAS)",
      "Skinny Pork Chops *meat, roasted brinjal,red onion rings"
    )
  );
  menu.appendChild(
    createMenuItem(
      "CHICKEN (KOTA)",
      "10 Piece chicken. Drumsticks and thighs coal-grilled with olive oil, oregano and fresh lemon. Served with chips"
    )
  );
  menu.appendChild(
    createMenuItem(
      "SEAFOOD (THALASSINA)",
      "Prawn and Calamari Combo 4 King prawns and 135g fried calamari with lemon butter and crispy potato chips."
    )
  );
  menu.appendChild(
    createMenuItem(
      "CHOCOLATE TAHINA & HALVA BROWNIE",
      "Dark chocolate brownie with tahina marbling and halva chunks. Served with ice cream."
    )
  );
  return menu;
}

function createMenuItem(name, details) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDetails = document.createElement("p");
  foodDetails.textContent = details;

  const foodImage = document.createElement("img");
  foodImage.src = `images/${name.toLowerCase()}.jpg`;
  foodImage.alt = `${name}`;

  MenuItem.appendChild(foodImage);
  MenuItem.appendChild(foodName);
  MenuItem.appendChild(foodDetails);

  return menuItem;
}

function loadMenu() {
  const head = document.getElementById("head");
  head.textContent = "";
  head.appendChild(createMenu());
}

export default loadMenu;