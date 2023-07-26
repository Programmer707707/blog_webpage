const bulb = document.getElementById("bulb");
const body = document.getElementById("body");
const home = document.getElementById("home");
const intro = document.getElementById("intro");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const photo = document.getElementById("my-photo");
bulb.addEventListener("click", () => {
  bulb.classList.toggle("bulb");
  body.classList.toggle("black");
  home.classList.toggle("black");
  text1.classList.toggle("white");
  text2.classList.toggle("white");
  text3.classList.toggle("white");
});
