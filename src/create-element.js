export function createElement(type, parent, content=null) {
    const elem = document.createElement(type);
    elem.textContent = content;
    parent.appendChild(elem);
    return elem;
}