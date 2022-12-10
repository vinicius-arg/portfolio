const cards = document.querySelectorAll(".card");
const index = document.querySelector(".controls")

const carouselLength = cards.length;
let pos = 0;

function carousel () {
    index.children[pos].classList.remove("disc");
    pos === (carouselLength - 1) ? pos = 0 : pos++;

    cards.forEach(elem => {
        elem.style.transform = `translateX(-${pos*100}%)`;
    })

    index.children[pos].classList.add("disc");
}

setInterval(carousel, 10000);