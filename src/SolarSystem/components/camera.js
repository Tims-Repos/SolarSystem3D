import { PerspectiveCamera } from "../../../vendor/three/build/three.module.js";

function createCamera() {
    const camera = new PerspectiveCamera(
        35,
        1,
        0.1,
        500,
    );
    
    // Set the camera back so we can view the scene
    camera.position.set(0, 0, 100);
    
    // Optional tick function so we can move the
    // camera around.
    camera.tick = (delta) => { }
    return camera;

}

export { createCamera };