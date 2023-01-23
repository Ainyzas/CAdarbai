fetch("https://olive-bead-glazer.glitch.me")
    .then(response => response.json())
    .then(data => {
        const table = document.querySelector("table");

        let headers = "<tr><th>Brand</th><th>Model</th></tr>";
        table.innerHTML = headers;

        data.forEach(car => {
            let row = "<tr><td>" + car.brand + "</td><td>" + car.model + "</td></tr>";
            table.innerHTML += row;
        });
    })
    .catch(error => console.error(error));
