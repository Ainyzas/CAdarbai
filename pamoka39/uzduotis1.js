// Task 1
// {
//     console.log(1);
//     setTimeout(() => console.log(2), 1500);
//     console.log(3);
// }

// Task 2
// {
//     function callAPI() {
//         setTimeout(() => console.log("call failed"), 3000);
//     }

//     function callGoodAPI() {
//         setInterval(() => console.log("call was successful"), 2000);
//     }

//     console.log("Start");
//     callAPI();
//     callGoodAPI();
//     console.log("Finish");
// }

// Task 3
// {
//     const promise = new Promise((resolve, reject) => {
//         const num = Math.random();
//         if (num > 0.25) {
//             resolve("You have enough money for payphone");
//         } else {
//             reject("Talk to yourself this time");
//         }
//     });

//     promise.then(message => console.log(message)).catch(e => console.log(e));
// }

// Task 3.1
{
    const promise = new Promise((resolve, reject) => {
        const num = Math.random();
        if (num > 0.25) {
            resolve("You have enough money for payphone");
        } else {
            reject("Talk to yourself this time");
        }
    });

    async function asyncTask() {
        try {
            console.log(await promise);
        } catch (err) {
            console.log(err);
        }
    }

    asyncTask();
}

// Task 4
// {
//     const url = "https://api.github.com/users";
//     const body = document.querySelector("body");

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             const list = document.createElement("ul");
//             data.forEach(user => {
//                 const userListItem = document.createElement("li");
//                 userListItem.textContent = user.login;
//                 list.append(userListItem);
//             });
//             body.append(list);
//         })
//         .catch(error => {
//             const errorMessage = document.createElement("h1");
//             errorMessage.textContent = "Error catched: " + error;
//             body.append(errorMessage);
//         })
//         .finally(() => console.log("fetch finished"));
// }

// Task 5
{
    const urlPicsum = "https://picsum.photos/v2/list";
    const body = document.querySelector("body");

    const getBunchPhotos = async () => {
        try {
            const response = await fetch(urlPicsum);
            const data = await response.json();
            body.style.display = "flex";
            body.style.flexWrap = "wrap";
            data.forEach(imageData => {
                const image = document.createElement("img");
                image.setAttribute("src", imageData.download_url);
                image.setAttribute("width", "200px");
                body.append(image);
            });
        } catch (e) {
            console.log(e);
        }
    };

    const button = document.querySelector("button");
    button.addEventListener("click", getBunchPhotos);
}
