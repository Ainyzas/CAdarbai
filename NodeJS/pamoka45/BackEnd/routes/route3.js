import express from "express";
import tasks from "../database/tasks3.js";
const router = express.Router();

router.get("/names", (req, res) => {
    res.json(tasks);
});

router.post("/names", (req, res) => {
    const { inputName } = req.body;
    if (!inputName) {
        res.status(400);
        console.log("error");
    } else {
        res.status(200);
        tasks.push(inputName);
    }
});

export default router;
