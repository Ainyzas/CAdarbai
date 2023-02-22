import express from "express";
import data from "../../database/tasks1.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.json(data);
});

export default router;
