// Q1 – The Startup Morning: Async Coffee Maker
// Each step returns a Promise that resolves after 1-2 seconds.
// Random failure simulated with Math.random().

function delayRandom(min=1000, max=2000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Boiled water.");
      // simulate 20% chance failure
      Math.random() < 0.2 ? reject("Boiler failed") : resolve("Water boiled");
    }, delayRandom());
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Brewed coffee.");
      Math.random() < 0.2 ? reject("Brewing error") : resolve("Coffee brewed");
    }, delayRandom());
  });
}

function pourIntoCup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Poured into cup.");
      Math.random() < 0.2 ? reject("Cup missing") : resolve("Poured");
    }, delayRandom());
  });
}

// Use Promise chaining (.then()) and .catch()
function makeCoffeeChain() {
  console.log("Starting coffee chain...");
  boilWater()
    .then(() => brewCoffee())
    .then(() => pourIntoCup())
    .then(() => console.log("Coffee ready for the team!"))
    .catch(err => console.error("Failed to make coffee:", err));
}

// Run demonstration
makeCoffeeChain();
