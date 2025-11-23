// Q4 – DevOps Delay: Async Timeout Race

function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2 ? reject("Server A crashed") : resolve("Server A: OK (2s)");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2 ? reject("Server B crashed") : resolve("Server B: OK (3s)");
    }, 3000);
  });
}

// Promise.all to wait for both
Promise.all([serverA(), serverB()])
  .then(results => {
    console.log("Deployment completed for all servers");
    console.log(results);
  })
  .catch(err => {
    console.error("One or more servers failed:", err);
  });

// Promise.race to get fastest
Promise.race([serverA(), serverB()])
  .then(fastest => {
    console.log("Fastest response:", fastest);
  })
  .catch(err => {
    console.error("Race error:", err);
  });
