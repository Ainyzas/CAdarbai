// Task 1
{
    const name = "Ainas";
    let i = 3;
    while (i > 0) {
        console.log(name);
        i--;
    }
}

// Task 2

{
    let combo = "";
    const name = "Ainas";
    let times = 3;
    do {
        combo += name;
        times--;
    } while (times > 0);
    console.log(combo);
}

// Task 3

{
    console.log(Math.cos(0));

    console.log(Math.floor(Math.random() * 5) + 1);

    console.log(Math.floor(Math.random() * (12 - 5 + 1)) + 5);

    const randomNumber = Math.floor(Math.random() * 5) + 1;
    if (randomNumber === 1) {
        alert("You won");
    } else {
        alert("Try again next time");
    }
}

// Task 4

{
    const text = document.querySelector(".bluetext span");
    text.textContent = "blue";
    console.log(text.innerHTML);
}

// Task 5

{
    const firstList = document.querySelector("ol li:first-child");
    const secondList = document.querySelector("ol li:nth-child(2)");
    const temporary = firstList.textContent;
    firstList.textContent = secondList.textContent;
    secondList.textContent = temporary;
}
