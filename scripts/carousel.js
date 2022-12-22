const cards = document.querySelectorAll(".card");
const index = document.querySelector(".controls");

cards.forEach(() => {
    index.insertAdjacentHTML("beforeend", "<i class='circle'></i>");
}); // index according to cards.length

const indexChildren = [...index.children];
index.children[0].classList.add("disc"); // to start the animations with 1st card

let pos = 0;
let pause = false;

function carousel () {
    if (!pause) {
        indexChildren[pos].classList.remove("disc");
        pos === (cards.length - 1) ? pos = 0 : pos++;

        cards.forEach(element => {
            element.style.transform = `translateX(-${pos*100}%)`;
        });

        indexChildren[pos].classList.add("disc");
    }
}

setInterval(carousel, 8000);

// navigation on cards

indexChildren.forEach(element => {
    element.addEventListener("click", event => {
        pause = true;
        setTimeout(() => {
            pause = false;
        }, 8000);
        indexChildren.forEach(element => {
            element.classList.remove("disc");
        });

        event.target.classList.add("disc");

        let index = indexChildren.indexOf(event.target);
        pos = index;
        
        cards.forEach(element => {
            element.style.transform = `translateX(-${pos*100}%)`;
        });
    })
});