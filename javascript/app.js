var count = document.querySelectorAll(".disk").length;

for (var i = 0; i < count; i++) {
  document.querySelectorAll(".disk")[i].addEventListener("click", function () {
    sound(this.innerHTML);
    buttonanime(this.innerHTML);
  });
}

document.addEventListener("keypress", function (eve) {
  sound(eve.key);
  buttonanime(eve.key);
});

function sound(exp) {
  switch (exp) {
    case "w":
      var audio = new Audio("/sound/tom1.mp3").play();
      break;

    case "a":
      var audio = new Audio("/sound/tom2.mp3").play();
      break;

    case "s":
      var audio = new Audio("/sound/tom3.mp3").play();
      break;

    case "d":
      var audio = new Audio("/sound/tom4.mp3").play();
      break;

    case "j":
      var audio = new Audio("/sound/kickbass.mp3").play();
      break;

    case "k":
      var audio = new Audio("/sound/snare.mp3").play();
      break;

    case "l":
      var audio = new Audio("/sound/crash.mp3").play();
      break;

    default:
      alert("Press the wrong button");
  }
}

function buttonanime(anim) {
  anim = "." + anim;
  var result = document.querySelector(anim);
  result.classList.add("set");

  setTimeout(function () {
    result.classList.remove("set");
  }, 150);
}
