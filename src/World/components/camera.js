import { PerspectiveCamera } from "../../../vendor/three/build/three.module.js";

function createCamera() {
    const camera = new PerspectiveCamera(
        35,
        1,
        0.1,
        1000,
    );
    const movement = 1;
    const maxY = 10;
    const minY = -10;
    let forward = true;
    
    // Set the camera back so we can view the scene
    camera.position.set(0, 0, 1000);
    
    camera.tick = (delta) => {
        if (forward) {
            if (camera.position.x < maxY) {
                camera.position.x += movement * delta;
            } else {
                forward = false;
            }
        } else if (!forward) {
            if (camera.position.x > minY) {
                camera.position.x -= movement * delta;
            } else {
                forward = true;
            }
        }
    }
    return camera;

}

export { createCamera };