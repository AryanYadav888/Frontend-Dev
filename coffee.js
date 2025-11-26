// Utility: returns a promise that resolves or rejects randomly after 1–2 sec
function delay(stepName) {
  return new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 1000) + 1000; // 1–2 sec
    const fail = Math.random() < 0.2; // 20% chance of failure

    setTimeout(() => {
      if (fail) {
        reject(`${stepName} failed!`);
      } else {
        console.log(`${stepName} completed.`);
        resolve();
      }
    }, time);
  });
}

// Steps
function boilWater() {
  return delay("Boiling water");
}

function brewCoffee() {
  return delay("Brewing coffee");
}

function pourCoffee() {
  return delay("Pouring into cup");
}

// Promise chaining
boilWater()
  .then(brewCoffee)
  .then(pourCoffee)
  .then(() => console.log("Coffee ready for the team!"))
  .catch(err => console.error("Error:", err));
