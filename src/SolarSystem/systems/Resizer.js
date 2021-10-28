// A way to set the size of our container element.
// This gets called in our class below this piece
// of code. 
const setSize = (container, camera, renderer) => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
};

// Our resizer class. It adds an 
// eventlistener to our window and 
// checks for possible resizing.
// This calls our setSize function to
// keep the scene from becoming really
// stretched out.

class Resizer {
  constructor(container, camera, renderer) {
    setSize(container, camera, renderer);

    window.addEventListener('resize', () => {
        setSize(container, camera, renderer);
        this.onResize();
    });
  }
  onResize() {}
}

export { Resizer };
