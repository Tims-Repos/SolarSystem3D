import { createBall } from './components/sphere.js';
import { createCamera } from './components/camera.js';
import { createControls } from './systems/controls.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { PointLightHelper } from '../../vendor/three/build/three.module.js';

// Make module scoped variables so they are not accessible outside of the World class
let camera;
let scene;
let renderer;
let loop;

class World {
    constructor(container) {
        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);
        const controls = createControls(camera, renderer.domElement);
        const cube = createCube();
        const earth = createBall(12742, '/assets/textures/celestialObjects/earth/earth_atmos_4096.jpg', 'standard');
        //earth.receiveShadow = true;
        const sun = createBall(696340, '/assets/textures/celestialObjects/sun/[2048x1024]2k_sun.jpg', 'basic');
        const { ambientLight, sunLight } = createLights(); 
        const sphereSize = 1;
        const pointLightHelper = new PointLightHelper( sunLight, sphereSize );
        sunLight.position.copy(sun.position);
        controls.target.copy(earth.position);

        //loop.updatables.push(cube);
        //loop.updatables.push(ball);
        //loop.updatables.push(camera);
        loop.updatables.push(controls);
        earth.position.set(50, 0, 50);
        sunLight.add(sun);
        sun.add(earth);
        scene.add(earth, sun, sunLight, ambientLight, pointLightHelper);

        const resizer = new Resizer(container, camera, renderer);
    }

    render() {
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
}

export { World };