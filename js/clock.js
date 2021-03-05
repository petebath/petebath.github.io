let hand = document.getElementById("hand");
let shand = document.getElementById("shand");
let hourh = document.getElementById("hour");




function funclock(){
  let date = new Date();
  let sec1 = date.getSeconds();
  let min1 = date.getMinutes();
  let hour2 = date.getHours();

  
  let sec = ((sec1/60)*360)+90;
  let minute = ((min1/60)*360)+90;
  let hour = ((hour2/12)*360)+90;
  
  
  hand.style.transform = `rotate(${sec}deg)`; 
  shand.style.transform = `rotate(${minute}deg)`; 
  hourh.style.transform = `rotate(${hour}deg)`; 
  
  
  
  let time = `${hour2}:${min1}:${sec1}`;
  let degrees = `${hour}:${minute}:${sec}`;
};

setInterval(funclock, 1000);

