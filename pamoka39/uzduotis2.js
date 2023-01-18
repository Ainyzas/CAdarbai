const partyUrl = "https://test-api-faker.herokuapp.com/cafe04/party";
const weddingUrl = "https://test-api-faker.herokuapp.com/cafe04/wedding";
const memeUrl = "https://test-api-faker.herokuapp.com/cafe04/meme";
const body = document.querySelector("body");

// Task 1
{
    function partyPromise() {
        return new Promise(resolve => {
            fetch(partyUrl)
                .then(response => response.json())
                .then(data => {
                    const myName = "Ainas";
                    let found = false;
                    data.forEach(entry => {
                        if (entry.name === myName && entry.vip === true) {
                            found = true;
                            resolve(`${entry.name} is in the party`);
                        }
                    });
                });
        });
    }

    // Task 2

    function weddingPromise() {
        return new Promise(resolve => {
            fetch(weddingUrl)
                .then(response => response.json())
                .then(data => {
                    let countPlusOne = 0;
                    let countAttending = 0;
                    let countGuests = 0;
                    data.forEach(guest => {
                        if (guest.plusOne === true) {
                            countPlusOne++;
                        }
                        if (guest.attending === true) {
                            countAttending++;
                        }
                        switch (true) {
                            case guest.attending && guest.plusOne:
                                countGuests += 2;
                                break;
                            case guest.attending:
                                countGuests++;
                                break;
                            case !guest.attending && guest.plusOne:
                                countGuests += 0;
                                break;
                            default:
                                countGuests += 0;
                                break;
                        }
                    });
                    resolve(`${countPlusOne} plusOnes marked\n${countAttending} Attending marked\n${countGuests} Total guests`);
                });
        });
    }

    async function doPromises() {
        await Promise.all([partyPromise(), weddingPromise()]).then(resultMessages => {
            console.log(resultMessages[0]);
            console.log(resultMessages[1]);
        });
    }

    doPromises();
}

// Task 3
// a) <name> is/is not in the /party list;
// b) <name> is/is not a VIP guest;
// c) Amountof attendees who selected plus one option: <amount>;
// d) Amountof total attendees: <amount>;

{
    const input = document.querySelector("input");
    const button = document.querySelector("button");

    async function checkName() {
        try {
            const name = input.value;
            const fetchparty = await fetch(partyUrl);
            const fetchwedding = await fetch(weddingUrl);
            const partyResponse = await fetchparty.json();
            const weddingResponse = await fetchwedding.json();

            let fullResponse = "";

            const inParty = partyResponse.find(guest => guest.name === name);
            if (inParty.name === name) {
                fullResponse += `${inParty.name} is in the party list\n`;
                if (inParty.vip === true) {
                    fullResponse += `${inParty.name} is a VIP guest\n`;
                } else {
                    fullResponse += `${inParty.name} is not a VIP guest\n`;
                }
            } else {
                fullResponse += `${inParty.name} is not in the party list\n`;
            }

            let countPlusOne = 0;
            let countAttending = 0;

            weddingResponse.forEach(guest => {
                if (guest.plusOne === true && guest.attending === true) {
                    countPlusOne++;
                }
                if (guest.attending === true) {
                    countAttending++;
                }
            });

            fullResponse += `Amount of attendees who selected plus one option: ${countPlusOne}\nAmount of total attendees: ${countAttending + countPlusOne}`;

            console.log(fullResponse);
            const fetchMeme = await fetch(memeUrl);
            const memeResponse = await fetchMeme.json();
            const meme = document.createElement("img");
            meme.setAttribute("src", memeResponse.imgUrl);
            body.append(meme);
        } catch (err) {
            console.log(err);
        }
    }

    button.addEventListener("click", checkName);
}
