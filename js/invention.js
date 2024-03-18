remez = false
function steal(){
    // if (!("gameStarted" in localStorage)){

        console.log("haven't played yet")
        var invention = document.getElementById("invention-input").value
        console.log(invention)
        localStorage.setItem("invention", invention);
        var timerValue = 30 * 60,
            display = document.querySelector('#safedisplay');
        localStorage.setItem("duration", timerValue)
        console.log(localStorage.getItem("duration"))
        document.getElementById("nextbutton").id = "visible";
        startTimer(timerValue, display);
// }
    
}

function startTimer(duration, display) {
    
    var timer = duration, minutes, seconds;
    const timerInterval = setInterval(function () {
        
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            localStorage.setItem("timeOver", true);
            gameOver()
            clearInterval(timerInterval)
        }
        if(remez == true && timer > 2*60){
            console.log("remez activated")
            timer = timer - 2 * 60;
            remez = false;
            clue = document.getElementById("clue").style.display = "block"
            document.getElementById("cluebutton").style.display = "none"
        }
        localStorage.setItem("duration", timer);
    }, 1000);
}
function gameOver(){
    if("timeOver" in localStorage){
        document.body.style.backgroundColor = 'red';
        document.querySelector('h1').textContent = 'הזמן נגמר!'
        document.getElementById('game').remove();
    }

}
function clue(){
    remez = true;
}

window.onload = function () {
    display = document.querySelector('#safedisplay');
    var duration = parseInt(localStorage.getItem("duration"));
    startTimer(duration, display);

};