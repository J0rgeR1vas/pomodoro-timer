let interval;

function startTimer() {
  if (interval) return; // Timer already running, ignore the click
  
  let minutes = 25;
  let seconds = 0;
  let timerElement = document.getElementById("timer");
  let messageElement = document.getElementById("message");

  interval = setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (minutes === 0 && seconds === 0) {
      clearInterval(interval);
      interval = null;
      messageElement.textContent = "Time's up! Take a break now for 5 minutes.";

      setTimeout(() => {
        messageElement.textContent = "Break is over. Starting timer again.";
        startTimer();
      }, 5 * 60 * 1000);
    }
  }, 1000);
}

function resetTimer() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }

  let timerElement = document.getElementById("timer");
  let messageElement = document.getElementById("message");

  timerElement.textContent = "25:00";
  messageElement.textContent = "";
}



