import {
  BoxBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from "../../../vendor/three/build/three.module.js";

function createMaterial() {
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load(
    '/assets/textures/harshbricks-Unreal-Engine/harshbricks-albedo.png',
  );
  
  // Create a standard material using above texture
  const material = new MeshStandardMaterial({
    map: texture,
  });
  
  return material;
}

function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);

  const material = createMaterial();

  const cube = new Mesh(geometry, material);

  const radiansPerSecond = MathUtils.degToRad(60);
  const minX = -10;
  const maxX = 10;
  let left = false;
  const movement = 5;

  cube.tick = (delta) => {
    // Increase cube's rotation on each new frame
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
    cube.rotation.z += radiansPerSecond * delta;

    // Make the cube go left and right
    if (!left) {
      if (cube.position.x < maxX) {
        cube.position.x += movement * delta;
      } else {
        left = true;
      }
    }
    if (left) {
      if (cube.position.x > minX) {
        cube.position.x -= movement * delta;
      } else {
        left = false;
      }  
    }
  };

  return cube;
}

export { createCube };