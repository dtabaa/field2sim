window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
  // Toggle the navbar burger menu on mobile.
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Initialize every element with the .carousel class.
  bulmaCarousel.attach('.carousel', {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  });

  bulmaSlider.attach();
});
