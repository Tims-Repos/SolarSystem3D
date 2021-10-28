import { OrbitControls } from '../../../vendor/three/examples/jsm/controls/OrbitControls.js'

// Function to create the OrbitControls
function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  // Set this to true otherwise the camera would
  // stop abruptly after we stop moving.
  controls.enableDamping = true;

  // Use the tick function to update the controls
  controls.tick = () => controls.update();

  return controls;
}

export { createControls };