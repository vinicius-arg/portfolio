const skillsContainer = document.querySelector(".skills__container");
const skills = [...skillsContainer.children];

let faIcon;

skills.forEach(element => {
    element.addEventListener("click", event => {
        let id = event.target.id;
        highlightSkill(id);

        event.target.classList.remove("--hover-ef");

        if (!faIcon) { 
            faIcon = document.querySelector(`#${id} .fa-solid`); 
        }

        faIcon.classList.add("visible");
        console.log(faIcon);

        animateIcon();
    });
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

    skillsContainer.style.gridTemplateAreas = gridTemplate;
}

function animateIcon () {
    if (faIcon.style.opacity === 0) {
        let i = 0;
        const interval = 
        setInterval(() => {
                i += 0.1;
                faIcon.style.opacity = i;
            }, 20);
    
        setTimeout(() => {
            clearInterval(interval);
        }, 200);
    } else {
        let i = 1;
        const interval = 
        setInterval(() => {
                i -= 0.1;
                faIcon.style.opacity = i;
            }, 20);
    
        setTimeout(() => {
            clearInterval(interval);
        }, 200);
    }
}