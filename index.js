let start= document.getElementById("start");
let lapBtn =document.getElementById("lap")
let hours =document.getElementById("hours")
let minutes =document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let counts = document.getElementById("count")
var hour = 00;
var second =00;
var minute =00;
var count =00;
let timeCount=document.getElementById("timeCountDown")
start.addEventListener("click", function startCount(){
  timer= true;
  stopWatch();
})

function stopWatch(){
  if (timer){
    count++;

    if (count ==100){
      second++;
      count =0
    }
    if(second == 60){
      minute++;
      second =0;
    }
    if (minute == 60){
      hour++;
      minute = 0;
      second =0;

    }
    let hrString=hour;
    let minString=minute;
    let secString=second;
    let countString=count;

    if (hour <10){
      hrString ="0"+hrString;
    }
    if (minute <10){
      minString ="0"+minString;
    }
    if (second <10){
      secString ="0"+secString;
    }
    if (counts <10){
      countString ="0"+countString;
    }
    hours.innerHTML=hrString;
    minutes.innerHTML=minString;
    seconds.innerHTML=secString;
    counts.innerHTML=countString;
    setTimeout(stopWatch, 10);
  }

}


lapBtn.addEventListener("click", function lapCount(){
  lapNow = hour +" : " +minute +" : " +second+" : "+ count;
  laps=document.getElementById("lapRecord").innerHTML + lapNow;
  document.getElementById("lapRecord").innerHTML = laps;
  console.log("lap");
})