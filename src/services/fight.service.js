export default class FightService {

    #generateRandomCoordinates() {
        const width = Math.floor(Math.random() * 100);
        const height = Math.floor(Math.random() * 100);
        const deep = Math.floor(Math.random() * 100);

        console.log("WIDTH: " + width);
        console.log("HEIGHT: " + height);
        console.log("DEEP: " + deep);

        return { width, height, deep }
    }

    #validateCoodinate(coordinate) {
        if (coordinate < 0 || coordinate > 99) {
            throw new Error("Coordenada debe estar entre 0 y 99");
        }

        return coordinate;
    }

    calculateCoordinates(width, height, deep) {

        const couter = 1;

        this.#validateCoodinate(width);
        this.#validateCoodinate(height);
        this.#validateCoodinate(deep);

        const coordinates = this.#generateRandomCoordinates;

        while (couter <= 7) {

            if (width == coordinates.width && height == coordinates.height && deep == coordinates.deep) {
                return "¡VICTORIA, ALCANZAMOS LA VICTORIA!"
            }




            couter++;
        }

        return "Has perdido";

    }
}