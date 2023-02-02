const express = require("express");
const router = require("./router");

const PORT = 3000;
const app = express();

app.use(router);

app.listen(PORT, () => {
    console.log("app is running on port " + PORT);
});
