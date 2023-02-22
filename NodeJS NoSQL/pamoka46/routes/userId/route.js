import express from "express";
import data from "../../database/tasks1.js";
const router = express.Router();

router.get("/user/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);

    res.json(data.find(user => user.id === +id));
});

export default router;
