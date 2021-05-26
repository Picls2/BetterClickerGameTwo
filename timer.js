var secondsPlayed = 0

var minutesPlayed = 0
 
var hoursPlayed = 0




function increaseTimer(){
    
    secondsPlayed++;
    
    if(secondsPlayed == 60){
        secondsPlayed = 0;
        minutesPlayed++;
    }else if(minutesPlayed == 60){
        minutesPlayed = 0;
        hoursPlayed++;
    }
    var currentTime = `Time Played: ${hoursPlayed}h ${minutesPlayed}m ${secondsPlayed}s`
    document.getElementById('gameTimer').innerHTML = currentTime;
}

window.onload = () => {
    setInterval(() => {increaseTimer();}, 1000)
}
