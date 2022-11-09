const btnday = document.querySelector("#day");
btnday.addEventListener("click", () => {
  document.getElementById("hero-section").style.backgroundColor = "white";
});
const btnnight = document.querySelector("#night");
btnnight.addEventListener("click", () => {
  document.getElementById("hero-section").style.backgroundColor = "black";
});
