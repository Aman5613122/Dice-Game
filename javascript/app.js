var ran1 = Math.floor(Math.random() * 6) + 1;

var p1 = "/img/dice" + ran1 + ".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src", p1);

var ran2 = Math.floor(Math.random() * 6) + 1;

var p2 = "/img/dice" + ran2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", p2);

if (ran1 > ran2) {
  window.onload = function () {
    alert("Player 1 win");
  };
} else if (ran2 > ran1) {
  window.onload = function () {
    alert("Player 2 win");
  };
} else {
  window.onload = function () {
    alert("Its a TIE");
  };
}
