import { createBall } from './components/sphere.js';
import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

let camera;
let scene;
let renderer;

class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement);

        const ball = createBall();
        
        const light = createLights();
        scene.add(ball, light);

        const resizer = new Resizer(container, camera, renderer);
        resizer.onResize = () => {
          this.render();  
        };
    }

    render() {
        renderer.render(scene, camera);
    }
}

export { World };