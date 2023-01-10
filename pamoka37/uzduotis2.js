// Task 1

{
    const filter = array => {
        return array.filter(value => Number.isInteger(value));
    };

    console.log(filter([1, 5, "a", "g", "z", 6]));
}

// Task 2

{
    const filter = string => {
        return string
            .split("")
            .map(value => (!Number.isInteger(+value) ? value.repeat(2) : value))
            .join("");
    };
    console.log(filter("Petras 123 Slekys"));
}

// Task 3

{
    const jazzify = array => {
        return array.map(value => (!value.endsWith("7") ? (value += "7") : value));
    };
    console.log(jazzify(["G", "F", "C", "Dm", "G", "E", "A", "F7", "E7", "A7", "Ab7", "Gm7", "C7"]));
}
