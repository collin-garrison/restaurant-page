import { createElement } from "./create-element";

export function loadAboutPage() {
    const container = document.getElementById("content");
    container.textContent = "";
    const h2 = createElement("h2", container, "About");
}