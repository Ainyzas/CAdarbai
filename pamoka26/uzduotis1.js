// Task 1

{
    const text = document.querySelector("h1");
    function calculatePrice(event) {
        event.preventDefault();
        const age = document.querySelector("input").value;
        const price = 6;

        if (age <= 16) {
            text.textContent = `${price * 0.5} eur uz bilieta`;
        } else if (age >= 60) {
            text.textContent = `${(2 / 3) * price} eur uz bilieta`;
        } else {
            text.textContent = `${price} eur bilieto kaina`;
        }
    }

    document.querySelector("form").addEventListener("submit", calculatePrice);
}

// Task 2

{
    const form = document.querySelector("#army");
    const result = document.querySelector("#result");

    function confirmArmy(event) {
        event.preventDefault();
        const age = document.querySelector("#age").value;
        const criminal = document.querySelector("#criminal").checked;
        if (age >= 18 && age <= 30 && criminal == false) {
            result.textContent = "You will serve the army";
        } else if (criminal == true) {
            result.textContent = "You will not serve since you are a criminal";
        } else {
            result.textContent = "You will not serve";
        }
    }

    form.addEventListener("submit", confirmArmy);
}

// Task 3

{
    const form = document.querySelector("#listForm");

    function writeList(event) {
        event.preventDefault();
        const name = document.querySelector("#name").value;
        const number = document.querySelector("#number");
        const list = document.querySelector("#list");
        list.innerHTML = "";
        for (let i = 0; i < number.value; i++) {
            const listItem = document.createElement("li");
            listItem.innerText = name;
            list.append(listItem);
        }
    }

    form.addEventListener("input", writeList);
}

// Task 4

{
    const form = document.querySelector("#triangle");

    function createTriangle(event) {
        event.preventDefault();
        const size = document.querySelector("#size").value;
        let triangle = document.querySelector("div");
        let output = "";
        let counter = 1;
        for (let i = 0; i < size; i++) {
            output += "*".repeat(counter);
            counter += 2;
            output += "<br>";
            triangle.innerHTML = output;
        }
    }
    form.addEventListener("input", createTriangle);
}
