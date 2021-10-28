import {
    PointLight,
    HemisphereLight,
} from "../../../vendor/three/build/three.module.js";

// Function to create two lights for 
// the solarsystem. One is for the sun
// and the other is a kind of ambient light
// to make everything a little more clear.
function createLights() {
    const hemisphereLight = new HemisphereLight(
        'white',
        'white',
        4,
    );

    const sunLight = new PointLight( 'white' , 1);
    sunLight.position.set(0, 0, 0);

    return {hemisphereLight, sunLight};
}

export { createLights };