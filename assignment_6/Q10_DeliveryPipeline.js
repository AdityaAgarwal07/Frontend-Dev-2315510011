// Q10 – The Final Delivery: Async Pipeline Debugger

function randomDelay() {
  return Math.floor(Math.random() * 1000) + 1000; // 1-2s
}

function maybeFail(prob=0.2) {
  return Math.random() < prob;
}

function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail(0.15)) reject("Failed to take order");
      else resolve("Order taken");
    }, randomDelay());
  });
}

function prepare() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail(0.2)) reject("Preparation failed");
      else resolve("Food prepared");
    }, randomDelay());
  });
}

function pack() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail(0.1)) reject("Packing error");
      else resolve("Package ready");
    }, randomDelay());
  });
}

function dispatch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail(0.15)) reject("Dispatch failed");
      else resolve("Out for delivery");
    }, randomDelay());
  });
}

function deliver() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (maybeFail(0.15)) reject("Delivery failed");
      else resolve("Delivered");
    }, randomDelay());
  });
}

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    console.log("Step 1: Order taken");
    await takeOrder();
    console.log("Step 2: Food prepared");
    await prepare();
    console.log("Step 3: Package ready");
    await pack();
    console.log("Step 4: Out for delivery");
    await dispatch();
    await deliver();
    console.log("Delivery completed!");
  } catch (err) {
    console.error("Pipeline failed!", err);
  }
}

/*
Comments:
- Each step returns a Promise that resolves/rejects asynchronously.
- Using async/await here makes the flow linear and easy to read.
- Event loop: each await yields to the event loop allowing other tasks/microtasks to run.
*/

runPipeline();
