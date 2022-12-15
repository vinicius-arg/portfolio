const skillsContainer = document.querySelector(".skills__container");
const skillsElements = document.querySelectorAll(".skills__container article");
const back = document.querySelector(".fa-arrow-left");
const contentElements = document.querySelectorAll(".__content");

const skills = [...skillsElements];
const contents = [...contentElements];
const animationTime = 100;
let localContent;

skills.forEach(element => {
    element.addEventListener("click", event => {
        let id = event.target.id;
        highlightSkill(id);
        if(localContent) {
            hideContent(localContent);
        } // to hide content before get a new context
        getContentContext(id);
        transition();
        fadeIn(back);
        disableClick(event.target);
        showContent(localContent);
    });
});

back.addEventListener("click", () => {
    fadeOut(back)
    transition();
    let gridTemplate = `"a a b""c d d""e e f"`;
    gridTemplateAssign(gridTemplate);
});

function getContentContext (id) {
    contents.forEach(element => {
            if (element.parentElement.id === id) {
                localContent = element;
            }
        });
}

function hideContent (content) {
    content.classList.remove("__content--enabled");
    fadeOut(content);
}

function showContent (content) {
    content.classList.add("__content--enabled");
    fadeIn(content);
}

function fadeIn (element) {
    element.style.animationName = "fade-in";
    element.style.pointerEvents = "auto";
}

function fadeOut (element) {
    element.style.animationName = "fade-out";
    element.style.pointerEvents = "none";
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

    gridTemplateAssign(gridTemplate);
}

function resetHoverEffects (element) {
    element.classList.add("--hover-ef");
}

function resetPointerEvents (element) {
    element.style.pointerEvents = "auto";
}

function animateGrid () {
    skills.forEach(element => {
        element.style.animationName = "fade-out";
        setTimeout(() => {
            element.style.animationName = "";
        },200); // to reset animation
    });
}

function gridTemplateAssign (template) {
    setTimeout(() => {
        skillsContainer.style.gridTemplateAreas = template;
    }, animationTime);
}

function transition () {
    animateGrid();
    skills.forEach(resetHoverEffects);
    skills.forEach(resetPointerEvents);
    hideContent(localContent);
}