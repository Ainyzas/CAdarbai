// const form = document.getElementById("add-car-form");
// const notification = document.getElementById("notification");

// form.addEventListener("submit", event => {
//     event.preventDefault();

//     let brand = document.getElementById("brand-input").value;
//     let model = document.getElementById("model-input").value;

//     fetch("https://olive-bead-glazer.glitch.me", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ brand: brand, model: model }),
//     }).then(response => {
//         if (response.ok) {
//             notification.innerHTML = "Car added successfully!";
//         }
//     });
// });
