import { CelestialObject } from "./CelestialObject.js";

// The Moon class which inherits from the CelestialObject 
// class. Currently not much has been added to discern it
// from the other CelestialObjects but might add things
// that are specific to moons later. (If any).
class Moon extends CelestialObject {
    constructor(moonName, diameter, textureName) {
        super(moonName, diameter, textureName);
    }
}

export { Moon };