window.addEventListener("load", function(){
    if (Number(localStorage.getItem("timeLeft")) > 0){
        startCountdown(Number(localStorage.getItem("timeLeft")));
    }
    document.getElementById("startTimer").addEventListener("click", function(){
    var hours = document.getElementById("hours").value;
    var mins = document.getElementById("mins").value;
    var secs = document.getElementById("secs").value;
    localStorage.setItem("timeLeft", "0");
    setCountdown(hours, mins, secs);
})

 function setCountdown(hour = 0, mins = 0, secs = 0){
      var milisecs = (hour * 3600000) + (mins * 60000) + (secs * 1000);
      startCountdown(Date.now() + milisecs);
  }
  
  function startCountdown(milisecs){
    localStorage.setItem("timeLeft", String(milisecs));   
    var distance =  milisecs - Date.now();
    clearInterval(timerInterval);
    var timerInterval = setInterval(function(){
        var hours = Math.floor(distance / 3600000);
        var mins = Math.floor((distance - (hours*3600000))/60000);
        var secs = Math.floor((distance - ((hours*3600000)+ (mins*60000)))/1000);
        document.getElementById("timerDisplay").innerHTML = (`${hours} hours, ${mins} minutes and ${secs} seconds`);
        distance-=1000;
        if(distance < 0){
            clearInterval(timerInterval);
            localStorage.setItem("timeLeft", "0");
            document.getElementById("timerDisplay").innerHTML = "Time over";
        }
    }, 1000);
    
  }
});