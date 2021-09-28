import {
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial, 
  SphereBufferGeometry,
  TextureLoader,
} from "../../../vendor/three/build/three.module.js";

// Create a material based on the texturePath and type.
// ToDo: Look into enum based switch statements.
function createMaterial(texturePath, type) {
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load(
    texturePath,
  );
  
  switch (type) {
    case 'basic':
      return new MeshBasicMaterial({
        map: texture,
      });
    case 'standard':
      return new MeshStandardMaterial({
        map: texture,
        //alphaMap: texture,
      });
    default: 
      return new MeshBasicMaterial({
        color: 'yellow',
      });
  }
}

function createBall(diameter, texturePath, type) {
  const geometry = new SphereBufferGeometry((diameter / 10000) / 2, 32, 16);

  const material = createMaterial(texturePath, type);

  const ball = new Mesh(geometry, material);
  //ball.castShadow = true;
  //ball.receiveShadow = true;

  const radiansPerSecond = MathUtils.degToRad(10);

  ball.tick = (delta) => {
    // Increase ball's rotation on each new frame
    ball.rotation.x += radiansPerSecond * delta;
    ball.rotation.y += radiansPerSecond * delta;
    ball.rotation.z += radiansPerSecond * delta;

  };

  return ball;
}

export { createBall };