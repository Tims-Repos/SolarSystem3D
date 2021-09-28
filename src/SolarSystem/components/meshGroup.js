import {
  ConeBufferGeometry,
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from "../../../vendor/three/build/three.module.js";

function createMaterial() {
  const material = new MeshStandardMaterial({
    color: 'indigo',
  });
  
  return material;
}

function createMeshGroup() {

  const group = new Group();

  const geometry = new ConeBufferGeometry(0.25, 1);
  const material = createMaterial();
  const protoSphere = new Mesh(geometry, material);

  group.add(protoSphere);

  for (let i = 0; i < 1; i += 0.05) {
    const sphere = protoSphere.clone();

    sphere.position.x = Math.cos(2 * Math.PI * i);
    sphere.position.y = Math.sin(2 * Math.PI * i);
    sphere.position.z = -i * 5;

    sphere.scale.multiplyScalar(0.0001 + i);
    
    group.add(sphere);
  }

  group.scale.multiplyScalar(2);

  const radiansPerSecond = MathUtils.degToRad(30);


  group.tick = (delta) => {
    group.rotation.z -= delta * radiansPerSecond;
  };

  return group;
}

export { createMeshGroup };