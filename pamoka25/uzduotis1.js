// Task 1

// {
//     function nameCall(name) {
//         alert(`Hello ${name}`);
//     }
//     nameCall("Ainas");
// }

// Task 2

{
    function randomNum() {
        return Math.floor(Math.random() * 5) + 1;
    }
    console.log(randomNum());
}

// Task 3

{
    function nameLength(name, surname) {
        return name.length + surname.length;
    }
    console.log(nameLength("Ainas", "Puidokas"));
}

// Task 4

{
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    function getAlphabet(index) {
        return alphabet[index];
    }
    console.log(getAlphabet(1));
}

// Task 5

{
    function operators(n1, n2, operator) {
        switch (operator) {
            case "sum":
                return n1 + n2;
            case "sub":
                return n1 - n2;
            case "div":
                return n1 / n2;
            case "multi":
                return n1 * n2;
        }
        return console.log("Unknown operator inserted");
    }
    console.log(operators(4, 2, "multi"));
}

// Task 6

{
    function randomNum() {
        return Math.floor(Math.random() * 10) + 1;
    }
    function squareNum(number) {
        return number * number;
    }
    console.log(squareNum(randomNum()));
}

// Task 7

{
    function Hello() {
        document.querySelector("p").innerText = "Some rad text talking about me";
    }
    document.querySelector("button").addEventListener("click", Hello);
}

// Task 8

{
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);

    document.querySelector("#one").addEventListener("click", () => (randomNumber == 1 ? alert("yay") : alert("nay")));
    document.querySelector("#two").addEventListener("click", () => (randomNumber == 2 ? alert("yay") : alert("nay")));
    document.querySelector("#three").addEventListener("click", () => (randomNumber == 3 ? alert("yay") : alert("nay")));
}

// Task 9

{
    function pressed() {
        document.querySelector("h1").innerText = "Neklausote manęs";
    }
    const button = document.querySelectorAll(".btn").length;
    for (let i = 0; i < button; i++) {
        document.querySelectorAll(".btn")[i].addEventListener("click", pressed);
    }
}
