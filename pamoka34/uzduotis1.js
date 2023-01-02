// Task 1
{
    const styles = ["Jazz", "Blues"];
    console.log(styles);
    styles.push("Rock-n-Roll");
    console.log(styles);
    styles[1] = "Classics";
    console.log(styles);
    const deleted = styles.shift();
    console.log(deleted);
    console.log(styles);
    styles.unshift("Reggae");
    styles.unshift("Rap");
    console.log(styles);
}

// Task 2
{
    const numbersArr = [11, -2, 34, 45, 19, -5, 6];

    console.log(getMaxSubSum(numbersArr));

    function getMaxSubSum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                sum += arr[i];
            }
        }
        return sum;
    }
}

{
    const numbersArr = [11, -2, 34, 45, 19, -5, 6];

    console.log(getMaxSubSum(numbersArr));

    function getMaxSubSum(arr) {
        let sum = 0;
        for (let item of arr) {
            if (item > 0) {
                sum += item;
            }
        }
        return sum;
    }
}

// Task 3
{
    let randomArr = [11, "cat", true, 4, "mouse", 5, 9, 5, 76, false];

    console.log(getArrayByData(randomArr, "number"));

    function getArrayByData(array, dataType) {
        let newArray = [];
        for (let item of array) {
            if (typeof item === dataType) {
                newArray.push(item);
            }
        }
        return newArray;
    }
}

// Task 4
{
}
