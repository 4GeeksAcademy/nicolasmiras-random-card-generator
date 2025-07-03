import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cardNumbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  let cardType = [
    { type: "♠", color: "black" },
    { type: "♥", color: "red" },
    { type: "♦", color: "red" },
    { type: "♣", color: "black" }
  ];

  let randomType = cardType[Math.floor(Math.random() *4)];

  document.getElementById("numero").innerHTML = cardNumbers[Math.floor(Math.random() *12)];
  document.getElementById("pinta-top").innerHTML = randomType.type;
  document.getElementById("pinta-bottom").innerHTML = randomType.type;

  document.getElementById("numero").style.color = randomType.color;
  document.getElementById("pinta-top").style.color = randomType.color;
  document.getElementById("pinta-bottom").style.color = randomType.color;
};
