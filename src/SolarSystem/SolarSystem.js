import { createCamera } from './components/camera.js';
import { createControls } from './systems/controls.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createRenderer } from './systems/renderer.js';
import { Moon } from './components/Moon.js';
import { Planet } from './components/Planet.js';
import { Star } from './components/Star.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { getOrbit } from './components/orbit.js';

// Make module scoped variables so they are not accessible outside of the SolarSystem class
let camera;
let scene;
let renderer;
let loop;

// The class where everything comes together.
// This creates the whole scene and connects
// all the different modules together.
class SolarSystem {
    constructor(container) {
        camera = createCamera();
        renderer = createRenderer();
        scene = createScene(renderer);
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);
        
        this.initializeSolarSystem();
        
        // Create the resizer that checks for
        // possible resizing of the window.
        const resizer = new Resizer(container, camera, renderer);
    }

    // Created this function so that the constructor
    // would look less bloathed. 
    initializeSolarSystem() {
        // Create the OrbitControls
        const controls = createControls(camera, renderer.domElement);
        // Create the lights
        const { hemisphereLight, sunLight } = createLights();

        // Create the celestial objects
        const moon = new Moon('Moon', 3475, 'moon/2k_moon.jpg');
        const earth = new Planet('Earth', 12742, 'earth/earth_atmos_4096.jpg');
        const sun = new Star('Sun', 696340, 'sun/[2048x1024]2k_sun.jpg');
        
        // Get the meshes from our celestial objects.
        const sunMesh = sun.getMesh();
        const earthMesh = earth.getMesh();
        const moonMesh = moon.getMesh();

        // Add the moon mesh to the earth
        // so that it rotates relative to the earth.
        earthMesh.add(moonMesh);

        // Add the earth mesh to the sun
        // so that it rotates relative to the sun.
        sunMesh.add(earthMesh);

        // Set the earth position relative 
        // to the sun. Otherwise it would
        // be inside the sun (same thing
        // applies to the moon).
        earthMesh.position.set(0, 0, 50);
        moonMesh.position.set(1, 0, 1);

        // Get the orbits for the earth 
        // and the moon and set a rotation
        // speed for the both of them.
        const earthOrbit = getOrbit(earthMesh, 5);
        const moonOrbit = getOrbit(moonMesh, 100);

        // Make the earth rotate and also 
        // let the earth orbit the sun
        // and the moon orbit the earth
        loop.updatables.push(controls, earthMesh, earthOrbit, moonOrbit);

        // Add the sunMesh and lights to the scene.
        scene.add(sunMesh, hemisphereLight, sunLight);
    }

    // Below methods are used to interface
    // with the main class.

    // The render function that
    // calls the renderer.
    render() {
        renderer.render(scene, camera);
    }

    // The start function that
    // calls the loop start
    // function.
    start() {
        loop.start();
    }

    // The stop function that
    // calls the loop stop
    // function.
    stop() {
        loop.stop();
    }
}

export { SolarSystem };