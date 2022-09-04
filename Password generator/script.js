const display = document.querySelector(".pass");
const copy = document.querySelector(".btn-copy");
const lenght = document.querySelector("#lenght");
const upper = document.querySelector("#upper");
const lower = document.querySelector("#lower");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbols");
const generate = document.querySelector(".btn-gen");

const upperCase = "ABCCDEFGHIKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const Numbers = "0123456789";
const Symbols = "!@#$%^&*()_+";

function getupper() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getlower() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getnumbers() {
  return Numbers[Math.floor(Math.random() * Numbers.length)];
}

function getsymbols() {
  return Symbols[Math.floor(Math.random() * Symbols.length)];
}

function getpassword() {
  const passwordlenght = lenght.value;
  let password = "";

  for (let i = 0; i < passwordlenght; i++) {
    password += getcheck();
  }

  display.innerHTML = password;
}

function getcheck() {
  var char = [];
  if (symbol.checked) {
    char.push(getsymbols());
  }
  if (lower.checked) {
    char.push(getlower());
  }
  if (upper.checked) {
    char.push(getupper());
  }
  if (number.checked) {
    char.push(getnumbers());
  }
  if (char.length === 0) return "";

  return char[Math.floor(Math.random() * char.length)];
}

generate.addEventListener("click", getpassword);

copy.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = display.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});
