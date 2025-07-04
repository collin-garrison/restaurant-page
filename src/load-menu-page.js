import { createElement } from "./create-element";

export function loadMenuPage() {
    const container = document.getElementById("content");
    container.textContent = "";

    const title = createElement("h2", container, "Menu");

    const foodContainer = createElement("div", container);
    foodContainer.classList.add("food-container");

    const pancakes = createElement("div", foodContainer);
    const breakfast = createElement("h3", pancakes, "Breakfast");
    pancakes.classList.add("food")
    const pancakesImg = createElement("img", pancakes);
    pancakesImg.src = "../images/pancakes.jpeg";
    pancakesImg.alt = "Photo of pancakes";
    pancakesImg.classList.add("food-img");
    const pancakesDesc = createElement("p", pancakes, "Delicious pancakes to start your morning off right.");

    const sandwich = createElement("div", foodContainer);
    const lunch = createElement("h3", sandwich, "Lunch");
    sandwich.classList.add("food")
    const sandwichImg = createElement("img", sandwich);
    sandwichImg.src = "../images/sandwich.jpg";
    sandwichImg.alt = "Photo of sandwich";
    sandwichImg.classList.add("food-img");
    const sandwichDesc = createElement("p", sandwich, "A savory sandwich to enjoy the middle of your day.");

    const pasta = createElement("div", foodContainer);
    const dinner = createElement("h3", pasta, "Dinner");
    pasta.classList.add("food")
    const pastaImg = createElement("img", pasta);
    pastaImg.src = "../images/pasta.jpg";
    pastaImg.alt = "Photo of pasta";
    pastaImg.classList.add("food-img");
    const pastaDesc = createElement("p", pasta, "Italian pasta for an incredible dinnertime meal.");

    const cake = createElement("div", foodContainer);
    const dessert = createElement("h3", cake, "Dessert");
    cake.classList.add("food")
    const cakeImg = createElement("img", cake);
    cakeImg.src = "../images/cake.jpg";
    cakeImg.alt = "Photo of cake";
    cakeImg.classList.add("food-img");
    const cakeDesc = createElement("p", cake, "A luxurious cake for a special customer like you.");
};