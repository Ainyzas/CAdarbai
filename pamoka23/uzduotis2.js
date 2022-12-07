// CodeAcademy Online Tasks
// Task 1

{
    const name = "Ainas";
    const amount = 10;
    for (let i = 0; i < amount; i++) {
        console.log(`${i}. ${name}`);
    }
}

// Task 2

{
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
}

{
    let car = prompt("Enter your car manufacturer");

    if (["VW", "Audi", "Bentley", "Bugatti", "Lambo", "Porsche"].includes(car)) {
        console.log("Your car belongs to VW club");
    } else if (["BMW", "Mini", "Rolls-Royce"].includes(car)) {
        console.log("Your car belongs to BMW club");
    } else {
        console.log("Your car belongs nether club");
    }
}
