const createMenu = () => {
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
      "Dipneat",
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
      "Pavlova",
      "Tomatoes, cucumber, red onion, olives and feta."
    )
  );
  menu.appendChild(
    createMenuItem(
      "Calamari",
      "3 Skewers served with chips, pita bread, chopped tomato, red onion and your choice of dip."
    )
  );  
  menu.appendChild(
    createMenuItem(
      "chickenf",
      "10 Piece chicken. Drumsticks and thighs coal-grilled with olive oil, oregano and fresh lemon. Served with chips"
    )
  );

  return menu;
};

const createMenuItem = (name, description) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `images/menu/${name.toLowerCase()}.png`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
};

const loadMenu = () => {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
};

export default loadMenu;