// Introduction Task
{
    const students = [
        {
            id: 1,
            f_name: "Alex",
            l_name: "B",
            gender: "M",
            married: false,
            age: 17,
            paid: 250,
            courses: ["JavaScript", "React"],
        },
        {
            id: 2,
            f_name: "Ibrahim",
            l_name: "M",
            gender: "M",
            married: true,
            age: 32,
            paid: 150,
            courses: ["JavaScript", "PWA"],
        },
        {
            id: 3,
            f_name: "Rubi",
            l_name: "S",
            gender: "F",
            married: false,
            age: 27,
            paid: 350,
            courses: ["Blogging", "React", "UX"],
        },
        {
            id: 4,
            f_name: "Zack",
            l_name: "F",
            gender: "M",
            married: true,
            age: 36,
            paid: 250,
            courses: ["Git", "React", "Branding"],
        },
    ];

    // ForEach array method
    students.forEach(function (student, index) {
        // console.log(student, index);
    });

    // Map array method
    const fullNames = students.map(student => {
        return student.f_name + " " + student.l_name;
    });

    console.log("Map method:");
    console.log(fullNames);

    // Include array method
    const names = ["Ainas", "Rokas"];
    console.log("\nIncludes method:");
    console.log(names.includes("Ainas"));
    console.log(names.includes("Jonas"));

    // Filter array method
    const maleFilter = students.filter(student => student.gender === "M");

    console.log("\nFilter method:");
    console.log(maleFilter);

    // Reduce array method
    const reduce = [1, 3, 9];

    const sum = reduce.reduce((sum, value) => sum + value, 0);

    console.log("\nSum method:");
    console.log(sum);

    const balance = students.reduce((accountBalance, student) => accountBalance - student.paid, 1200);

    console.log(balance);

    // Some array method
    const hasUnderaged = students.some(student => student.age < 20);

    console.log("\nSome method:");
    console.log(hasUnderaged);

    // every array method
    const has2SelectedCourses = students.every(student => student.courses.length >= 2);

    console.log("\nevery method:");
    console.log(has2SelectedCourses);

    // Sort array method
    const words = ["Jonas", "Ainas", "Zoro"];
    const numbers = [85, 5, 200, 10, 105];

    console.log("\nSort method:");
    console.log(words.sort());
    console.log(numbers.sort((a, b) => a - b));

    // From array method
    const divs = document.querySelectorAll("div");
    console.log("\nFrom method:");
    console.log(divs);

    const divsArray = Array.from(divs);
    console.log(divsArray);

    const divContents = divsArray.map(div => div.textContent);
    console.log(divContents);

    // Find and FindIndex method
    const secondStudent = students.find(student => student.id === 2);
    console.log("\nFind method:");
    console.log(secondStudent);
}

// Task 1
{
    const array1 = [1, 2, 3, 14];
    const array2 = [2, 8, 15, -5];

    const array = [...array1, ...array2];

    const sum = array.reduce((sum, current) => sum + current, 0);
    console.log("\nTask 1:");
    console.log(sum);

    const sumMultiplied = array.map(number => number * 3).reduce((sum, current) => sum + current, 0);
    console.log(sumMultiplied);
}

// Task 2
{
    const data = ["car", "car", "truck", "truck", "bike", "walk", "car", "van", "bike", "walk", "car", "van", "car", "truck"];

    const means = data.reduce((total, current) => {
        if (total[current]) {
            total[current]++;
        } else {
            total[current] = 1;
        }
        return total;
    }, {});

    console.log("\nTask 2:");
    console.log(means);
}

// Task 3
{
    const people = [
        "Bernhard, Sandra",
        "Bethea, Erin",
        "Becker, Carl",
        "Bentsen, Lloyd",
        "Beckett, Samuel",
        "Blake, William",
        "Berger, Ric",
        "Beddoes, Mick",
        "Beethoven, Ludwig",
        "Belloc, Hilaire",
        "Begin, Menachem",
        "Bellow, Saul",
        "Benchley, Robert",
        "Blair, Robert",
        "Benenson, Peter",
        "Benjamin, Walter",
        "Berlin, Irving",
        "Benn, Tony",
        "Benson, Leana",
        "Bent, Silas",
        "Berle, Milton",
        "Berry, Halle",
        "Biko, Steve",
        "Beck, Glenn",
        "Bergman, Ingmar",
        "Black, Elk",
        "Berio, Luciano",
        "Berne, Eric",
        "Berra, Yogi",
        "Berry, Wendell",
        "Bevan, Aneurin",
        "Ben-Gurion, David",
        "Bevel, Ken",
        "Biden, Joseph",
        "Bennington, Chester",
        "Bierce, Ambrose",
        "Billings, Josh",
        "Birrell, Augustine",
        "Blair, Tony",
        "Beecher, Henry",
        "Biondo, Frank",
    ];

    const sorted = people.sort();
    console.log("\nTask 3:");
    console.log(sorted);
}

// Task 4
{
    console.log("\nTask 4:");
    console.log(sumNums([19, 5, 42, 2, -77]));
    console.log(sumNums([2, 9, 6, -1]));

    function sumNums(numbers) {
        return numbers.filter(number => number > 0).reduce((total, current) => total + current, 0);
    }
}

// Task 5
{
    const numbers = [5, 2, 4];

    console.log("\nTask 5:");
    console.log(getSum(numbers));

    function getSum(numbers) {
        let sum = numbers
            .filter(number => number % 2 === 0)
            .map(number => number * number)
            .reduce((total, current) => total + current, 0);
        return sum;
    }
}

// Task 6
{
    const inventors = [
        { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
        { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
        { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
        { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
        { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
        { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
        { first: "Max", last: "Planck", year: 1858, passed: 1947 },
        { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
        { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
        { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
        { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
        { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
    ];

    console.log("\nTask 6:");
    console.log(inventors.map(inventor => inventor.first + " " + inventor.last));
    console.log(inventors.sort((a, b) => (a.year > b.year ? 1 : -1)));
    console.log(inventors.filter(inventor => inventor.year > 1500 && inventor.year < 1600));
    console.log(inventors.reduce((total, current) => total + (current.passed - current.year), 0));
    console.log(inventors.sort((a, b) => (a.passed - a.year > b.passed - b.year ? 1 : -1)));
}
