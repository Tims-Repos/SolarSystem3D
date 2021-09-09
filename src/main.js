import { World } from './World/World.js';

function main() {
  const container = document.querySelector('#scene-container');

  // Create instance of our World app
  const world = new World(container);

  // Start rendering our scene
  world.render();
}

// Call main to start our app
main();