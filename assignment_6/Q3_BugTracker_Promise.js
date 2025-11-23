// Q3 – Bug Tracker: Callback to Promise Migration

// Original:
// function fetchBugs(callback) {
//   setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
// }

// New Promise-based version:
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fail = Math.random() < 0.25; // 25% chance to fail
      if (fail) reject(new Error("API Error: Failed to fetch bugs"));
      else resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

// Use it and handle errors
getBugs()
  .then(bugs => {
    console.log("Bugs received:");
    console.table(bugs.map((b, i) => ({ id: i+1, bug: b })));
  })
  .catch(err => {
    console.error("Error getting bugs:", err.message);
  });
