//! Tips
// collect elements to constants (e.g. startButton, secondsFiels, minutesField, ring)
// add event listener on startButton and on click:
// if it was START that was pressed, start interval with function, which will change values of minutes and seconds every interval;
// if it was STOP that was pressed, stop interval;
// ...
// Good luck...
{
    const startButton = document.querySelector(".start");
    const minutesField = document.querySelector(".minutes input");
    const secondsField = document.querySelector(".seconds input");
    const ring = document.querySelector(".ring");

    let interval;
    let complete = true;
    let start = true;

    function toggleCountdown() {
        if (startButton.textContent === "start") {
            if (complete == true) {
                complete = false;
                if (start == false) {
                    ring.classList.toggle("ending");
                }
                start = false;
                minutesField.value = prompt("How many minutes?");
                secondsField.value = prompt("How many seconds?");
            }
            startButton.textContent = "stop";
            interval = setInterval(countdown, 1000);
        } else if (startButton.textContent === "stop") {
            startButton.textContent = "start";
            clearInterval(interval);
        }
    }

    function countdown() {
        let seconds = secondsField.value;
        let minutes = minutesField.value;
        if (seconds > 0) {
            secondsField.value--;
            if (seconds < 10) {
                secondsField.value = `0${secondsField.value}`;
            }
        } else if (seconds == 0 && minutes > 0) {
            minutesField.value--;
            if (minutes < 10) {
                minutesField.value = `0${minutesField.value}`;
            }
            secondsField.value = 59;
        } else if (seconds == 0 && minutes == 0) {
            startButton.textContent = "start";
            ring.classList.toggle("ending");
            complete = true;
            clearInterval(interval);
        }
    }

    startButton.addEventListener("click", toggleCountdown);
}
