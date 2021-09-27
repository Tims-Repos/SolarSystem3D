import {
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial, 
  SphereBufferGeometry,
  TextureLoader,
} from "../../../vendor/three/build/three.module.js";

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

      return material;
  }
  

  // Create a standard material using above texture
  
  //material.transparent = true;
}

function createBall(diameter, texturePath, type) {
  const geometry = new SphereBufferGeometry((diameter / 10000) / 2, 32, 16);

  const material = createMaterial(texturePath, type);

  const ball = new Mesh(geometry, material);
  //ball.castShadow = true;
  //ball.receiveShadow = true;

  const radiansPerSecond = MathUtils.degToRad(10);
  const minX = -2;
  const maxX = 2;
  let left = false;
  const movement = 1;

  ball.tick = (delta) => {
    // Increase ball's rotation on each new frame
    ball.rotation.x += radiansPerSecond * delta;
    ball.rotation.y += radiansPerSecond * delta;
    ball.rotation.z += radiansPerSecond * delta;

    // Make the ball go left and right
    if (!left) {
      if (ball.position.x < maxX) {
        ball.position.x += movement * delta;
      } else {
        left = true;
      }
    }
    if (left) {
      if (ball.position.x > minX) {
        ball.position.x -= movement * delta;
      } else {
        left = false;
      }  
    }
  };

  return ball;
}

export { createBall };