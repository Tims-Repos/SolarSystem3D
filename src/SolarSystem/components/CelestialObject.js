import { createSphere } from "./sphere.js";

// Normally this would be an abstract class
// but JS doesn't support that yet.
// The star, planet and moons inherit from 
// this class. Possible to add comets 
// and asteroids.
class CelestialObject {
    #name;
    #texturesPath = "../../../assets/textures/celestialObjects/" // ToDo: Research how to make it static
    #diameter;
    #textureName;
    #mesh;
    constructor(name, diameter, textureName) {
        this.#name = name;
        this.#diameter = diameter;
        this.#textureName = this.#texturesPath + textureName;
    }

    // After the object is instantiated
    // call the getMesh function to get
    // the objects mesh. This function
    // is shared across all subclasses
    getMesh() {
        this.#mesh = createSphere(this.#diameter, this.#textureName, this.#materialType);
        return this.#mesh;
    }
}

export { CelestialObject };