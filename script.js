// Code for madlibs.js
var sides = document.getElementById("sides");
var dNum = document.getElementById("dNum");
var showResult = document.getElementById("showResult");
var diceBox = document.getElementById("diceBox");
var sButton = document.getElementById("submit").addEventListener("click", rollDice);

function rollDice(){
  let faces = sides.value;
  let dice = dNum.value;
  let result = 0;
  diceBox.style.backgroundSize = "100px 100px";
  for ( let die =0; die<dice; die++){
    if (faces == 12) show12Dice();
    else showDice();
    result+=(eachRoll(faces)); 
    setTimeout(hideDice,3000);
  }
  showResult.innerHTML = result;
  console.log(result);
}

function eachRoll(faces){
  roll = Math.floor(Math.random()*+faces)+1;
  return roll;
}

function show12Dice(){
  diceBox.style.backgroundImage="url('12-sided.gif')";
  showResult.classList.remove("showme");
  showResult.classList.add("hideme");
}

function showDice(){
  diceBox.style.backgroundImage="url('dice.gif')";
  showResult.classList.remove("showme");
  showResult.classList.add("hideme");
}

function hideDice(){
  diceBox.style.backgroundImage="url('spacer.png')";
  showResult.classList.add("showme");
  showResult.classList.remove("hideme");
}