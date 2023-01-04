// Task: Write a function called positiveNumbers that takes in an array of numbers and returns a new array containing only the positive numbers from the input array.
// For example, the following input array:
// [1, -2, 3, -4, 5]

{
    let array = [1, -2, 3, -4, 5];

    function positiveNumbers(arr) {
        return arr.filter(number => number > 0);
    }

    console.log(positiveNumbers(array));
}

// Task 1

{
    const fn = string => string.charAt(string.length - 1);

    console.log("\nTask 1:");
    console.log(fn("Aleksandras"));
}

// Task 2

{
    const fn = string => string.split("").reverse().join("").toLowerCase();

    console.log("\nTask 2:");
    console.log(fn("Petras"));
}

// Task 3

{
    function fn(arr, largest) {
        arr.forEach(number => {
            if (number > largest && number < 0) {
                largest = number;
            }
        });
        return largest;
    }

    console.log("\nTask 3:");
    console.log(fn([-1, -100, -5, 10, 0, 11], -1000000));
}

// Task 4

{
    const fn = size => {
        const array = [];
        for (let i = 0; i < size; i++) {
            array[i] = Math.floor(Math.random() * 10) + 1;
        }
        return array;
    };

    console.log("\nTask 4:");
    console.log(fn(5));
}

// Task 5

{
    const fn = arr => arr.sort((a, b) => (a.name > b.name ? 1 : -1)).sort((a, b) => a.age - b.age);

    console.log("\nTask 5:");
    console.log(
        fn([
            { name: "Alfredas", age: 25 },
            { name: "Jonas", age: 25 },
            { name: "Kasparas", age: 20 },
        ])
    );
}

// Task 6

{
    function isHoliday(year, month, day) {
        const date = new Date(`${year}-${month}-${day}`).toLocaleString("default", { weekday: "long" });
        const holidays = ["2023-01-16", "2023-01-20"];
        if (date === "Saturday" || date === "Sunday" || holidays.some(holiday => new Date(`${year}-${month}-${day}`).toLocaleDateString("en-CA") === holiday) === true) {
            return true;
        }
        return false;
    }

    console.log("\nTask 6:");
    console.log(isHoliday(2023, 01, 22));
}

// Task 7

{
    const missingNumber = array => array.find((x, i) => x + 1 !== array[i + 1]) + 1;

    console.log("\nTask 7:");
    console.log(missingNumber([1, 2, 3, 5, 6, 10]));
}

// Task 8

