console.log("Start");

setTimeout(() => {
  console.log("setTimeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise.then (Microtask)");
});

console.log("Synchronous Log");
console.log("End");
