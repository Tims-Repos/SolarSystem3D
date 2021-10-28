import { 
    Scene, 
    TextureLoader, 
    WebGLCubeRenderTarget 
} from '../../../vendor/three/build/three.module.js';

// The function to create the scene in 
// which we render the solar system.
// This also creates a kind of skyBox like
// texture with the milkyway. Although
// I think the resolution of the image is a bit
// over the top and possibly need to get another
// one if we're adding more objects to the scene.
// But it's fun for testing purposes and looks
// great.
function createScene(renderer) {
    const scene = new Scene();

    const loader = new TextureLoader();
    const texture = loader.load(
    '../../../assets/textures/milkyway/8k_stars_milky_way.jpg',
    () => {
      const renderTarget = new WebGLCubeRenderTarget(texture.image.height);
      renderTarget.fromEquirectangularTexture(renderer, texture);
      scene.background = renderTarget.texture;
    });

    return scene;
}

export { createScene };