import { Clock } from "../../../vendor/three/build/three.module.js";

const clock = new Clock();

// The Loop class is used to set the animationLoop
// from the renderer class and also has a list of
// updatable objects that each have an implementation
// of the tick function that gets called here each frame.
// Polymorphism in Javascript :D
// Note: To be totally honest, I saw this way of using 
// polymorphism in a tutorial, but still I am the one
// that implemented it in my own project, so that counts
// for something right? :)
class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
    
  }

  start() {
    this.renderer.setAnimationLoop(() => {

      // Move every animated object that implements this
      // function before each frame updates.
      this.tick();

      // Render a frame.
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    // Stop the animation loop.
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    const delta = clock.getDelta();
    
    // This calls the tick function of every 
    // object that implements it and gives
    // it the difference in time between
    // to frames. (delta).
    for (const object of this.updatables) {
      object.tick(delta);
    }
  }
}

export { Loop };