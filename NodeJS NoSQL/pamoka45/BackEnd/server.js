import express from "express";
import cors from "cors";
import routes from "./routes/route.js";
import routes2 from "./routes/route2.js";
import routes3 from "./routes/route3.js";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(routes2);
app.use(routes3);

app.listen(PORT, () => {
    console.log("app is running on port " + PORT);
});
