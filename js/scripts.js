const text = document.querySelector(".main-text");

var n = 0;
let timer = setInterval(onTick, 2500);

function onTick() {
  if (n === 0) {
    text.innerHTML = " Hi there! I'm <span>Shashi Bhushan</span>";

    n = 1;
    return;
  }
  if (n === 4) {
    text.innerHTML = ' Hi there! I\'m <span class="jobs" ">Shashi Bhushan</span>';

    n = 1;
    return;
  } else if (n == 1) {
    text.innerHTML = ' Hi there! I\'m <span class="jobs">a Developer.</span>';
    n = 2;
    return;
  } else if (n == 2) {
    text.innerHTML =
      ' Hi there! I\'m <span class="jobs">a Full-Stack Developer.</span>';
    n = 3;
    return;
  } else if (n == 3) {
    text.innerHTML = ' Hi there! I\'m <span class="jobs">a Software Developer.</span>';
    n = 4;
    return;
  }
}
//to prevent autoscroll to bottom on refresh
$(window).on("load", function() {
  $(window).scrollTop(0);
  $(".loader-wrapper")
    .delay(3000)
    .fadeOut("medium");

  $(".home-text").fadeOut("fast");

  $(".home-text")
    .delay(4000)
    .fadeIn("slow");
});

// to prevent full render of name on small devices

const name = document.querySelector(".navbar-brand");

$(document).ready(function() {
  if ($(window).width() < 400) {
    name.innerHTML = "SHASHI BHUSHAN";
  } else {
    name.innerHTML = "SHASHI BHUSHAN ROY";
  }
});
$(window).resize(function() {
  if ($(window).width() < 400) {
    name.innerHTML = "SHASHI BHUSHAN";
  } else {
    name.innerHTML = "SHASHI BHUSHAN ROY";
  }
});
