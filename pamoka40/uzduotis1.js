// Task 1
{
    const table = document.querySelector("table");

    const nameInput = document.querySelector('input[name="name"]');
    const lastNameInput = document.querySelector('input[name="last-name"]');
    const numberInput = document.querySelector('input[name="number"]');
    const hasDogInput = document.querySelector('input[name="has-dog"]');

    document.querySelector("#get").addEventListener("click", async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/todos/2");
        const results = await data.json();
        console.log(results);
    });

    document.querySelector("#post").addEventListener("click", async () => {
        const name = nameInput.value;
        const lastName = lastNameInput.value;
        const number = numberInput.value;
        const hasDog = hasDogInput.checked;

        const body = {
            name,
            lastName,
            number,
            hasDog,
        };

        const options = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        };

        const data = await fetch("https://jsonplaceholder.typicode.com/posts", options);
        const results = await data.json();
        console.log(results);

        generateTableEntry(results);
    });

    function generateTableEntry(entry) {
        const tableRow = document.createElement("tr");

        const nameTd = document.createElement("td");
        nameTd.textContent = entry.name;
        const lastNameTd = document.createElement("td");
        lastNameTd.textContent = entry.lastName;
        const numberTd = document.createElement("td");
        numberTd.textContent = entry.number;
        const hasDogTd = document.createElement("td");
        hasDogTd.textContent = entry.hasDog === true ? "Has Dog" : "No Dog";

        tableRow.append(nameTd, lastNameTd, numberTd, hasDogTd);

        table.append(tableRow);
    }
}
