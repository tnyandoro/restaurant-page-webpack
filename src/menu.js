function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "MEZE",
      "Hummus with Spicy Lamb Mince With pine kernels and served with pita bread"
    )
  );
  menu.appendChild(
    createMenuItem(
      "DIP & EAT",
      "Mini Trio of Dips Choice of 3 mini dips. Served with grissini bread."
    )
  );
  menu.appendChild(
    createMenuItem(
      "POTATO CHIPS",
      "Family Size Potato Chips"
    )
  );
  menu.appendChild(
    createMenuItem(
      "VILLAGE GREEK ",
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
  const MenuItem = document.createElement("div");
  MenuItem.classList.add("menu -item");
}