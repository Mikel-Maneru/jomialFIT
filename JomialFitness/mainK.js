const hamburguesa = document.querySelector(".hamburgesa");
const sidebar = document.querySelector(".sidebar");

hamburguesa.addEventListener("click", () => {
  hamburguesa.classList.toggle("clicked");
  sidebar.classList.toggle("show");
});

$(document).ready(function () {
  var div = document.getElementById("icon");
  var div2 = document.getElementById("icon2");
    toggle = false;

  div.onclick = function () {
 
    div2.style.background = toggle ? "#ffe7d0" : "#fc6e20"; 
    div2.style.color = toggle ? "black" : "white";// change background color depending on s
    div.style.background = toggle ? "#fc6e20" : "#ffe7d0"; 
    div.style.color = toggle ? "white" : "black";// change background color depending on the value of toggle
  };
  div2.onclick = function () {

    div.style.background = toggle ? "#ffe7d0" : "#fc6e20"; 
    div.style.color = toggle ? "black" : "white";// change background color depending on t
    div2.style.background = toggle ? "#fc6e20" : "#ffe7d0"; 
    div2.style.color = toggle ? "white" : "black";// change background color depending on the value of toggle
  };
  toggle = !toggle; // invert toggle
  div.style.background = "#ffe7d0";
  div2.style.background = "#ffe7d0";

});
