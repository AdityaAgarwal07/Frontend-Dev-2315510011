// Q2 – Task Scheduler: Micro vs Macro Challenge
console.log("Start");

// macrotask
setTimeout(() => {
  console.log("macrotask: setTimeout");
}, 0);

// microtask (Promise.then)
Promise.resolve().then(() => {
  console.log("microtask: Promise.then");
});

// synchronous log
console.log("Synchronous log");

console.log("End");

/*
Explanation (in comments):
Order of logs will be:
1. Start
2. Synchronous log
3. End
4. microtask: Promise.then
5. macrotask: setTimeout

Why? JavaScript runs the current call stack first (synchronous code).
Microtasks (Promises) are processed after the current stack but before the next macrotask.
Macrotasks (setTimeout callbacks) run later in the event loop cycle.
*/
