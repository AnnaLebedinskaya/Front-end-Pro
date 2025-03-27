let countdown = 85; // Початковий час у секундах (01:25)
let timerInterval;

function updateTimerDisplay() {
    const minutes = Math.floor(countdown / 60).toString().padStart(2, '0');
    const seconds = (countdown % 60).toString().padStart(2, '0');
    document.getElementById("timer").textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (timerInterval) return; 

    timerInterval = setInterval(() => {
        if (countdown > 0) {
            countdown--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    countdown = 85; 
    updateTimerDisplay();
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

updateTimerDisplay(); 
