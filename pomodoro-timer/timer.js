function setTimer() {
    let minutes = 25;
    let seconds = 0;
    let interval = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        console.log(`${minutes}:${seconds < 10 ? "0" : ""}`);
        if (minutes === 0 && seconds === 0) {
            clearInterval(interval);
            console.log("Time's up! Take break now for 5 minutes.");
          setTimeout(() => {
            console.log("Break is over. starting timer again.");
            setTimer();
          }, 5 * 60 * 1000);  
        } 
    }, 1000);
}

setTimer();