import express from "express";
import data from "../../database/tasks1.js";
const router = express.Router();

router.get("/emails", (req, res) => {
    const emails = data.map(user => user.email);

    res.json(emails);
});

export default router;
