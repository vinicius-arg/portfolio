// deprecated code

const carousel = document.querySelector(".carousel");
const controls = document.querySelector(".controls");

function createCard (title, description, imgSrc, site, repo) {
    return `<div class="card">
            <img src="${imgSrc}">
            <div class="y-line"></div>
            <div class="description">
                <h2>${title}</h2>
                <p>
                    ${description}
                </p>
                <div class="links">
                    <a href="${site}">Acesse aqui</a>
                    <i class="disc"></i>
                    <a href="${repo}">Código-fonte</a>
                </div>
            </div>
        </div>`
}

const cards = [
    {
        title: "Lista de tarefas",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ea, doloribus inventore nostrum consequuntur expedita aut eum dolore officia quibusdam natus saepe voluptatibus mollitia dignissimos ab sit accusamus libero nisi.",
        imgSrc: "./assets/projects/Screenshot_1.png",
        links: {
            site: "https://jvinicius-arg.github.io/to-do-list",
            repo: "https://github.com/jvinicius-arg/to-do-list"
        }
    },
    {
        title: "Jogo da cobrinha",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ea, doloribus inventore nostrum consequuntur expedita aut eum dolore officia quibusdam natus saepe voluptatibus mollitia dignissimos ab sit accusamus libero nisi.",
        imgSrc: "./assets/projects/Screenshot_1.png",
        links: {
            site: "https://jvinicius-arg.github.io/snake-game",
            repo: "https://github.com/jvinicius-arg/snake-game"
        }
    },
]

document.addEventListener("DOMContentLoaded", function () {
    for (let card of cards) {
        carousel.innerHTML += createCard(card.title, card.description, card.imgSrc, card.links.site, card.links.repo);
    }
});