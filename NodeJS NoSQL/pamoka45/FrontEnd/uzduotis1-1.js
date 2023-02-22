BASE_URL = "http://127.0.0.1:3000/names";
const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
const button = document.querySelector("button");

async function addName() {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            inputName: inputName.value,
            inputSurname: inputSurname.value,
        }),
    });
}

button.addEventListener("click", addName);
