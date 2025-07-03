export function loadPage() {
    const container = document.getElementById("content");
    
    const h1 = document.createElement("h1");
    h1.textContent = "Collin's Diner";
    container.appendChild(h1);

    const h3 = document.createElement("h3");
    h3.textContent = "123 Maple Ave, Los Angeles, CA 86543";
    container.appendChild(h3);

    const img = document.createElement("img");
    img.src = "../images/restaurant-image.jpg";
    img.alt = "Image of restaurant interior";
    container.appendChild(img);

    const p = document.createElement("p");
    p.textContent = "A cozy restaurant to have a delicious meal with friends and family, or to simply relax."
    container.appendChild(p);
}