$(document).ready(function () {
  $('.reviews-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.buttons__prev',
    nextArrow: '.buttons__next',
    autoplay: true,
    autoplaySpeed: 1500,
  });
});
