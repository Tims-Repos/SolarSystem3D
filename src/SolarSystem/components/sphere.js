import {
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  SphereBufferGeometry,
  TextureLoader,
} from "../../../vendor/three/build/three.module.js";

// Create a MeshStandardMaterial based on the texturePath.
function createMaterial(texturePath) {
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load(
    texturePath,
  );

  const material = new MeshStandardMaterial({
    map: texture,
  });

  return material;
}

// The function that creates the geometry for our 
// CelestialObjects. It takes the diameter and 
// the texturePath for the texture.
function createSphere(diameter, texturePath) {
  
  // Divide the diameter by 10000 so the numbers will
  // be a bit smaller for calculations and also divide
  // by 2 to get the radius because the SphereBufferGeometry
  // needs the radius.
  const geometry = new SphereBufferGeometry((diameter / 10000) / 2, 32, 16);
  const material = createMaterial(texturePath);

  const sphere = new Mesh(geometry, material);
  sphere.castShadow = true;
  sphere.receiveShadow = true;

  const radiansPerSecond = MathUtils.degToRad(10);

  sphere.tick = (delta) => {
      sphere.rotation.y += radiansPerSecond * delta;
  };

  return sphere;
}

export { createSphere };