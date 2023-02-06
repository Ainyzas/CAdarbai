BASE_URL = "http://127.0.0.1:3000/names";
const list = document.querySelector("ul");

async function getNames() {
    const res = await fetch(BASE_URL);
    const data = await res.json();

    console.log(data);

    data.forEach(name => {
        displayName(name);
    });
}

function displayName(name) {
    const listName = document.createElement("li");
    listName.textContent = name;
    list.append(listName);
}

getNames();
