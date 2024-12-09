import FightService from "../services/fight.service.js";

export default class Controller {

    #fightService;

    constructor() {
        this.#fightService = new FightService();
    }

    startFight(req, res) {
        try {
            const { width, height, deep } = req.body;

            const response = this.#fightService.calculateCoordinates(width, height, deep);

            res.status(200).json(response);

        } catch (error) {
            res.status(500).json({ error });
        }
    }
}