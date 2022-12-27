// Task 1

{
    function nameCall() {
        console.log("Ainas Puidokas");
    }

    // nameCall();

    const nameCallArrow = () => {
        console.log("Ainas Puidokas");
    };

    // nameCallArrow();
}

// Task 2

{
    function getVolume(width, length, height) {
        return width * length * height;
    }

    // console.log(getVolume(5, 5, 5));

    const getVolumeArrow = (width, length, height) => {
        return width * length * height;
    };

    // console.log(getVolumeArrow(5, 5, 10));
}

// Task 3

{
    function sum(a, b) {
        return a + b;
    }
    console.log(sum(2, 5));

    const sumArrow = (a, b) => a + b;

    console.log(sumArrow(2, 5));
}

// Task 4

{
    setTimeout(() => {
        console.log("Hello");
    }, 5000);

    function hello() {
        console.log("Hello");
    }

    setTimeout(hello, 5000);
}

// Task 5

{
    let counter = 0;

    function count() {
        counter++;
        console.log(counter);
    }

    // setInterval(count, 2000);
}

// Task 6

{
    function stringCheck(String) {
        if (String === "") {
            return true;
        }
        return false;
    }

    console.log(stringCheck(""));

    const stringCheckArrow = String => {
        return String === "" ? true : false;
    };

    console.log(stringCheckArrow(""));
}

// Task 7

{
    function wasteTime() {
        const current = Date.now();
        let amount = 10000000;
        for (let i = 0; i < amount; i++) {
            let number = (5 * 95) / 12;
        }
        const final = Date.now() - current;
        console.log(final + "ms");
    }

    wasteTime();
}

// Task 8

{
    (function normal() {
        const day = new Date().toLocaleString("default", { weekday: "long" });
        console.log(`Hello, today is ${day}`);
    })();

    (() => {
        const day = new Date().toLocaleString("default", { weekday: "long" });
        console.log(`Hello, today is ${day}`);
    })();
}
