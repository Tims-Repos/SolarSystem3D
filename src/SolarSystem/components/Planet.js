import { CelestialObject } from "./CelestialObject.js";

// The Planet class which inherits from the CelestialObject 
// class. Currently not much has been added to discern it
// from the other CelestialObjects but might add things
// that are specific to planets later. Like the type of
// planet (water, ice, gas etc.)
class Planet extends CelestialObject {
    constructor(planetName, diameter, textureName) {
        super(planetName, diameter, textureName);
    }
}

export { Planet };