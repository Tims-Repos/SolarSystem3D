import { DirectionalLight, HemisphereLight } from "../../../vendor/three/build/three.module.js";

function createLights() {
    const ambientLight = new HemisphereLight(
        'white',
        'darkslategrey',
        10,
    );

    const sunLight = new DirectionalLight( 'white' , 5);
    sunLight.position.set(10, 10, 10);
    //light.power = 127000;
    //light.castShadow = true;
    //light.shadow.bias = 0.001
    //light.shadow.mapSize.width = 2048;
    //light.shadow.mapSize.height = 2048;

    return {ambientLight, sunLight};
}

export { createLights };