const skillsContainer = document.querySelector(".skills__container");
const skillsElements = document.querySelectorAll(".skills__container article");
const back = document.querySelector(".fa-arrow-left");

const skills = [...skillsElements];
const animationTime = 100;

skills.forEach(element => {
    element.addEventListener("click", event => {
        let id = event.target.id;
        highlightSkill(id);

        transitionEffects();

        event.target.classList.remove("--hover-ef");
        event.target.style.pointerEvents = "none";

        back.style.animationName = "fade-in";
        back.style.pointerEvents = "auto";
    });
});

back.addEventListener("click", () => {
    back.style.animationName = "fade-out";
    back.style.pointerEvents = "none";

    transitionEffects();

    let gridTemplate = `"a a b""c d d""e e f"`;
    gridTemplateAssign(gridTemplate);
});

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

function transitionEffects () {
    animateGrid();
    skills.forEach(resetHoverEffects);
    skills.forEach(resetPointerEvents);
}