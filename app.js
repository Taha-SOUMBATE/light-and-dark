let switche = document.querySelector("#switch");
let body = document.querySelector("body");
let form = document.querySelector("form");
let btn = document.querySelector("button");
switche.addEventListener("change", () => {
  form.classList.toggle("formColor");
  body.classList.toggle("bodyColor");
  btn.classList.toggle("buttonColor");
});
let pass = document.querySelector("#pass");
let confirmPass = document.querySelector("#confirm-pass");
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (pass.value.length >= 6) {
    if (confirmPass.value === pass.value) {
    } else {
      p2.innerText = "is not match";
      p2.style = "color:red";
      setTimeout(() => {
        p2.innerText = "";
      }, 3000);
    }
  } else {
    p1.innerText = "ajoute du text";
    p1.style = "color:red";
    setTimeout(() => {
      p1.innerText = "";
    }, 3000);
  }
});
