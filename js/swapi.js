// Setup DOM

let swapidiv = document.getElementById("swapi");
let url = "https://swapi.co/api/films/";
let http = new XMLHttpRequest();

// Setup AJAX

http.open("GET", url);
http.responseType = "json";
http.send();


// Function to insert HTML, needs to loop

function swapi(rr){
  for(let i=0; i<=10; i++){
      swapidiv.innerHTML += "<h2>" + rr.results[i].title +"</h2>" + "<p>" + rr.results[i].opening_crawl+ "</p>";
  }
}


// Onload Function

http.onload = function(){
  let rr  = http.response;
  swapi(rr)
console.log(rr);

};

