$(function () {
    $(window).scroll(function () {
      if ($('body,html').scrollTop() > 0) {
        $('.navbar-qweath').addClass('background-nav-scroll')
      } else {
        $('.navbar-qweath').removeClass('background-nav-scroll')
  
      }
    })
  })
  
  
  function checkWidth() {
    var windowSize = $(window).width();
  
    if (windowSize < 991) {
      $('.navbar-qweath').addClass('navbar-jquery');
    } else {
      $('.navbar-qweath').removeClass('navbar-jquery');
    }
  }
  
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);
// js nav  

// slide

$(function () {

  $(".variable").slick({
    dots: true,
    infinite: false,
    prevArrow:  '.arrow-pre',
    nextArrow: '.arrow-next',
    variableWidth: true,
  });
});
