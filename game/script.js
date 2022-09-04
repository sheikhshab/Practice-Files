"use-strict";
const again = document.querySelector(".btn-agian");
const check = document.querySelector(".btn-check");
var input = document.querySelector(".number");
//var highscore = document.getElementById("high-score");
//var score = document.getElementById("score");

let score = 20;
let highscore = 0;

const randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

check.addEventListener("click", () => {
  var guess = Number(input.value);
  if (!guess) {
    document.getElementById("prompt").textContent = "No Number";
  } else if (guess === randomNumber) {
    document.getElementById("prompt").textContent = "Correct number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.getElementById("high-score").textContent =
      document.getElementById("score").textContent;
    document.querySelector(".check").innerHTML = randomNumber;
  } else if (guess > randomNumber) {
    document.getElementById("prompt").textContent = "High";
    document.getElementById("score").textContent =
      Number(document.getElementById("score").innerHTML) - 1;
  } else if (guess < randomNumber) {
    document.getElementById("prompt").textContent = "Low";
    document.getElementById("score").textContent =
      Number(document.getElementById("score").innerHTML) - 1;
  }
});

again.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".check").innerHTML = "?";
  document.getElementById("prompt").textContent = "Start Guessing";
  document.getElementById("score").textContent = "20";
  if (Number(document.getElementById("high-score").textContent) > currentHIgh) {
    document.getElementById("high-score").textContent =
      document.getElementById("high-score").textContent;
  }
  input.value = "";
});
