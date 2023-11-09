let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    const timeDisplay = document.querySelector(".time-display");
    timeDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById("start-btn").addEventListener("click", function () {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        isRunning = true;
    }
});

document.getElementById("stop-btn").addEventListener("click", function () {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
});

document.getElementById("reset-btn").addEventListener("click", function () {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    const timeDisplay = document.querySelector(".time-display");
    timeDisplay.textContent = "00:00:00";
});
