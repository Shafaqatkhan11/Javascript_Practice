// Digitial Clock code
let hour=document.querySelector(".hour");
let min=document.querySelector(".minutes");
let second=document.querySelector(".seconds");

//
 let ticking=()=>{
    let currentDate=new Date()
    let getHour=currentDate.getHours()
    let getMinute=currentDate.getMinutes()
    let getSeconds=currentDate.getSeconds()
   hour.textContent=getHour;
   min.textContent=getMinute;
   second.textContent=getSeconds 
   // textContent Change Dom 
 }
 setInterval(ticking,1000);  //1000 = 1 sec

