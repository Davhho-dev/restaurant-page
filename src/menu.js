export default function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    //Add food category
    menu.appendChild(createStarter());
    menu.appendChild(createEntree());
    menu.appendChild(createDesserts());
    menu.appendChild(createDrinks());

    return menu;
}

function createStarter() {
    const starter = document.createElement("div");
    starter.classList.add("category");
    starter.textContent = "Starters";

    //Add food items
    starter.appendChild(createFoodItems("Eggroll mập", "Pork, Wood Ear Mushrooms, Carrots, Glass Noodles"));
    starter.appendChild(createFoodItems("đu đủ má salad", "Shredded Green Papaya, Vietnamese Beef Jerky, Thai Basil, Bird's Eye Chili"));
    starter.appendChild(createFoodItems("Officer tôm", "Shrimp Paste, Fish Sauce, Wrapped on a Sugar Cane"));
    starter.appendChild(createFoodItems("A di đậu phụng", "Literally Peanuts"));

    return starter;
}

function createEntree() {
    const entree = document.createElement("div");
    entree.classList.add("category");
    entree.textContent = "Entree";

    entree.appendChild(createFoodItems("Người Viet", "Cigarette, Newspaper, Vietnamese Dripped Coffee"));
    entree.appendChild(createFoodItems("Nước mắmba", "Sneaky little fish sauce, garlic, bird's eye chili, limes"));
    entree.appendChild(createFoodItems("Đá, đá, đá", "Kick, Ice, Rocks"));
    entree.appendChild(createFoodItems("quỳ xuống mày", "You're in trouble"));
    entree.appendChild(createFoodItems("Hamburger", "mày bị khùng order cái này"));
    
    return entree;
}

function createDesserts() {
    const desserts = document.createElement("div");
    desserts.classList.add("category");
    desserts.textContent = "Desserts";

    desserts.appendChild(createFoodItems("thêm đậu phộng", "More peanuts"));
    desserts.appendChild(createFoodItems("Cam mày lấy ở bên cạnh người nào sân có rào", "Oranges you took from your neighbors fenced yard"));
    desserts.appendChild(createFoodItems("Peanuts", "tại sao mày ăn nhiều đậu phộng"));

    return desserts;
}

function createDrinks() {
    const drinks = document.createElement("div");
    drinks.classList.add("category");
    drinks.textContent = "Drinks";

    drinks.appendChild(createFoodItems("một heineken", "One large heineken beer"));

    return drinks;
}

function createFoodItems(item, description) {
    const food = document.createElement("div");
    food.classList.add("food");

    const foodItem = document.createElement("p");
    foodItem.classList.add("food-item");
    foodItem.textContent = item;

    const foodDescription = document.createElement("p");
    foodDescription.classList.add("description");
    foodDescription.textContent = description;

    food.appendChild(foodItem);
    food.appendChild(foodDescription);

    return food;
}