{
    const data = [
        { id: 1, first_name: "Lief", gender: "Female", car_model: "Corolla", car_year: 2002, shirt_size: "3XL" },
        { id: 2, first_name: "Danya", gender: "Male", car_model: "911", car_year: 2008, shirt_size: "XS" },
        { id: 3, first_name: "Marsha", gender: "Male", car_model: "V50", car_year: 2009, shirt_size: "XL" },
        { id: 4, first_name: "Clim", gender: "Genderqueer", car_model: "Sebring", car_year: 2000, shirt_size: "XS" },
        { id: 5, first_name: "Merlina", gender: "Polygender", car_model: "Corvette", car_year: 2012, shirt_size: "2XL" },
        { id: 6, first_name: "Danila", gender: "Genderfluid", car_model: "1 Series", car_year: 2011, shirt_size: "3XL" },
        { id: 7, first_name: "Homere", gender: "Male", car_model: "Sunbird", car_year: 1983, shirt_size: "S" },
        { id: 8, first_name: "Dayna", gender: "Non-binary", car_model: "Sigma", car_year: 1989, shirt_size: "2XL" },
        { id: 9, first_name: "Chickie", gender: "Agender", car_model: "Esteem", car_year: 1997, shirt_size: "L" },
        { id: 10, first_name: "Haley", gender: "Bigender", car_model: "Neon", car_year: 1999, shirt_size: "XL" },
        { id: 11, first_name: "Ajay", gender: "Genderqueer", car_model: "Edge", car_year: 2012, shirt_size: "3XL" },
        { id: 12, first_name: "Cyb", gender: "Bigender", car_model: "Tahoe", car_year: 2009, shirt_size: "XS" },
        { id: 13, first_name: "Ewell", gender: "Agender", car_model: "9-7X", car_year: 2007, shirt_size: "XS" },
        { id: 14, first_name: "Charyl", gender: "Genderqueer", car_model: "Sidekick", car_year: 1994, shirt_size: "XL" },
        { id: 15, first_name: "Ottilie", gender: "Genderfluid", car_model: "Continental GTC", car_year: 2012, shirt_size: "M" },
        { id: 16, first_name: "Sammy", gender: "Genderqueer", car_model: "Sonata", car_year: 2013, shirt_size: "XS" },
        { id: 17, first_name: "Giorgio", gender: "Genderfluid", car_model: "S40", car_year: 2011, shirt_size: "2XL" },
        { id: 18, first_name: "Cedric", gender: "Agender", car_model: "Thunderbird", car_year: 2006, shirt_size: "S" },
        { id: 19, first_name: "Holli", gender: "Non-binary", car_model: "Prius c", car_year: 2012, shirt_size: "2XL" },
        { id: 20, first_name: "Neil", gender: "Genderqueer", car_model: "Taurus", car_year: 2003, shirt_size: "M" },
        { id: 21, first_name: "Lynnett", gender: "Female", car_model: "Mirage", car_year: 1994, shirt_size: "M" },
        { id: 22, first_name: "Thacher", gender: "Genderqueer", car_model: "Navigator L", car_year: 2012, shirt_size: "S" },
        { id: 23, first_name: "Glenna", gender: "Non-binary", car_model: "Aero 8", car_year: 2008, shirt_size: "2XL" },
        { id: 24, first_name: "Nicol", gender: "Agender", car_model: "GTO", car_year: 1968, shirt_size: "XS" },
        { id: 25, first_name: "Bernadine", gender: "Non-binary", car_model: "928", car_year: 1991, shirt_size: "S" },
        { id: 26, first_name: "Joanna", gender: "Genderqueer", car_model: "S60", car_year: 2013, shirt_size: "XS" },
        { id: 27, first_name: "Celesta", gender: "Female", car_model: "Esprit", car_year: 2001, shirt_size: "L" },
        { id: 28, first_name: "Adi", gender: "Agender", car_model: "RAV4", car_year: 2008, shirt_size: "S" },
        { id: 29, first_name: "Nan", gender: "Non-binary", car_model: "Town Car", car_year: 2007, shirt_size: "3XL" },
        { id: 30, first_name: "Reynold", gender: "Female", car_model: "Blackwood", car_year: 2003, shirt_size: "2XL" },
        { id: 31, first_name: "Raina", gender: "Non-binary", car_model: "Tempo", car_year: 1987, shirt_size: "S" },
        { id: 32, first_name: "Eward", gender: "Non-binary", car_model: "Milan", car_year: 2008, shirt_size: "2XL" },
        { id: 33, first_name: "Teresa", gender: "Genderqueer", car_model: "Econoline E150", car_year: 1997, shirt_size: "3XL" },
        { id: 34, first_name: "Delmar", gender: "Female", car_model: "Legend", car_year: 1990, shirt_size: "XL" },
        { id: 35, first_name: "Koral", gender: "Agender", car_model: "B-Series", car_year: 1992, shirt_size: "3XL" },
        { id: 36, first_name: "Karil", gender: "Non-binary", car_model: "MR2", car_year: 1986, shirt_size: "S" },
        { id: 37, first_name: "Stepha", gender: "Polygender", car_model: "Daewoo Magnus", car_year: 2004, shirt_size: "S" },
        { id: 38, first_name: "Jaclyn", gender: "Genderfluid", car_model: "Grand Marquis", car_year: 2000, shirt_size: "M" },
        { id: 39, first_name: "Peria", gender: "Polygender", car_model: "Evora", car_year: 2011, shirt_size: "2XL" },
        { id: 40, first_name: "Cecelia", gender: "Genderfluid", car_model: "Accent", car_year: 1998, shirt_size: "L" },
        { id: 41, first_name: "Katha", gender: "Female", car_model: "RDX", car_year: 2011, shirt_size: "XS" },
        { id: 42, first_name: "Beverie", gender: "Male", car_model: "Probe", car_year: 1992, shirt_size: "2XL" },
        { id: 43, first_name: "Pavla", gender: "Polygender", car_model: "Colt", car_year: 1994, shirt_size: "XL" },
        { id: 44, first_name: "Sonnie", gender: "Non-binary", car_model: "Impreza", car_year: 2012, shirt_size: "3XL" },
        { id: 45, first_name: "Jordan", gender: "Genderqueer", car_model: "Cougar", car_year: 1994, shirt_size: "2XL" },
        { id: 46, first_name: "Court", gender: "Female", car_model: "Civic", car_year: 2005, shirt_size: "2XL" },
        { id: 47, first_name: "Berton", gender: "Female", car_model: "xB", car_year: 2012, shirt_size: "2XL" },
        { id: 48, first_name: "Maryl", gender: "Bigender", car_model: "LaCrosse", car_year: 2010, shirt_size: "XS" },
        { id: 49, first_name: "Robinson", gender: "Non-binary", car_model: "Dakota", car_year: 1992, shirt_size: "XS" },
        { id: 50, first_name: "Nerissa", gender: "Male", car_model: "F150", car_year: 2002, shirt_size: "3XL" },
    ];

    // Pasakykite skaičių kiek vyrų yra tarp šių duomenų (t.y. console'log skaičių).
    // Sukurkite masyvą, kuriuose būtų id visų žmonių, kurie turi automobilius naujesnius nei 2000 metai.
    // Sukurkite masyvą visų žmonių, kurių marškinių dydžiai XS arba S; ir surūšiuokite šį masyvą pagal vardus, A-Z tvarka (alfabetiškai).
    // Pakoreguokite trečią pratimą, kad masyve matytųsi tik id, vardas bei marškinių dydis.

    console.log("\nTask 8:");
    console.log(data.filter(person => person.gender === "Male").length);
    const newCars = data.filter(person => person.car_year > 2000).map(person => person.id);
    console.log(newCars);
    const smallShirts = data
        .filter(person => person.shirt_size === "XS" || person.shirt_size === "S")
        .sort((a, b) => (a.first_name > b.first_name ? 1 : -1))
        .map(person => ({
            id: person.id,
            first_name: person.first_name,
            shirt_size: person.shirt_size,
        }));
    console.log(smallShirts);
}
