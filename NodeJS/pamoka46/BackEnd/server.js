import express from "express";
import cors from "cors";
import route1 from "./routes/route1.js";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(route1);

app.listen(PORT, () => {
    console.log("app is running on port " + PORT);
});
