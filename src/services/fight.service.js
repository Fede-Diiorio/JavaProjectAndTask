export default class FightService {
    #coordinates;

    constructor() {
        this.#coordinates = null; // Inicialmente sin coordenadas
    }

    generateRandomCoordinates() {
        this.#coordinates = {
            width: Math.floor(Math.random() * 100),
            height: Math.floor(Math.random() * 100),
            deep: Math.floor(Math.random() * 100),
        };

        console.log("Coordenadas generadas:", this.#coordinates);
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

    calculateCoordinates(width, height, deep) {
        if (!this.#coordinates) {
            throw new Error("Debe generar las coordenadas primero.");
        }

        this.#validateCoordinate(width);
        this.#validateCoordinate(height);
        this.#validateCoordinate(deep);

        const { width: targetWidth, height: targetHeight, deep: targetDeep } = this.#coordinates;

        if (width === targetWidth && height === targetHeight && deep === targetDeep) {
            return "¡VICTORIA, ALCANZAMOS LA VICTORIA!";
        }

        return "Intento fallido. Sigue intentando.";
    }
}
