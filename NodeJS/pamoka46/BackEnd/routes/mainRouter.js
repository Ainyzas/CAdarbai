import express from "express";
import route1 from "./route1/route.js";
const router = express.Router();

router.use(route1);

export default router;
