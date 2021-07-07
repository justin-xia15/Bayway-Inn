function hamburgerAnimation(x) {
  x.classList.toggle("change");
}

$(".hamburger-btn").click(function() {
  $(".menu").slideToggle();
});
