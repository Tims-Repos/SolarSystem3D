import { CelestialObject } from "./CelestialObject.js";

// The Star class which inherits from the CelestialObject 
// class. Currently not much has been added to discern it
// from the other CelestialObjects but might add things
// that are specific to stars later. Like the type of 
//star (proto, red giant, red dwarf, neutron, vampire)
class Star extends CelestialObject {
    constructor(starName, diameter, textureName) {
        super(starName, diameter, textureName);
    }
}

export { Star };