function createStep(msg) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    const fail = Math.random() < 0.2;
    setTimeout(() => fail ? reject(msg + " FAILED") : resolve(msg), delay);
  });
}

function takeOrder() { return createStep("Step 1: Order taken"); }
function prepare()   { return createStep("Step 2: Food prepared"); }
function pack()      { return createStep("Step 3: Package ready"); }
function dispatch()  { return createStep("Step 4: Out for delivery"); }
function deliver()   { return createStep("Delivery completed!"); }

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    console.log(await takeOrder());
    console.log(await prepare());
    console.log(await pack());
    console.log(await dispatch());
    console.log(await deliver());
  } catch {
    console.log("Pipeline failed!");
  }
}

runPipeline();
