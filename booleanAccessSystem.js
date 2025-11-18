let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

if (isSecure) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Test different values
isDoorLocked = false;
isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
console.log(isSecure ? "Secure" : "Unsafe");
