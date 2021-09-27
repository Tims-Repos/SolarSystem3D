import { AmbientLight, PointLight } from "../../../vendor/three/build/three.module.js";

function createLights() {
    const ambientLight = new AmbientLight();

    const sunLight = new PointLight( 0xffffff , 4);
    //light.power = 127000;
    //light.castShadow = true;
    //light.shadow.bias = 0.001
    //light.shadow.mapSize.width = 2048;
    //light.shadow.mapSize.height = 2048;

    return {ambientLight, sunLight};
}

export { createLights };