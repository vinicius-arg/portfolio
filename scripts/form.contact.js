const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const submit = document.querySelector("#submit");

const inputArray = [name, email, message];

let ableSubmit = {
    name: false,
    email: false,
    message: false
};

inputArray.forEach(element => {
    element.addEventListener("input", function () {
        let id = element.id;
        if (this.value)  {
            ableSubmit[id] = true;
        } else {
            ableSubmit[id] = false;
        }

        classAssign();
    });
});

function classAssign () {
    if (verifySubmit()) {
        submit.classList.add("submit--enabled");
    } else {
        submit.classList.remove("submit--enabled");
    }
}

function verifySubmit () {
    const requiredKeys = 3;
    let count = 0;

    for (key in ableSubmit) {
        if (ableSubmit[key]) count++;
    }

    if (count === requiredKeys) {
        return true;
    } else {
        return false;
    }
}