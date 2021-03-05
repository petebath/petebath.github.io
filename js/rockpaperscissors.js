// Get DOM Elements
let user = document.getElementById("user");
let comp = document.getElementById("comp");
let r = document.getElementById("r");
let p = document.getElementById("p");
let s = document.getElementById("s");
let rpsresult = document.getElementById("rpsresult");
// Setup variables

let userscore = 0;
let compscore = 0;

// Setup scoreboard


// Setup Event Listeners;

r.addEventListener("click", function(){
  game("r");
});
p.addEventListener("click", function(){
  game("p")
});
s.addEventListener("click", function(){
  game("s");
});

// Game Function

function game(x){
let dd = compgo();
let ss = x + dd;
  resulta(ss);
switch(ss){
  case "rs":
  case "pr":
  case "sp":  
    userscore ++;
    user.innerHTML = userscore;
    break;
  case "rp":
  case "ps":
  case "sr":
    compscore ++;
    comp.innerHTML = compscore;
    break;
  case "rr":
  case "pp":
  case "ss":
    break;
}};

// Computer Turn Function

function compgo(){
  let arr = ['r', 'p', 's'];
  let yy = Math.floor(Math.random()*3);
  let gg = arr[yy];
  return arr[yy];
}

function resulta(x){
switch(x){
  case "rs":
    rpsresult.innerHTML = "Rock beats Scissors";
    break;
  case "pr":
    rpsresult.innerHTML = "Paper beats Rock";
    break;
  case "sp":
    rpsresult.innerHTML = "Scissor beats Paper";
    break;
  case "rp":
    rpsresult.innerHTML = "Rock loses to Paper";
    break;
  case "ps":
    rpsresult.innerHTML = "Paper loses to Scissor";
    break;
  case "sr":
    rpsresult.innerHTML = "Scissor loses to Rock";
    break;
  case "rr":
    rpsresult.innerHTML = "Rock draws with Rock";
    break;
  case "pp":
    rpsresult.innerHTML = "Paper draws with Paper";
    break;
  case "ss":
    rpsresult.innerHTML = "Scissor draws with Scissor";
    break;
}

};
