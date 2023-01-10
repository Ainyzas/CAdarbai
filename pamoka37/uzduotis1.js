/*
RACING GAME

The racing game solution should have the following functionality:

Prompt the user for the number of cars and distance of the race, and validate that the input is a positive integer
Create a class for a car with properties for its id, speed, and distance traveled, and methods for accelerating, slowing down, and moving the car
Create car objects and add them to the page as elements with styles applied
Periodically accelerate or slow down each car
Move the cars a certain distance and check if any of them have reached the finish line, displaying a winner text if necessary
Add an info text field below each car to display its speed and distance traveled
*/
//! Perdaryti su ECMA5;

{
    let carAmount = 0;
    let distance = 0;
    let cars = [];

    const getUserInput = () => {
        const validateInteger = input => input > 0 && Number.isInteger(input);
        while (!validateInteger(carAmount)) {
            carAmount = +prompt("insert amount of cars", 5);
        }
        while (!validateInteger(distance)) {
            distance = +prompt("insert race distance", 100);
        }
    };

    const drawCars = () => {
        for (let i = 0; i < carAmount; i++) {
            cars.push(new Car(i));
        }
        cars.forEach(car => {
            const draw = document.createElement("img");
            draw.setAttribute("src", "assets/f1car.png");
            draw.classList.add("car");
            draw.style.top = 100 * car.id + 110 + "px";
            document.body.append(draw);

            const info = document.createElement("div");
            info.classList.add("car-info");
            info.style.top = 100 * car.id + 170 + "px";
            info.textContent = `car: ${car.id + 1} distance: ${car.distance}\nspeed: ${car.speed}`;
            document.body.append(info);
        });
    };

    const drawFinish = () => {
        const finish = document.createElement("img");
        finish.setAttribute("src", "assets/finish.jpg");
        finish.classList.add("finishLine");
        finish.style.left = 100 + distance + "px";
        finish.style.top = 100 + "px";
        finish.style.height = carAmount * 100 + "px";
        document.body.append(finish);
    };

    const pace = () => {
        console.clear();
        cars.forEach(car => {
            Math.floor(Math.random() * 15) > 2 ? car.accelerate(Math.floor(Math.random() * 6) + 1) : car.slowdown(Math.floor(Math.random() * 3) + 1);
        });
    };

    const move = () => {
        cars.forEach(car => {
            car.move();
            document.querySelectorAll(".car")[car.id].style.left = car.distance + "px";
            document.querySelectorAll(".car-info")[car.id].style.left = car.distance + "px";
            document.querySelectorAll(".car-info")[car.id].textContent = `car: ${car.id + 1} distance: ${car.distance}\nspeed: ${car.speed}`;
        });
        cars.sort((a, b) => b.distance - a.distance);
        if (cars[0].distance >= distance) {
            declarewinner(cars[0]);
            clearInterval(paceInterval);
            clearInterval(moveInterval);
        }
    };

    const declarewinner = car => {
        const winner = document.createElement("div");
        winner.classList.add("winner-text");
        winner.textContent = `Winner is car number ${car.id + 1}`;
        document.body.append(winner);
    };

    class Car {
        constructor(id) {
            this.id = id;
            this.speed = 0;
            this.distance = 0;
        }
        accelerate(amount) {
            this.speed += amount;
            if (this.speed > 25) this.speed = 50;
        }
        slowdown(amount) {
            this.speed -= amount;
            if (this.speed < 0) this.speed = 0;
        }
        move() {
            this.distance += this.speed;
        }
    }

    getUserInput();
    drawCars();
    drawFinish();
    pace();

    const paceInterval = setInterval(pace, 2000);
    const moveInterval = setInterval(move, 500);
}
