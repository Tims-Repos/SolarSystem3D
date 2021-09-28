import { 
    WebGLRenderer,
    BasicShadowMap,
} from "../../../vendor/three/build/three.module.js";

function createRenderer() {
    const renderer = new WebGLRenderer({ antialias: true });

    renderer.physicallyCorrectLights = true;
    renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = BasicShadowMap;

    return renderer;
}

export { createRenderer };