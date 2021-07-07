$(".hamburger-btn").click(function() {
  $(".menu").slideToggle();
});

$(".btn").click(function() {
  $(".btn").addClass("pressed");
  setTimeout(function() {
    $(".btn").removeClass("pressed");
  }, 100)
});

function hamburgerAnimation(x) {
  x.classList.toggle("change");
}
