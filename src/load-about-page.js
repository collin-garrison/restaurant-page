import { createElement } from "./create-element";

export function loadAboutPage() {
    const container = document.getElementById("content");
    container.textContent = "";
    container.classList.remove("food-container");

    const title = createElement("h2", container, "About"); 
    const desc = createElement("p", container, "Locally owned and operated restaurant by Collin.\
        In operation since 1994. Dedicated to efficient and friendly service with a deliciousness guarantee for every meal."); 
    
    const hoursDiv = createElement("div", container);
    hoursDiv.classList.add("about-item");
    const hoursTitle = createElement("h3", hoursDiv, "Hours")
    const sunday = createElement("p", hoursDiv, "Sunday: 10am - 10pm"); 
    const monday = createElement("p", hoursDiv, "Monday: 7am - 10pm"); 
    const tuesday = createElement("p", hoursDiv, "Tuesday: 7am - 10pm"); 
    const wednesday = createElement("p", hoursDiv, "Wednesday: 7am - 10pm"); 
    const thursday = createElement("p", hoursDiv, "Thursday: 7am - 10pm"); 
    const friday = createElement("p", hoursDiv, "Friday: 7am - 10pm"); 
    const saturday = createElement("p", hoursDiv, "Saturday: 10am - 10pm"); 

    const contactDiv = createElement("div", container);
    contactDiv.classList.add("about-item");
    const contactTitle = createElement("h3", contactDiv, "Contact Us");
    const contact = createElement("p", contactDiv, "collinsawesomediner@gmail.com"); 
}