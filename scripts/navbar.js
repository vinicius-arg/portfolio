document.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
        header.classList.add("header-visible");
    } else {
        header.classList.remove("header-visible");
    }
});