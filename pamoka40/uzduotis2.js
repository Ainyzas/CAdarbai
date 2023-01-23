// Task 1

{
    const body = document.querySelector("body");
    const url = "https://magnetic-melon-yam.glitch.me/";
    let currentData = {};

    function createCheckbox() {
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", "isVip");
        body.append(checkbox);

        const checkboxLabel = document.createElement("label");
        checkboxLabel.setAttribute("for", "isVip");
        checkboxLabel.innerText = "VIP";
        body.append(checkboxLabel);
    }

    function createSearchForm() {
        const search = document.createElement("input");
        search.setAttribute("type", "search");
        search.setAttribute("id", "search");
        search.setAttribute("name", "search");
        body.appendChild(search);

        const searchButton = document.createElement("button");
        searchButton.innerHTML = "Search for name";
        searchButton.setAttribute("id", "searchButton");

        const form = document.createElement("form");
        form.append(search, searchButton);
        body.append(form);
    }

    function createTable() {
        const table = document.createElement("table");
        const header = document.createElement("tr");
        const tbody = document.createElement("tbody");

        const id = document.createElement("th");
        id.innerText = "ID";

        const image = document.createElement("th");
        image.innerText = "Image";

        const name = document.createElement("th");
        name.innerText = "Name";

        const surname = document.createElement("th");
        surname.innerText = "Surname";

        const city = document.createElement("th");
        city.innerText = "City";

        const color = document.createElement("th");
        color.innerText = "Fav Color";

        header.append(id, image, name, surname, city, color);
        table.append(header, tbody);
        body.append(table);
    }

    function addData(robotData) {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = "";

        robotData.forEach(robot => {
            const id = document.createElement("td");
            id.innerText = robot.id;

            const img = document.createElement("img");
            img.src = robot.image;
            img.setAttribute("alt", "UserPicture");
            const image = document.createElement("td");
            image.append(img);

            const [name, surname] = robot.name.split(" ");

            const firstName = document.createElement("td");
            firstName.innerText = name;

            const lastName = document.createElement("td");
            lastName.innerText = surname;

            const city = document.createElement("td");
            city.innerText = robot.city;

            const favColor = document.createElement("td");
            favColor.innerText = robot.fav_color;

            const tr = document.createElement("tr");
            tr.append(id, image, firstName, lastName, city, favColor);
            tbody.append(tr);
        });
    }

    createCheckbox();
    createSearchForm();
    createTable();

    document.querySelector("form").addEventListener("submit", e => {
        e.preventDefault();
        const searchString = document.getElementById("search").value.toLowerCase();
        addData(currentData.filter(robot => robot.name.toLowerCase().includes(searchString)));
    });

    document.getElementById("isVip").addEventListener("change", e => {
        addData(e.target.checked ? currentData.filter(robot => robot.vip) : currentData);
    });

    async function fetchData() {
        try {
            let response = await fetch(url);
            currentData = await response.json();
            addData(currentData);
        } catch (e) {
            console.log(e);
        }
    }

    fetchData();
}
