// Task 1

{
    function Person(name, lastName, birthYear) {
        this.name = name;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    Person.prototype.getName = function () {
        return `${this.name} ${this.lastName}`;
    };

    Person.prototype.showBirthday = function () {
        const year = new Date();
        return year.getFullYear() - this.birthYear;
    };

    const person = new Person("Ainas", "Puidokas", 2003);
    console.log("Task 1:");
    console.log(person.getName());
    console.log(person.showBirthday());
}

// Task 2

{
    class Movie {
        constructor(name, year, director, budget, income) {
            this.name = name;
            this.year = year;
            this.director = director;
            this.budget = budget;
            this.income = income;
        }
        getIntroduction() {
            return `Film: ${this.name}\nRelease: ${this.year}\nDirector: ${this.director}`;
        }
        getProfit() {
            return this.income > this.budget ? `Total profit: $${this.income - this.budget}` : `Total loss: $${this.budget - this.income}`;
        }
    }
    console.log("\nTask 2:");
    let movie = new Movie("Avatar", 2022, "James Cameron", 150000000, 1000000000);
    let movie2 = new Movie("Avatar Sequel", 2025, "James Cameron", 400000000, 15000000);
    console.log(movie.getIntroduction());
    console.log(movie.getProfit());
    console.log("\n");
    console.log(movie2.getIntroduction());
    console.log(movie2.getProfit());
}

// Task 3

{
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }

    class Rabbit extends Animal {
        constructor(name) {
            super(name);
            this.created = new Date().getFullYear();
        }
    }
    console.log("\nTask 3:");
    let rabbit = new Rabbit("White Rabbit");
    console.log(rabbit);
    console.log(rabbit.created);
}

// Task 4

{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getIntroduction() {
            return `Make: ${this.make}\nModel: ${this.model}`;
        }
        getAge() {
            return new Date().getFullYear() - this.year <= 10 ? `10 metu arba naujesnis` : `11 metu arba senesnis`;
        }
    }

    class Motorcycle extends Car {
        constructor(make, model, year, wheels) {
            super(make, model, year);
            this.wheels = wheels;
        }
        getWheelsNumber() {
            if (this.wheels === 3) {
                return "motociklas turi 3 ratus";
            } else if (this.wheels === 2) {
                return "motociklas turi 2 ratus";
            }
        }
    }
    console.log("\nTask 4:");
    let car = new Car("Mazda", "3", 2003);
    let motorcycle = new Motorcycle("Yamaha", "something", 2015, 3);
    console.log(car.getIntroduction());
    console.log(car.getAge());
    console.log("\n");
    console.log(motorcycle.getIntroduction());
    console.log(motorcycle.getAge());
    console.log(motorcycle.getWheelsNumber());
}
