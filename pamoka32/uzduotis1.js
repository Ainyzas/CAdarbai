const Name = document.querySelector("input#name");
const age = document.querySelector("input#age");
const gender = document.querySelectorAll(`input[type="radio"]`);
const address = document.querySelector("input#address");
const form = document.querySelector("form");
const body = document.querySelector("body");

let p = document.createElement("p");
body.append(p);

function submitData(event) {
    event.preventDefault();
    let selected;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selected = `${gender[i].id}`;
        }
    }
    p.innerText = `Name: ${Name.value}\nAge: ${age.value}\nGender: ${selected}\nAddress: ${address.value}\n`;
}

form.addEventListener("submit", submitData);
