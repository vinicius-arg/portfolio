document.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
        hideHeader();
    } else {
        showHeader();
    }
});

function hideHeader () {
    header.classList.add("header-visible");
}

function showHeader () {
    header.classList.remove("header-visible");
    removeClasses();
}