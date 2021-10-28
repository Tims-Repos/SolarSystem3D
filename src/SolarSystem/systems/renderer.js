import { 
    WebGLRenderer,
    BasicShadowMap,
} from "../../../vendor/three/build/three.module.js";

// The function to set up the renderer
// also set a few options to create physically
// correct lighting.
function createRenderer() {
    const renderer = new WebGLRenderer({ antialias: true });

    renderer.physicallyCorrectLights = true;
    renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = BasicShadowMap;

    return renderer;
}

export { createRenderer };