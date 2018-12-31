"use strict";

// Random Number Generator

let randombtn = document.getElementById("random-btn");
let randomnum = document.getElementById("random-num");
let fun = function(){
    let randomnumber = Math.round(1000000*Math.random());
    randomnum.innerHTML = randomnumber;

    return randomnumber;
};

randombtn.addEventListener("click",fun);
