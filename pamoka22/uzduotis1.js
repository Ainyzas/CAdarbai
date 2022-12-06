// Task 1

{
    let number = prompt("Iveskite skaiciu:");

    if (number % 2 == 0) {
        console.log("Skaicius lyginis.");
    } else {
        console.log("Skaicius nelyginis.");
    }

    number % 2 == 0 ? console.log("Skaicius lyginis") : console.log("Skaicius nelyginis");
}

// Task 2

{
    let group = prompt("prasome ivesti muzikantu skaiciu:");

    if (group == 0) {
        console.log("Tai nera grupe");
    } else if (group == 1) {
        console.log("Tai yra Solo");
    } else if (group == 2) {
        console.log("Tai yra duetas");
    } else if (group == 3) {
        console.log("Tai yra trio");
    } else if (group == 4) {
        console.log("Tai yra kvartetas");
    } else if (group > 4) {
        console.log("Tai yra didele grupe");
    }

    switch (true) {
        case group == 0:
            console.log("Tai nera grupe");
            break;
        case group == 1:
            console.log("Tai yra Solo");
            break;
        case group == 2:
            console.log("Tai yra duetas");
            break;
        case group == 3:
            console.log("Tai yra trio");
            break;
        case group == 4:
            console.log("Tai yra kvartetas");
            break;
        case group >= 5:
            console.log("Tai yra didele grupe");
            break;
        default:
            console.log("Nesuprantama ka norite pasakyti");
    }
}

// CodeAcademy Online Praktika
// Task 1 and 3

{
    const legalAge = 20;
    let clientAge = prompt("Iveskite savo amziu");
    if (clientAge >= legalAge) {
        alert("Jus esate legalaus amziaus");
    } else {
        alert("Jus neesate lagalaus amziaus");
    }

    switch (true) {
        case clientAge >= 1 && clientAge <= 18:
            console.log("Child");
            break;
        case clientAge >= 19 && clientAge <= 99:
            console.log("Adult");
            break;
        default:
            console.log("Invalid age");
    }
}

// Task 2

{
    let name = prompt("Irasykite savo varda");
    if (name.length > 6) {
        console.log("ilgas vardas");
    }
}

// Task 4

{
    let car = prompt("Irasykite savo megstamiausia automobilio brand");

    switch (true) {
        case car == "Toyota" || car == "Lexus":
            console.log("Priklauso Toyota grupei");
            break;
        case car == "Hyundai" || car == "KIA":
            console.log("Priklauso Hyundai Motor Group");
            break;
        case car == "Honda" || car == "Acura":
            console.log("Priklauso Honda grupei");
            break;
        case car == "BMW" || car == "Mini" || car == "Rolls Royce":
            console.log("Priklauso BMW grupei");
            break;
        case car == "Audi" || car == "Bentley" || car == "Bugatti" || car == "Volkswagen" || car == "Skoda" || car == "Porsche":
            console.log("Priklauso Volkswagen Group");
            break;
    }
}
