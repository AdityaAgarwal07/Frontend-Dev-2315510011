// Q9 – Debugging the Event Loop
// Predicted output (comments):
// Script start
// Script end
// Promise callback
// Timeout callback
//
// Now run and confirm:

console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");

// Explanation:
// The synchronous code runs first (start, end).
// Microtasks (Promise callbacks) run after the current stack but before macrotasks.
// setTimeout callbacks are macrotasks and will execute later.
