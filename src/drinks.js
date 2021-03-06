function createDrinks() {
  const drinks = document.createElement("div");
  drinks.classList.add("drinks");

  drinks.appendChild(
    createDrinksItem(
      "100% Fruit Drinks",
      "Orange, PineApple, Mango, Pasion fruit, Apple"
    )
  );
  drinks.appendChild(
    createDrinksItem(
      "fizzy_drinks",
      "Coke, Fantas, lemonade, Apple."
    )
  );
  drinks.appendChild(
    createDrinksItem(
      "coak_tails",
      "Passon Fruit, Orange n Mango"
    )
  );
  drinks.appendChild(
    createDrinksItem(
      "lager",
      "Balck label, Heinken, Budbeer."
    )
  );
  drinks.appendChild(
    createDrinksItem(
      "winery",
      "Sweet red, sweet white, Dry red, sweet red."
    )
  );  
  drinks.appendChild(
    createDrinksItem(
      "hot",
      "Cappacino, Latte, Coffee, Tea, Hot Chocolate"
    )
  );

  return drinks;
}

function createDrinksItem(name, description) {
  const drinksItem = document.createElement("div");
  drinksItem.classList.add("drinks-item");

  const drinksName = document.createElement("h2");
  drinksName.textContent = name;

  const drinksDescription = document.createElement("p");
  drinksDescription.textContent = description;

  const drinksImage = document.createElement("img");
  drinksImage.src = `images/menu/${name.toLowerCase()}.jpg`;
  drinksImage.alt = `${name}`;

  drinksItem.appendChild(drinksImage);
  drinksItem.appendChild(drinksName);
  drinksItem.appendChild(drinksDescription);

  return drinksItem;
}

function loadDrinks() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createDrinks());
}

export default loadDrinks;