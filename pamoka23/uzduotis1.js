//  Task 1 do for loop that prints out entire array of names

{
    const names = ["Jurgis", "Matas", "Mantas", "Jonas", "Paulius", "Juozas", "Nojus", "Aleksandras", "Nortautas", "Laurynas"];
    for (let i = 0; names.length > i; i++) {
        console.log(names[i]);
    }
}

// Task 2 do while loop that prints name five times

{
    const name = "Ainas";
    let i = 0;
    while (i < 5) {
        console.log(name);
        i++;
    }
}

// Task 3 make do while loop that prints name once

{
    let i = 0;
    do {
        console.log("Ainas");
    } while (i > 0);
}

// Task 4 Create array containing 5 Strings. One of them has to be your name
// Loop over that array using for but print only when value is your name.

{
    const strings = ["stuff", "more stuff", "Ainas", "even more stuff", "yep, stuff"];

    for (let i = 0; i < strings.length; i++) {
        if (strings[i] == "Ainas") {
            console.log(strings[i], "which is in position " + (i + 1));
        }
    }
}

// random task ask for input with loop and then console log with loop the inputs

{
    const names = new Array(5);

    for (let i = 0; i < names.length; i++) {
        names[i] = prompt("insert name");
    }

    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

//  Task 5

{
    let buyMore = true;
    const delivery = 5;
    while (buyMore) {
        let price = prompt("Iveskite prekes kaina");
        let isDeliveryNeeded = confirm("Ar reikalingas pristatymas i namus?");
        let city;

        if (isDeliveryNeeded == true) {
            city = prompt("I kuri miesta reikes vezti?");
        }

        if (isDeliveryNeeded == false) {
            console.log(`Prekes kaina ${price}$ \nPreke galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a`);
        } else if (price >= 50 || city == "Vilnius") {
            console.log(`Prekes kaina ${price}$ \nPreke bus pristatyta nemokamai i ${city} per 1-3 dienas`);
        } else {
            console.log(
                `Prekes kaina ${price}$ \nPristatymas kainuos ${delivery}$ \nIs viso kainuos ${
                    +price + delivery
                }$ \nPreke bus pristatya i ${city} per 1-3 dienas`
            );
        }

        let question = confirm("Ar norite dar ka pirktis?");
        if (question == false) {
            buyMore = false;
        }
    }
}
