import { Mesh, MeshStandardMaterial, SphereBufferGeometry } from "../../../vendor/three/build/three.module.js";

function createBall() {
  const geometry = new SphereBufferGeometry(1, 32, 16);

  const material = new MeshStandardMaterial({ color: 'blue' });

  const ball = new Mesh(geometry, material);

  return ball;
}

export { createBall };