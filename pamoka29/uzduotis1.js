// Task 1

{
    let car = {
        doors: 4,
        color: "red",
        brand: "Mazda",
    };
    console.log(car);
}

// Task 2

{
    const form = document.querySelector("#name");

    const name = document.querySelector("#nameInput");
    const surname = document.querySelector("#surnameInput");

    function addObject(event) {
        event.preventDefault();
        const person = {
            name: name.value,
            surname: surname.value,
        };
        name.value = "";
        surname.value = "";
    }

    form.addEventListener("submit", addObject);
}

// Task 3

{
    const form = document.querySelector("#legal");

    const name = document.querySelector("#legal #name");
    const age = document.querySelector("#legal #number");

    function addPerson(event) {
        event.preventDefault();
        const isLegal = age.value >= 18 ? true : false;
        const person = {
            name: name.value,
            isLegalAge: isLegal,
        };
        console.log(person);
        name.value = "";
        age.value = "";
    }

    form.addEventListener("submit", addPerson);
}
