export default class FightService {
    #coordinates;
    #counter;

    constructor() {
        this.#coordinates = null; // Inicialmente sin coordenadas
        this.#counter = null;
    }

    generateRandomCoordinates() {
        this.#coordinates = {
            width: Math.floor(Math.random() * 100),
            height: Math.floor(Math.random() * 100),
            deep: Math.floor(Math.random() * 100),
        };

        this.#counter = 7;

        return this.#coordinates;
    }

    getCoordinates() {
        if (!this.#coordinates) {
            throw new Error("Las coordenadas no han sido generadas aún.");
        }
        return this.#coordinates;
    }

    #validateCoordinate(coordinate) {
        if (coordinate < 0 || coordinate > 99) {
            throw new Error(`Coordenada ${coordinate} debe estar dentro del rango de 0 y 99`);
        }
    }

    #generateResponse(coordinate, constructorOption) {
        if (coordinate < constructorOption) {
            return `${coordinate} está por debajo de la coordenada.`;
        } else if (coordinate > constructorOption) {
            return `${coordinate} está por encima de la coordenada.`;
        } else {
            return `${coordinate} es correcto.`;
        }
    }

    calculateCoordinates(width, height, deep) {
        if (!this.#coordinates) {
            throw new Error("Debe generar las coordenadas primero.");
        }

        this.#validateCoordinate(width);
        this.#validateCoordinate(height);
        this.#validateCoordinate(deep);

        const { width: targetWidth, height: targetHeight, deep: targetDeep } = this.#coordinates;

        if (width === targetWidth && height === targetHeight && deep === targetDeep) {
            this.#counter = null;
            this.#coordinates = null;
            return "¡VICTORIA, ALCANZAMOS LA VICTORIA!";
        }

        this.#counter--;

        if (this.#counter < 1) {
            this.#counter = null;
            this.#coordinates = null;
            return "Te has quedado sin disparos. Estás muerto."
        }

        const response = {
            info: `Disparo fallido. Te quedan ${this.#counter} disparos`,
            width: this.#generateResponse(width, this.#coordinates.width),
            height: this.#generateResponse(height, this.#coordinates.height),
            deep: this.#generateResponse(deep, this.#coordinates.deep)
        }

        return response;
    }
}
