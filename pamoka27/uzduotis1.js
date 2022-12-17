// Task 1

{
    const form = document.querySelector("#L");

    function drawL(event) {
        event.preventDefault();
        const size = document.querySelector("#Linput").value;
        let L = document.querySelector("#Ltext");
        let output = "";
        for (let i = 0; i < size; i++) {
            output += "L";
            if (i + 1 == size) {
                output += "L".repeat(size - 1);
            }
            output += "<br>";
        }
        L.innerHTML = output;
    }

    form.addEventListener("input", drawL);
}

// Task 2

{
    const form = document.querySelector("#C");

    function drawC(event) {
        event.preventDefault();
        const size = document.querySelector("#Cinput").value;
        let C = document.querySelector("#Ctext");
        if (size < 3) {
            C.innerHTML = "C letter size must be at least 3";
            return;
        }
        let output = "C".repeat(size);
        for (let i = 1; i < size; i++) {
            output += "<br>C";
            if (i + 1 == size) {
                output += "C".repeat(size - 1);
            }
        }
        C.innerHTML = output;
    }

    form.addEventListener("input", drawC);
}

// Task 3

{
    const form = document.querySelector("#numbers");

    function findCloser(event) {
        event.preventDefault();
        const one = document.querySelector("#oneNum").value;
        const two = document.querySelector("#twoNum").value;
        if (Math.abs(one - 100) < Math.abs(two - 100)) {
            alert(`${one} is closer to 100`);
        } else if (Math.abs(one - 100) > Math.abs(two - 100)) {
            alert(`${two} is closer to 100`);
        } else {
            alert("both numbers are equally close");
        }
    }

    form.addEventListener("submit", findCloser);
}

// Task 4

{
    const number = Math.floor(Math.random() * 5) + 1;
    console.log(number);
    const form = document.querySelector("#guess");
    let counter = 1;
    let guessed = false;

    function checkGuess(event) {
        event.preventDefault();
        const guess = document.querySelector("#guessNum").value;

        if (!guessed) {
            if (guess == number) {
                alert(`corrrect after ${counter} guesses`);
                guessed = true;
            } else if (guess != number) {
                if (guess > 5 || guess < 1) {
                    alert("You need to guess between 1 and 5");
                } else {
                    alert(`${guess} is a wrong guess`);
                    counter++;
                }
            }
        } else {
            alert("You have already guessed");
        }

        document.querySelector("#guessNum").value = "";
    }

    form.addEventListener("input", checkGuess);
}
