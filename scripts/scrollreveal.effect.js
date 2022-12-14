const stCardImg = document.querySelector(".card .img");
const stCardDescription = document.querySelector(".description");
const navItems = document.querySelectorAll("nav ul li");

ScrollReveal({
    delay: 600,
    distance: "50px",
    origin: "left",
    afterReveal: elem => {
        elem.removeAttribute("style");
    } // to reset inputed scroll reveals 
}); // default configs

ScrollReveal().reveal(navItems[0] , {
    delay: 400 
});

ScrollReveal().reveal(navItems[1] , {
    delay: 500 
});

ScrollReveal().reveal(navItems[2] , {
    delay: 600 
});

ScrollReveal().reveal(navItems[3] , {
    delay: 700 
});

ScrollReveal().reveal("section", { 
    delay: 300, 
    distance: 0 
});

ScrollReveal().reveal(".presents__container .__photo", { 
    delay: 300,
    distance: "200px",
    mobile: false 
});

ScrollReveal().reveal(".presents__container article"); 

ScrollReveal().reveal(".carousel", { 
    delay: 300 
});

ScrollReveal().reveal(stCardImg);
ScrollReveal().reveal(stCardDescription, { 
    delay: 900 
});

ScrollReveal().reveal(".skills__container");

ScrollReveal().reveal(".form-container", { 
    delay: 300 
});

ScrollReveal().reveal(".social-media");