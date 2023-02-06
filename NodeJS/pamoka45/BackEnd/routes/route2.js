import express from "express";
import tasks from "../database/tasks2.js";
const router = express.Router();

router.get("/cars", (req, res) => {
    res.json(tasks);
});

router.post("/cars", (req, res) => {
    const brand = req.query.brand;
    console.log(brand);

    if (req.query.brand) {
        tasks.push(brand);

        res.json({
            success: true,
        });
    } else {
        res.json({
            success: false,
        });
    }
});

export default router;
