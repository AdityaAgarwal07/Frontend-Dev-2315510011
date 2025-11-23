// Q5 – Frontend Rush: Avoiding Callback Hell

function stage(name, cb) {
  setTimeout(() => {
    console.log(name);
    cb && cb();
  }, 1000);
}

// Nested callbacks (callback hell)
function pipelineWithCallbacks() {
  console.log("Pipeline (callbacks) start");
  stage("design", () => {
    stage("build", () => {
      stage("test", () => {
        stage("deploy", () => {
          stage("celebrate", () => {
            console.log("Pipeline (callbacks) end");
          });
        });
      });
    });
  });
}

// Cleaner async/await version
function stagePromise(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name);
      resolve();
    }, 1000);
  });
}

async function pipelineAsyncAwait() {
  console.log("Pipeline (async/await) start");
  try {
    await stagePromise("design");
    await stagePromise("build");
    await stagePromise("test");
    await stagePromise("deploy");
    await stagePromise("celebrate");
    console.log("Pipeline (async/await) end");
  } catch (e) {
    console.error("Pipeline failed:", e);
  }
}

/*
Comment: async/await improves readability by linearizing asynchronous code,
making it look and behave like synchronous code without deeply nested callbacks.
*/

// Run both demos
pipelineWithCallbacks();
setTimeout(() => pipelineAsyncAwait(), 7000); // delay to separate outputs
