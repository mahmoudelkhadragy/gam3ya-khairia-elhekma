$(document).ready(function () {
  $('.bar_icon').on('click', function () {
    $('.side_bar').animate({ right: '0' }, 400);
  })
  $('.close_icon').on('click', function () {
    $('.side_bar').animate({ right: '-210px' }, 400);
  })
  // top carousel
  $('.top-carousel').flickity({
    // options
    adaptiveHeight: true,
    freeScroll: true,
    wrapAround: true,
    prevNextButtons: true,
    pageDots: true,
    autoPlay: true,
  });
  // bottom carousel
  $('.bottom-carousel').flickity({
    // options
    adaptiveHeight: true,
    freeScroll: true,
    wrapAround: true,
    pageDots: false,
    autoPlay: true
  });

})