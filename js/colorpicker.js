let colorbtn = document.getElementById("color-btn");
let colordiv = document.getElementById("color-picker");

function fun1() {
  let colortext = document.getElementById("color-text").value;
  colordiv.style.backgroundColor = colortext;
}

colorbtn.addEventListener("click", fun1);
