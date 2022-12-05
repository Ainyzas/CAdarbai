console.log("Hello world in file");

//! variables
// global variables
pirmasKintamasis = 2022;
console.log(pirmasKintamasis);

// var variable - function scoped
var secondVariable = 2023;
console.log(secondVariable);

// let variable - block scoped
let thirdVariable = "Christmas";
console.log(thirdVariable);

{
    let firstName = "Marijus";
    console.log(firstName);
}

//const variable - block scoped constant
const season = "Winter";
console.log(season);

//! Basic data types
//String

const workplace = "CodeAcademy";
const groupName = "CAFE04";
const totalName = `Total name is : ${workplace} and ${groupName}`;
console.log(totalName);

//Number

const currentYear = 2022;
const temperature = 3.77;
console.log(currentYear);
console.log(temperature);

//Boolean

const isDark = true;

console.log(isDark);

//Array
const colors = ["red", 15, true];

console.log(colors);

//Object
const car = {
    color: "blue",
    model: "Audi",
    year: 2022,
    isFrontWheelDriven: true,
};

console.log(car);
console.log(car.model);

console.log(typeof car);
console.log(typeof currentYear);

//! Basic operators

const a = 10;
const b = 3;
const c = a + b;
console.log(c);
const d = a - b;
console.log(d);
const e = a * b;
console.log(e);
const f = a / b;
console.log(f);
const g = a % b;
console.log(g);

// let answer = confirm('Are you gay?');
// console.log(answer);

// let promptAge = prompt("What is your age?", 18);
// console.log(promptAge);

// Task 1
const string1 = "Alex";
const string2 = "Montenegro";
const num = 5;
console.log(string1, string2, num);

const taskName = "John";
const admin = taskName;
console.log(admin);

// Task 2
const x = 50;
const y = 10;

const suma = x + y;
const skirtumas = x - y;
const daugyba = x * y;
const dalyba = x / y;

console.log("suma:" + suma, "Skirtumas:" + skirtumas, "Daugyba:" + daugyba, "Dalyba:" + dalyba);

// Task 3

{
    let birthDay = "gegužės 12";
    let name = prompt("What is your name?");

    console.log(name + " yra gimęs " + birthDay);
}

console.log("Hello world");
alert("I love JavaScript");
const confirmation = confirm("Ready to learn more?");

if (confirmation == true) {
    const taskNum = prompt("Enter a value between 1 and 10");
    console.log(taskNum);
}
