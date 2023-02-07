import express from "express";
import data from "../../database/tasks1.js";
const router = express.Router();

router.get("/cars/:brand", (req, res) => {
    const brand = req.params.brand;

    res.json(data.filter(user => user.car === brand));
});

export default router;
