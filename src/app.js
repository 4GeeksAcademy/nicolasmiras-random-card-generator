import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //escribe tu codigo aca
  let cardNumbers = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
  let cardType = [
  { type: "♠", color: "black" },
  { type: "♥", color: "red" },
  { type: "♦", color: "red" },
  { type: "♣", color: "black" }
];


  let randomNumber = cardNumbers[Math.floor(Math.random()*12)]
  let randomType = cardType[Math.floor(Math.random()*4)]


  document.getElementById("numero").innerHTML = cardNumbers[Math.floor(Math.random()*12)];
  document.getElementById("pinta").innerHTML = randomType.type;


  document.getElementById("pinta").style.color = randomType.color;
  document.getElementById("numero").style.color = randomType.color;


};
