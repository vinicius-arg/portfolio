const menu = document.querySelector(".menu");
const header = document.querySelector("body header");
const nav = document.querySelector("body nav");

menu.addEventListener("click", () => {
    if (menu.classList.contains("menu--enabled")) {
        removeClasses();
    } else {
        addClasses();
    }
});

nav.addEventListener("click", removeClasses);

function addClasses () {
    menu.classList.add("menu--enabled");
    header.classList.add("header--extended");
    header.classList.add("header-visible");
}

function removeClasses () {
    menu.classList.remove("menu--enabled");
    header.classList.remove("header--extended");
}