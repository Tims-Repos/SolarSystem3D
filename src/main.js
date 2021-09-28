import { SolarSystem } from "./SolarSystem/SolarSystem.js";

function main() {
  const container = document.querySelector('#scene-container');

  // Create instance of our SolarSystem app
  const solarSystem = new SolarSystem(container);

  // Start the animation loop
  solarSystem.start();
}

// Call main to start our app
main();