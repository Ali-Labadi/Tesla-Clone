// pop menu when clicked
const menu = document.querySelector('#menu');
const closeBtn = document.querySelector('.close-btn');
const modelsSection = document.querySelector('.models-section');
const body = document.querySelector('body');

function openMenu() {
    document.querySelector('aside').className = "active";
    document.querySelector('.back-drop').className = "back-drop active";
    body.style.overflowY = "hidden";
}

function closeMenu() {
    document.querySelector('aside').className = "";
    document.querySelector('.back-drop').className = "back-drop";
    body.style.overflowY = "scroll";

}

menu.addEventListener('click', (e) => {
    e.preventDefault();
    openMenu();
});

closeBtn.addEventListener('click', (e) => {
    closeMenu();
});

modelsSection.addEventListener('click', (e) => {
    closeMenu();
});

// TESLA h1 refresh page ->
const h1 = document.querySelector("h1");

h1.addEventListener('click', () => {
    window.location.reload();
});