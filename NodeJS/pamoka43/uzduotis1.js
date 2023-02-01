const http = require("http");

const PORT = 3000;

const cars = [
    { id: 1, make: "Audi" },
    { id: 2, make: "BMW" },
    { id: 3, make: "Opel" },
];

const movies = [
    { id: 1, name: "Harry Potter" },
    { id: 2, name: "Spiderman" },
    { id: 3, name: "Superman" },
];

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/cars":
            res.write(JSON.stringify(cars));
            break;
        case "/movies":
            res.write(JSON.stringify(movies));
            break;
        default:
            res.statusCode = 404;
            res.write("does not exist");
    }

    res.end();
});

server.listen(PORT, () => {
    console.log("server is listening on port " + PORT);
});
