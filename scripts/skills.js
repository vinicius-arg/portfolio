const skillsContainer = document.querySelector(".skills__container");
const skillsElements = document.querySelectorAll(".skills__container article");
const back = document.querySelector(".fa-arrow-left");
const contentElements = document.querySelectorAll(".__content");

const skills = [...skillsElements];
const contents = [...contentElements];
const animationTime = 100;
let localContent = "";

skills.forEach(element => {
    element.addEventListener("click", event => {
        let id = event.target.id;
        highlightSkill(id);
        content.getContext(id);
        transition();
        animate.fadeIn(back);
        disableClick(event.target);
    });
});

back.addEventListener("click", () => {
    animate.fadeOut(back)
    transition();
    let gridTemplate = `"a a b""c d d""e e f"`;
    gridAssign(gridTemplate);
});

const content = {
    getContext (id) {
        contents.forEach(element => {
            if (element.parentElement.id === id) {
                localContent = element;
            }
        });
    },
    hide (content) {
        content.classList.remove("__content--enabled");
        animate.fadeOut(content);
    },
   show (content) {
        content.classList.add("__content--enabled");
        animate.fadeIn(content);
    }
}

const animate = {
    fadeIn (element) {
        element.style.animationName = "fade-in";
        element.style.pointerEvents = "auto";
    },
    fadeOut (element) {
        element.style.animationName = "fade-out";
        element.style.pointerEvents = "none";
    },
    grid () {
        skills.forEach(element => {
            element.style.animationName = "fade-out";
            setTimeout(() => {
                element.style.animationName = "";
            },200); // to reset animation
        });
    }
}

const grid = {

}

function disableClick (element) {
    element.classList.remove("--hover-ef");
    element.style.pointerEvents = "none";
}

function highlightSkill (s) {
    let otherSkillsId = [];
    skills.forEach(element => {
        if (element.id !== s) {
            otherSkillsId.push(element.id);
        }
    });

    let otherSkillsStr = otherSkillsId.join(" ");
    let gridTemplate = `"${s} ${s} ${s} ${s} ${s}""${s} ${s} ${s} ${s} ${s}""${s} ${s} ${s} ${s} ${s}""${s} ${s} ${s} ${s} ${s}""${otherSkillsStr}"`;

    gridAssign(gridTemplate);
}

function resetHoverEffects (element) {
    element.classList.add("--hover-ef");
}

function resetPointerEvents (element) {
    element.style.pointerEvents = "auto";
}

function gridAssign (template) {
    if(localContent) {
        content.hide(localContent);
    } // to hide content before get a new context

    setTimeout(() => {
        skillsContainer.style.gridTemplateAreas = template;
        content.show(localContent);
    }, animationTime); // mudar isso? show content num timeout separado, sim, o erro é aqui
}

function transition () {
    animate.grid();
    skills.forEach(resetHoverEffects);
    skills.forEach(resetPointerEvents);
    content.hide(localContent);
}