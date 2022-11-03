let start= document.getElementById("start");
let lap =document.getElementById("lap")
let hours =document.getElementById("hours")
let minutes =document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let timer;
let timeCount=document.getElementById("timeCountDown")
start.addEventListener("click", function startCount(){
  let sec =00;
  timer=setInterval(()=>{
    seconds.innerHTML="" +sec;
    sec++;
  },10)
})()
lap.addEventListener("click", function lapCount(){
  console.log("lap");
})
