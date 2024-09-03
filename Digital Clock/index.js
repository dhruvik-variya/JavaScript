let time=document.getElementById("time");
let ampm=document.getElementById("ampm");
let day=document.getElementById("day");

const clock=(()=>{
let date=new Date()

let hours=date.getHours()

let minutes=date.getMinutes()

let seconds=date.getSeconds()

if(minutes<10){
    minutes="0"+minutes
}
if(seconds<10){
    seconds="0"+seconds
}
if(hours<=12){
    ampm.innerHTML="AM"
}
else{
    ampm.innerHTML="PM"
}
if(hours>12){
    hours=hours-12
}
if(hours<10){
    hours="0"+hours
}
time.innerHTML=`${hours}:${minutes}:${seconds}`

let dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let months=["january","february","march","april","may","june","july","august","september","octomber","november","december"]

const days = dayNames[date.getDay()]
const month = months[date.getMonth()]
const DATE = date.getDate();
const year = date.getFullYear();
day.innerHTML=` ${days} ${DATE}  ${month}`
})
clock()

setInterval(clock,1000)