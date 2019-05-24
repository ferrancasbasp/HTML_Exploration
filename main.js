var gameData = {
  Rank: 0,
  Time: 30
}
function Rankincrease(Score) {
  gameData.Rank += Score
  document.getElementById("Rank").innerHTML = gameData.Rank + " rank p"
}
function TimeuntilWriteup() {
  gameData.Time-=1
  document.getElementById("Time").innerHTML = gameData.Time + " dias hasta el writeUP."
}
function POP() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


var mainGameLoop = window.setInterval(function() {
  Rankincrease(0.01)
  TimeuntilWriteup()
}, 1000)
