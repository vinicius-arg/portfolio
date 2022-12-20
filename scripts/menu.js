const menu = document.querySelector(".menu");
const header = document.querySelector("body header");
const nav = document.querySelector("body nav");

menu.addEventListener("click", () => {
    if (menu.classList.contains("menu--enabled")) {
        menu.classList.remove("menu--enabled");
        header.style.height = "70px";
    } else {
        menu.classList.add("menu--enabled");
        header.style.height = "275px";
    }
});

nav.addEventListener("click", () => {
    menu.classList.remove("menu--enabled");
    header.style.height = "70px";
})