// Set up DOM

let todo = document.getElementById("todo");
let addbtn = document.getElementById("addbtn");
let text = document.getElementById("text");
function bbb (){
        todo.removeChild(this.parentNode);
}

function fun1000(){
    let newLi = document.createElement("li");
    newLi.innerHTML = text.value;
    let newbtn = document.createElement("button");
    newbtn.innerHTML = "delete";
    newbtn.className = "pete";
    newLi.appendChild(newbtn);
    todo.appendChild(newLi);
    newbtn.addEventListener("click", bbb);
}

addbtn.addEventListener("click", fun1000);