
$(window).load(function(){
    $('.preloader').fadeOut(1000);  
});


$(document).ready(function() {

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  });
  
  (function (window, $) {
  'use strict';

  var document = window.document;

  function mainSlider() {
    $('.bxslider').bxSlider({
		auto: true,
      pagerCustom: '#bx-pager',
      mode: 'fade',
      nextText: '',
      prevText: ''
    });
  }

  mainSlider();

  var $links = $(".bx-wrapper .bx-controls-direction a, #bx-pager a");
  $links.click(function(){
     $(".slider-caption").removeClass('animated fadeInLeft');
     $(".slider-caption").addClass('animated fadeInLeft');
  });

  $(".bx-controls").addClass('container');
  $(".bx-next").addClass('fa fa-angle-right');
  $(".bx-prev").addClass('fa fa-angle-left');


  })(window, jQuery);


  $(document).ready(function() {
    $("#owl-work").owlCarousel({
      autoPlay: 3000,
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
    });
  });
  
  function initParallax() {
    $('#work').parallax("100%", 0.3);
    $('#about').parallax("100%", 0.2);
    $('#team').parallax("100%", 0.3);
    $('#portfolio').parallax("100%", 0.1);
    $('#plan').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.2);
  }
  initParallax();

  $('#portfolio .col-md-4 a').nivoLightbox({
        effect: 'fadeScale',
    });

  new WOW({ mobile: false }).init();

  });

