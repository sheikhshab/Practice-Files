"use strict";

var count = 0;
const span = document.getElementById("span");
const button = document.getElementById("btn");
const reset = document.getElementById("btn-reset");

button.addEventListener("click", function () {
  count++;
  span.textContent = count;
});

``
reset.addEventListener("click", () => {
  count = 0;
  span.textContent = count;     
});



