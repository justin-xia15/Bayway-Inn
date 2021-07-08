$(".hamburger-btn").click(function() {
  $(".menu").slideToggle();
});

$(".btn").click(function() {
  $(".btn").addClass("pressed");
  setTimeout(function() {
    $(".btn").removeClass("pressed");
  }, 100)
});

$(".title-btn").click(function() {
  $(".title-btn").addClass("title-pressed");
  setTimeout(function() {
    $(".title-btn").removeClass("title-pressed");
  }, 100)
});

function hamburgerAnimation(x) {
  x.classList.toggle("change");
}
