// Task 1
{
    const pazadas = new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 5000);
    });

    pazadas.then(() => alert("Veikia"));

    console.log("Šitas kodas pasileis pirmas, nors ir yra paskutinis. Tai būtent mūsų asinchroniškumas");
}

// Task 2
{
    const pazadas = new Promise((resolve, reject) => {
        const random = Math.floor(Math.random() * 5) + 1;

        setTimeout(() => {
            if (random === 1) {
                reject();
            } else {
                resolve();
            }
        }, 5000);
    });

    pazadas.then(() => alert("Veikia")).catch(() => alert("Oops, pažadas buvo atmestas"));
}

// Task 3
{
    const pazadas = new Promise((resolve, reject) => {
        const random = Math.floor(Math.random() * 5) + 1;

        setTimeout(() => {
            if (random === 1) {
                reject();
            } else {
                resolve();
            }
        }, 5000);
    });

    pazadas
        .then(() => "This is message")
        .then(message => alert(message))
        .catch(() => alert("Oops, pažadas buvo atmestas"));
}
