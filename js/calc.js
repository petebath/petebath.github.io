// setup inputs

let one    = document.getElementById("1");
let two    = document.getElementById("2");
let three  = document.getElementById("3");
let four   = document.getElementById("4");
let five   = document.getElementById("5");
let six    = document.getElementById("6");
let seven  = document.getElementById("7");
let eight  = document.getElementById("8");
let nine   = document.getElementById("9");
let zero   = document.getElementById("0");
let plus   = document.getElementById("+");
let minus  = document.getElementById("-");
let times  = document.getElementById("*");
let divide = document.getElementById("/");
let equals = document.getElementById("=");
let res   = document.getElementById("result");
let c      = document.getElementById("c");


// setup variables

let result = 0;
let sum = 0;
let factor = "";
let stage = 0;

function calc(result,sum,z){
  let yy = parseInt(result);
  let rr = parseInt(sum);
switch(z){
  case "+":
    return yy+rr;
    break;
  case "*":
    return yy*rr;
    break;
  case "-":
    return rr-yy;
    break;
  case "/":
    return rr/yy;
    break;
}


}

one.addEventListener("click", function(){
  result += one.value;
  res.innerHTML = result;

});

two.addEventListener("click", function(){
  result += two.value;
  res.innerHTML = result;

});
three.addEventListener("click", function(){
  result += three.value;
  res.innerHTML = result;

});

four.addEventListener("click", function(){
  result += four.value;
  res.innerHTML = result;

});
five.addEventListener("click", function(){
  result += five.value;
  res.innerHTML = result;

});

six.addEventListener("click", function(){
  result += six.value;
  res.innerHTML = result;

});
seven.addEventListener("click", function(){
  result += seven.value;
  res.innerHTML = result;

});

eight.addEventListener("click", function(){
  result += eight.value;
  res.innerHTML = result;

});

nine.addEventListener("click", function(){
  result += nine.value;
  res.innerHTML = result;

});
zero.addEventListener("click", function(){
  result += zero.value;
  res.innerHTML = result;

});


plus.addEventListener("click", function(){
  sum = result;
  factor = plus.value;
  result = 0;
  res.innerHTML = 0;
  stage++;
});
times.addEventListener("click", function(){
  sum = result;
  factor = times.value;
  result = 0;
  res.innerHTML = 0;
  stage++;
});
divide.addEventListener("click", function(){
  sum = result;
  factor = divide.value;
  result = 0;
  res.innerHTML = 0;
  stage++;
});
minus.addEventListener("click", function(){
  sum = result;
  factor = minus.value;
  result = 0;
  res.innerHTML = 0;
  stage++;
  
});

c.addEventListener("click", function(){
  sum = 0;
  result = 0;
  res.innerHTML = 0;
  stage++;
});

equals.addEventListener("click", function(){
 let yy = calc(result,sum,factor);
res.innerHTML = (yy);
  result = 0;
  sum = 0;
});