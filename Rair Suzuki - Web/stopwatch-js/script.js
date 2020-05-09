let hour = document.getElementById("hour");
let hours = 0;
let min = document.getElementById("min");
let minutes = 0;
let sec = document.getElementById("sec");
let seconds = 0;
let startButton = document.getElementById("start");
let started = false;


function stopWatch() {
    started = true;
    if (startButton.innerText == "pause"){
        window.timeWatchAux = setInterval(function () {
            if (seconds == 60){
                if (minutes < 9){
                    seconds = 0;
                    sec.innerText = 0;
                    minutes++;
                    min.innerText = "0" + minutes;
                } else {
                    seconds = 0;
                    sec.innerText = 0;
                    minutes++;
                    min.innerText = minutes;
                }
            }
            if (minutes == 60){
                if (hours < 9){
                    minutes = 0;
                    min.innerText = 0;
                    hours++;
                    hour.innerText = "0" + hours;
                } else{
                    minutes = 0;
                    min.innerText = 0;
                    hours++;
                    hour.innerText = hours;
                }
            }
            if (seconds < 10){
                sec.innerText = "0" + seconds;
                seconds++;
            } else {
                sec.innerText = seconds;
                seconds++;
            }

        }, 1000);
    }
}

function clearIt() {
    hour.innerText = "0" + 0;
    min.innerText = "0" + 0;
    sec.innerText = "0" + 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    startButton.innerText = "start";
    clearInterval(timeWatchAux);
    started = false;
}

function start() {
    if (startButton.innerText == "start"){
        startButton.innerText = "pause";
        if (started == false){
            stopWatch();
        }
    }else{
        pause();
        startButton.innerText = "start";
    }
}

function pause() {
    clearInterval(timeWatchAux);
    started = false;
}