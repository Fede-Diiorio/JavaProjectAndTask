import { Router } from "express";
import Controller from "../controllers/fight.controller.js";

const router = Router();

router.post("/hide", (_, res) => new Controller().hideSubmarine(res));

router.get("/coordinates", (_, res) => new Controller().getCoordinates(res));

router.post("/", (req, res) => new Controller().startFight(req, res));

export default router;