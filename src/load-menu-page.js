import { createElement } from "./create-element";

export function loadMenuPage() {
    const container = document.getElementById("content");
    container.textContent = "";
    const breakfast = createElement("h2", container, "Breakfast");
    const lunch = createElement("h2", container, "Lunch");
    const dinner = createElement("h2", container, "Dinner");
};