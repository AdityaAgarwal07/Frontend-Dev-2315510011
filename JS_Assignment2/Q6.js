
// Q6. Event-Based Counter Simulation
let count = 0;

function increment() {
  function update() {
    count++;
    console.log("Count after increment:", count);
  }
  update();
}

function decrement() {
  function update() {
    count--;
    console.log("Count after decrement:", count);
  }
  update();
}

increment();
decrement();
increment();
