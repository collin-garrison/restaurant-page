import { createElement } from "./create-element";
import restaurantImage from "../images/restaurant-image.jpg";

export function loadHomePage() {
    const container = document.getElementById("content");
    container.textContent = "";
    container.classList.remove("food-container");
    
    const h1 = createElement("h1", container, "Collin's Diner");
    const h3 = createElement("h3", container, "123 Maple Ave, Los Angeles, CA 86543");

    const img = createElement("img", container);
    img.src = restaurantImage;
    img.alt = "Image of restaurant interior";
    img.id = "home-img"

    const p = createElement("p", container, 
        "A cozy restaurant to have a delicious meal with friends and family, or to simply relax.");
}