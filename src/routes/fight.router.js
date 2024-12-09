import { Router } from "express";
import Controller from "../controllers/fight.controller.js";

const router = Router();

router.post("/", (req, res) => new Controller().startFight(req, res));

export default router;