// Task 1

{
    let doors = {
        color: "brown",
        isOpen: false,
        open: function () {
            if (doors.isOpen) {
                return "doors are open";
            } else {
                doors.isOpen = true;
                return "I am opening the door";
            }
        },
        close: function () {
            if (!doors.isOpen) {
                return "doors are already closed";
            } else {
                doors.isOpen = false;
                return "I am closing the door";
            }
        },
    };

    console.log("\nTask 1:");
    console.log(doors.close());
    console.log(doors.open());
}

// Task 2

{
    let savingsAccount = {
        balance: 1000,
        interestRate: 1,
        deposit: function (amount) {
            if (amount > 0) {
                this.balance += amount;
            }
        },
        withdraw: function (amount) {
            const verifyBalance = this.balance - amount;
            if (amount > 0 && verifyBalance >= 0) {
                this.balance -= amount;
                return `You have withdrawn ${amount}\nYour new balance is ${this.balance}`;
            } else {
                return `You do not have ${amount} to withdraw`;
            }
        },
        printAccountSummary: function () {
            console.log(`Welcome! \nYour current balance is ${this.balance} and your interest rate is ${this.interestRate}`);
        },
    };

    console.log("\nTask 2:");
    console.log(savingsAccount.withdraw(100));
    console.log(savingsAccount.withdraw(1000));
}

// Task 3

{
    let facebookProfile = {
        profileName: "Ainas",
        friends: 1,
        postedMessages: ["Hello dudes", "Hello gals", "I love life"],
        postMessage: function (message) {
            if (message) {
                console.log(`message: ${message}\nHas been posted`);
                return this.postedMessages.push(message);
            }
        },
        deleteMessage: function (index) {
            if (!(index > this.postedMessages.length - 1)) {
                console.log(`message: ${this.postedMessages[index]}\nHas been removed`);
                return this.postedMessages.splice(index, 1);
            }
        },
        addFriend: function () {
            this.friends++;
        },
        removeFriend: function () {
            this.friends--;
        },
    };
    console.log("\nTask 3:");
    facebookProfile.postMessage("I loveeee");
    console.log(facebookProfile.postedMessages);
    facebookProfile.deleteMessage(2);
    console.log(facebookProfile.postedMessages);
    facebookProfile.addFriend();
    console.log(facebookProfile.friends);
    facebookProfile.removeFriend();
    console.log(facebookProfile.friends);
}

// Task 4

{
    function car(brand, model, engine, price) {
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.basePrice = price;
        this.turnOn = function () {
            alert("vrooom");
        };

        this.getPrice = function () {
            switch (this.engine) {
                case "electric":
                    return `the total cost is ${this.basePrice + 10000}`;
                    break;
                case "diesel":
                    return `the total cost is ${this.basePrice + 5000}`;
                    break;
                case "petrol":
                    return `the total cost is ${this.basePrice}`;
                    break;
                default:
                    return "This engine does not exist";
                    break;
            }
        };
    }
    console.log("\nTask 4:");
    let car1 = new car("Mazda", 1989, "electric", 6500);
    console.log(car1.brand);
    console.log(car1.getPrice());
}
