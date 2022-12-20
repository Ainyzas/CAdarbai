// Task 1

{
    const headers = document.querySelectorAll(".header");

    headers[0].style.fontSize = "16px";
    headers[0].style.color = "crimson";

    headers[1].setAttribute("style", "color: crimson; font-size: 16px");

    headers[2].style.cssText = "color: crimson; font-size: 16px";

    headers.forEach(function (header) {
        header.addEventListener("click", function () {
            header.setAttribute("style", "color: crimson; font-size: 32px; text-align: center");
        });
    });
}

// Task 2

{
    const button = document.querySelector("#hello");

    button.setAttribute("style", "position: absolute; top: 0; left: 0");
    let toggle = 0;

    function changePosition() {
        switch (toggle) {
            case 0:
                button.setAttribute("style", "position: absolute; top: 0; right:0");
                toggle++;
                break;
            case 1:
                button.setAttribute("style", "position: absolute; bottom: 0; right:0");
                toggle++;
                break;
            case 2:
                button.setAttribute("style", "position: absolute; bottom: 0; left:0");
                toggle++;
                break;
            case 3:
                button.setAttribute("style", "position: absolute; top: 0; left:0");
                toggle = 0;
                break;
        }
    }

    button.addEventListener("click", changePosition);
}

// Task 3 and 4

{
    function random() {
        return Math.floor(Math.random() * 256);
    }

    const button = document.querySelector("#color");
    /* const colors = ["red", "green", "blue", "yellow"];

       function changeColor() {
            const random = Math.floor(Math.random() * 4);
            button.style.backgroundColor = colors[random];
        } */

    function changeColor() {
        button.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
    }

    button.addEventListener("click", changeColor);
}
