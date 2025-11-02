let clickMe = document.getElementById("clickMe");
let result = document.getElementById("result");
let highScoreDisplay = document.getElementById("highScore");
let count = 0;
let isActive = true;
let timer;

let highScore = localStorage.getItem("highScore") || 0;
highScoreDisplay.textContent = highScore;

function startTimer() {
  clearTimeout(timer);
  timer = setTimeout(() => {
    isActive = false;
    clickMe.style.backgroundColor = "gray";
    clickMe.style.cursor = "not-allowed";
    clickMe.querySelector("h1").textContent = "Time Over!";

    if (count > highScore) {
      highScore = count;
      localStorage.setItem("highScore", highScore);
      highScoreDisplay.textContent = highScore;
    }

  }, 10000);
}

startTimer();

clickMe.addEventListener("click", function () {
  if (!isActive) return;
  count++;
  result.innerHTML = count;
});

function reset() {
  isActive = true;
  count = 0;
  result.innerHTML = count;
  clickMe.style.backgroundColor = "#2563eb";
  clickMe.style.cursor = "pointer";
  clickMe.querySelector("h1").textContent = "click me";
  startTimer();
}
