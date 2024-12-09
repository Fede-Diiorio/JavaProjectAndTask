import FightService from "../services/fight.service.js";

// Crear una instancia única de FightService
const fightService = new FightService();

export default class Controller {
    hideSubmarine(res) {
        try {
            fightService.generateRandomCoordinates();
            res.status(200).json("Submarino ubicado");
        } catch (error) {
            res.status(500).json({ error: error.message || "Ocurrió un error inesperado" });
        }
    }

    getCoordinates(res) {
        try {
            const coordinates = fightService.getCoordinates();
            res.status(200).json(coordinates);
        } catch (error) {
            res.status(500).json({ error: error.message || "Ocurrió un error inesperado" });
        }
    }

    startFight(req, res) {
        try {
            const { width, height, deep } = req.body;
            const response = fightService.calculateCoordinates(width, height, deep);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({ error: error.message || "Ocurrió un error inesperado" });
        }
    }
}
