import express from "express";
import data from "../../database/tasks1.js";
const router = express.Router();

router.get("/gender/:gender", (req, res) => {
    const gender = req.params.gender;

    res.json(data.filter(user => user.gender === gender).map(user => user.first_name + " " + user.last_name));
});

export default router;
