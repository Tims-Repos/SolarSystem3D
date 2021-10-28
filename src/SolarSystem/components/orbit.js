import {
    Group,
    MathUtils,
    Matrix4,
} from "../../../vendor/three/build/three.module.js";

// The getOrbit function which gives
// our CelestialObjects that need it
// an orbit.
function getOrbit(mesh, speed) {
    // Create a matrix
    var matrix = new Matrix4();
    // Create the group as an empty object
    const orbit = new Group();
    // Convert degrees to radians
    const radiansPerSecond = MathUtils.degToRad(speed);
    
    orbit.tick = (delta) => {
        // Rotate the matrix based on the speed parameter
        matrix.makeRotationY(radiansPerSecond * delta);
        // Rotate the mesh using the matrix
        mesh.position.applyMatrix4(matrix);
    };
  
    return orbit;
  }
  
  export { getOrbit };