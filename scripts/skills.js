const skillsContainer = document.querySelector(".skills__container");
const skills = [...skillsContainer.children];

const back = document.querySelector(".fa-arrow-left");

skills.forEach(element => {
    element.addEventListener("click", event => {
        let id = event.target.id;
        highlightSkill(id);

        event.target.classList.remove("--hover-ef");

        back.style.animationName = "fade-in";
    });
});

back.addEventListener("click", event => {
    back.style.animationName = "fade-out";

    let gridTemplate = `"a a b""c d d""e e f"`;
    skillsContainer.style.gridTemplateAreas = gridTemplate;
})

function highlightSkill (s) {
    let otherSkillsId = [];
    skills.forEach(element => {
        if (element.id !== s) {
            otherSkillsId.push(element.id);
        }
    });

    let otherSkillsStr = otherSkillsId.join(" ");
    let gridTemplate = `"${s} ${s} ${s} ${s} ${s}""${s} ${s} ${s} ${s} ${s}""${s} ${s} ${s} ${s} ${s}""${s} ${s} ${s} ${s} ${s}""${otherSkillsStr}"`;

    skillsContainer.style.gridTemplateAreas = gridTemplate;
}