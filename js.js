let timer;
let isRunning = false;
let elapsedTime = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStopBtn').textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStopBtn').textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    elapsedTime = 0;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('startStopBtn').textContent = 'Start';
    isRunning = false;
}

function updateTime() {
    elapsedTime++;
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    document.getElementById('display').textContent = 
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}
