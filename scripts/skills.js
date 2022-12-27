const skillsContainer = document.querySelector(".skills__container");
const skillsElements = document.querySelectorAll(".skills__container article");
const contentElements = document.querySelectorAll(".__content");
const backBtn = document.querySelector(".fa-arrow-left");

const skills = [...skillsElements];
const contents = [...contentElements];
const animationTime = 300;

let localContent;

const back = {
    show () {
        backBtn.classList.add("fa-solid--enabled");
    },
    hide () {
        backBtn.classList.remove("fa-solid--enabled");
    }
};

const content = {
    getContext (id) {
        contents.forEach(elem => {
            if (elem.parentElement.id === id) {
                localContent = elem;
            }
        });
    },
    hide (content) {
        if (content) {
            content.classList.remove("__content--enabled");
        }
    },
   show (content) {
        if (content) {
            content.classList.add("__content--enabled");
        }
    }
}

const grid = {
    highlightSkill (skill) {
        if (window.innerWidth <= 700) {
            skillsContainer.classList.add("skills__container--highlighted-mobile");
            skills.forEach(elem => {
                if (elem.id !== skill) {
                    elem.classList.add("--disabled");
                }
            }); // functionalities for mobile
        } else {
            skillsContainer.classList.add(`skills__container--highlight-${skill}`);
            skillsContainer.classList.add("--highlight-model");
        }
    },
    reset () {
        skills.forEach(elem => {
            let skill = elem.id;
            skillsContainer.classList.remove(`skills__container--highlight-${skill}`);
            skillsContainer.classList.remove("skills__container--highlighted-mobile"); // functionalities for mobile
            elem.classList.remove("--disabled"); // functionalities for mobile

            elem.classList.add("--hover-ef");
        })
        skillsContainer.classList.remove("--highlight-model");
    },
    disableClick (elem) {
        elem.classList.remove("--hover-ef");
    },
    animate () {
        skillsContainer.classList.add("fade-animation--enabled");
        setTimeout(() => { 
            skillsContainer.classList.remove("fade-animation--enabled") 
        }, animationTime*2); // to reset animation, the 2 is for iteration-count synchrony;
    },
    justify () {
        skills.forEach(elem => {
            elem.classList.add("justify--enabled");
        });
    },
    removeJustify() {
        skills.forEach(elem => {
            elem.classList.remove("justify--enabled");
        });
    }
}

skills.forEach(elem => {
    elem.addEventListener("click", event => {
        let id = event.target.id;
        let elem = event.target;

        grid.animate();
        setTimeout(() => {
            if (localContent) content.hide(localContent);
            grid.reset(); // reset to standart container model;

            content.getContext(id);
            grid.highlightSkill(id);
            content.show(localContent);
            grid.disableClick(elem);
            grid.justify();
            back.show();
        }, animationTime);
    });
});

backBtn.addEventListener("click", () => {
    grid.animate();
    setTimeout(() => {
        content.hide(localContent);
        grid.reset();
        grid.removeJustify();
        back.hide();
    }, animationTime);
});

window.addEventListener("resize", () => {
    content.hide(localContent);
    grid.reset();
    grid.removeJustify();
    back.hide();
});