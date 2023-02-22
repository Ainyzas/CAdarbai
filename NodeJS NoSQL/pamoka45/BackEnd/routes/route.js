import express from "express";
import tasks from "../database/tasks.js";
const router = express.Router();

router.get("/tasks", (req, res) => {
    res.json(tasks);
});

router.get("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const task = tasks.find(item => item.id === +id);
    console.log(task);

    if (task) {
        res.json(task);
    } else {
        res.status(404);
        res.json({
            status: "Task not found",
        });
    }
});

router.post("/tasks", (req, res) => {
    const { name, description } = req.body;
    const id = tasks[tasks.length - 1].id + 1;

    const task = {
        id,
        name,
        description,
    };

    tasks.push(task);

    res.json({
        success: true,
    });
});

router.put("/tasks/:id", (req, res) => {
    const { name, description } = req.body;
    const { id } = req.params;

    const taskIndex = tasks.findIndex(item => item.id === +id);

    if (taskIndex !== -1) {
        tasks[taskIndex].name = name;
        tasks[taskIndex].description = description;

        res.json({
            success: true,
        });
    } else {
        res.status(404);
        res.json({
            status: "Task Not Found",
        });
    }
});

router.delete("/tasks/:id", (req, res) => {
    const { id } = req.params;

    const taskIndex = tasks.findIndex(item => item.id === +id);
    console.log(taskIndex);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);

        res.json({
            success: true,
        });
    } else {
        res.status(404);
        res.json({
            status: "Task not found",
        });
    }
});

export default router;
