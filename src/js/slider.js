$(document).ready(function () {
    $('.galary__slide').slick({
      autoplay: true,
      infinite: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      arrows: false,
    });
  });
  $(document).ready(function () {
    $('.feedback__slide').slick({
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      adaptiveHeight: true,
      arrows: false,
    });
  });