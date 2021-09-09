import { PerspectiveCamera } from "../../../vendor/three/build/three.module.js";

function createCamera() {
    const camera = new PerspectiveCamera(
        35,
        1,
        0.1,
        100,
    );
    
    // Set the camera back so we can view the scene
    camera.position.set(0, 0, 10);

    return camera;
}

export { createCamera };