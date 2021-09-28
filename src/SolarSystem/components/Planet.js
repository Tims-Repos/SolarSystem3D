import { createBall } from "./sphere.js";

class Planet {
    #texturesPath = "../../../assets/textures/celestialObjects/"
    #diameter;
    #textureName;
    #materialType;
    constructor(diameter, textureName, materialType) {
        this.#diameter = diameter;
        this.#textureName = this.#texturesPath + textureName;
        this.#materialType = materialType;
    }

    createPlanet() {
        return createBall(this.#diameter, this.#textureName, this.#materialType);
    }
}

export { Planet };