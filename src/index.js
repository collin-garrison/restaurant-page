import { loadHomePage } from "./load-home-page.js";
import { loadMenuPage } from "./load-menu-page.js";
import { loadAboutPage } from "./load-about-page.js";

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

homeButton.addEventListener("click", () => {
    loadHomePage();
});

menuButton.addEventListener("click", () => {
    loadMenuPage();
});

aboutButton.addEventListener("click", () => {
    loadAboutPage();
});

loadHomePage();