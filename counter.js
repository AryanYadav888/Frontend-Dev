"use strict";

const msg = document.getElementById("msg");
const count = document.getElementById("count");
const reset = document.getElementById("reset");
let max = 100;

msg.addEventListener("keydown", e => {
  if (msg.value.length >= max && e.key.length === 1) e.preventDefault();
});

msg.addEventListener("input", () => {
  let left = max - msg.value.length;
  count.textContent = left;
  if (left <= 0) count.style.color = "red";
  else if (left <= 20) count.style.color = "orange";
  else count.style.color = "black";
});

reset.onclick = () => {
  msg.value = "";
  count.textContent = max;
  count.style.color = "black";
};
