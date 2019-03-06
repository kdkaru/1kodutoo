/*jshint esversion:6*/

let clockContainer;
let changeColorButton;
let dayContainer;

var today = new Date();
var hr = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();

window.onload = function (){
  init();
  changeColorButton = document.querySelector('#change-color');
  changeColorButton.addEventListener('click', changeBackgroundColor);
};

function init (){

  startClock();
}

function startClock(){

  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();

  clockContainer = document.querySelector('#clockContainer');
  updateClock();
  window.setInterval(function(){
    updateClock();
  }, 1000);

}

function updateClock(){
  const date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hr = (hr < 10) ? "0" + hr : hr;
  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;

  clockContainer.innerHTML = hr+":"+min+":"+sec;
  dayContainer = document.querySelector('#dayContainer');
  let day;
  var audio = new Audio('tick.mp3');
    audio.play();
  function getDay(){
    switch(new Date().getDay()){
      case 0:
        day = "PÜHAPÄEV";
        break;
      case 1:
        day = "ESMASPÄEV";
        break;
      case 2:
        day = "TEISIPÄEV";
        break;
      case 3:
        day = "KOLMAPÄEV";
        break;
      case 4:
        day = "NELJAPÄEV";
        break;
      case 5:
        day = "REEDE";
        break;
      case 6:
        day = "LAUPÄEV";
        break;
    }
  }

  getDay();

  dayContainer.innerHTML = day;
}

function changeBackgroundColor(){
  const red = Math.round(Math.random()*255);
  const green = Math.round(Math.random()*255);
  const blue = Math.round(Math.random()*255);

  document.getElementById("clockContainer").style.color = `rgb(${red},${green},${blue})`;
  document.getElementById("dayContainer").style.color = `rgb(${red},${green},${blue})`;
}

window.alert = function (){
  init();
  changeColorButton = document.querySelector('#change-color');
  changeColorButton.addEventListener('click', changeBackgroundColor);
};
