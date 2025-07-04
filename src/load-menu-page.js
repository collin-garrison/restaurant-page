import { createElement } from "./create-element";

export function loadMenuPage() {
    const container = document.getElementById("content");
    container.textContent = "";

    const pancakes = createElement("div", container);
    const breakfast = createElement("h2", pancakes, "Breakfast");
    pancakes.classList.add("food")
    const pancakesImg = createElement("img", pancakes);
    pancakesImg.src = "../images/pancakes.jpeg";
    pancakesImg.alt = "Photo of pancakes";
    pancakesImg.classList.add("food-img");
    const pancakesDesc = createElement("p", pancakes, "Delicious pancakes to start your morning off right.");

    const sandwich = createElement("div", container);
    const lunch = createElement("h2", sandwich, "Lunch");
    sandwich.classList.add("food")
    const sandwichImg = createElement("img", sandwich);
    sandwichImg.src = "../images/sandwich.jpg";
    sandwichImg.alt = "Photo of sandwich";
    sandwichImg.classList.add("food-img");
    const sandwichDesc = createElement("p", sandwich, "A savory sandwich to enjoy the middle of your day.");

    const pasta = createElement("div", container);
    const dinner = createElement("h2", pasta, "Dinner");
    pasta.classList.add("food")
    const pastaImg = createElement("img", pasta);
    pastaImg.src = "../images/pasta.jpg";
    pastaImg.alt = "Photo of pasta";
    pastaImg.classList.add("food-img");
    const pastaDesc = createElement("p", pasta, "Italian pasta for an incredible dinnertime meal.");
};