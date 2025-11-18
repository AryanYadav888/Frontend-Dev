let count = 0;

function increment() {
    function update() {
        count++;
    }
    update();
    console.log("Count:", count);
}

function decrement() {
    function update() {
        count--;
    }
    update();
    console.log("Count:", count);
}

increment();
increment();
decrement();
increment();
