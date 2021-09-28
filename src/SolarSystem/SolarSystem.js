import { createCamera } from './components/camera.js';
import { createControls } from './systems/controls.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createRenderer } from './systems/renderer.js';
import { Planet } from './components/Planet.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

// Make module scoped variables so they are not accessible outside of the SolarSystem class
let camera;
let scene;
let renderer;
let loop;

class SolarSystem {
    constructor(container) {
        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        const controls = createControls(camera, renderer.domElement);
        const { ambientLight, sunLight } = createLights(); 
        const earth = new Planet(12742, 'earth/earth_atmos_4096.jpg', 'standard');
        const earthMesh = earth.createPlanet();
        // ToDo: Implement parent class CelestialObject from which Sun and Planet inherit
        //       because Sun is not a planet D:
        const sun = new Planet(696340, 'sun/[2048x1024]2k_sun.jpg', 'basic');
        const sunMesh = sun.createPlanet();

        loop.updatables.push(controls, earthMesh, sunMesh);
        sunLight.position.set(0, 1, 0);
        earthMesh.position.set(50, 0, 50);
        //sunLight.add(sunMesh);
        //sunMesh.add(earthMesh);
        scene.add(sunLight, ambientLight, earthMesh, sunMesh);

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

export { SolarSystem };