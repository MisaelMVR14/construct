/*-----------------------------------------------------------------------------------



  Template Name: Simply Construction HTML Template.

  Template URI: #

  Description: Simply Construction is a unique website template designed in HTML with a simple & beautiful look. There is an excellent solution for creating clean, wonderful and trending material design corporate, corporate any other purposes websites.

  Author: HasTech

  Author URI: https://themeforest.net/user/hastech/portfolio

  Version: 1.0



-----------------------------------------------------------------------------------*/



/*-------------------------------

[  Table of contents  ]

---------------------------------

  01. jQuery MeanMenu

  02. wow js active

  03. Project  Masonry

  04. Sticky Header

  05. ScrollUp

  06. Testimonial Slick Carousel

  07. Testimonial Slick Carousel

  08. CounterUp

  16. ScrollReveal Js Init

  17. Magnific Popup









/*--------------------------------

[ End table content ]

-----------------------------------*/





(function($) {

    'use strict';





/*-------------------------------------------

  01. jQuery MeanMenu

--------------------------------------------- */

    

$('.mobile-menu nav').meanmenu({

    meanMenuContainer: '.mobile-menu-area',

    meanScreenWidth: "991",

    meanRevealPosition: "right",

});

/*-------------------------------------------

  02. wow js active

--------------------------------------------- */

    new WOW().init();





/*-------------------------------------------

  03. Project  Masonry

--------------------------------------------- */ 



$('.htc__project__container').imagesLoaded( function() {

  

    // filter items on button click

    $('.project__menu').on( 'click', 'button', function() {

      var filterValue = $(this).attr('data-filter');

      $grid.isotope({ filter: filterValue });

    }); 

    // init Isotope

    var $grid = $('.htc__latest__project__wrap').isotope({

      itemSelector: '.single__project',

      percentPosition: true,

      transitionDuration: '0.7s',

      layoutMode: 'fitRows',

      masonry: {

        // use outer width of grid-sizer for columnWidth

        columnWidth: '.single__project',

      }

    });



});



$('.project__menu button').on('click', function(event) {

    $(this).siblings('.is-checked').removeClass('is-checked');

    $(this).addClass('is-checked');

    event.preventDefault();

});







/*-------------------------------------------

  04. Sticky Header

--------------------------------------------- */ 



  // $(window).on('scroll',function() {    

  //   var scroll = $(window).scrollTop();

  //   if (scroll < 245) {

  //   $("#sticky-header-with-topbar").removeClass("scroll-header");

  //   }else{

  //   $("#sticky-header-with-topbar").addClass("scroll-header");

  //   }

  // });
let altura = $('#sticky-header-with-topbar').offset().top;
  $(window).on('scroll', function () {

    if ($(window).scrollTop() > altura) {

      $('#sticky-header-with-topbar').addClass('sticky');
      $('.logo').addClass('reducir-logo');
      $('.logo > a > img').addClass('reducir-logo-img');
      $('.logo > a').addClass('centrar-logo');
      $('.main__menu > li > a').addClass('height-line');

      $(function () {
        //detectar scroll hacia abajo
        var obj = $(document); //objeto sobre el que quiero detectar scroll
        var obj_top = obj.scrollTop() //scroll vertical inicial del objeto
        obj.scroll(function () {
          var obj_act_top = $(this).scrollTop(); //obtener scroll top instantaneo
          if (obj_act_top > obj_top) {

            $('#sticky-header-with-topbar').addClass('ocultar');
            $('#sticky-header-with-topbar').removeClass('mostrar');

          } else {

            $('#sticky-header-with-topbar').addClass('mostrar');
            $('#sticky-header-with-topbar').removeClass('ocultar');

          }
          obj_top = obj_act_top; //almacenar scroll top anterior
        });
      });

    } else {

      $('#sticky-header-with-topbar').removeClass('sticky');
      $('#sticky-header-with-topbar').removeClass('mostrar');
      $('.logo').removeClass('reducir-logo');
      $('.logo > a > img').removeClass('reducir-logo-img');
      $('.logo > a').removeClass('centrar-logo');
      $('.main__menu > li > a').removeClass('height-line');

    }
  })





/*--------------------------

  05. ScrollUp

---------------------------- */



  $.scrollUp({

    scrollText: '<i class="zmdi zmdi-chevron-up"></i>',

    easingType: 'linear',

    scrollSpeed: 900,

    animation: 'fade'

  });





/*---------------------------------------------

  06. Testimonial Slick Carousel

------------------------------------------------*/

  $('.testimonial__activation').slick({

    slidesToShow: 1,

    slidesToScroll: 1,

    arrows: false,

    draggable: true,

    // fade: true,

    dots: true,

  });



  /*=====================Slider secundary==========================*/

  $(".prourbanas-slider-main").slick({

    dots: false,

    infinite: true,

    slidesToShow: 1,

    slidesToScroll: 1,

    autoplay: true,

    arrows: true

  });



/*---------------------------------------------

    Nuestros Clientes Slider

------------------------------------------------*/

    $(".clients-slider").slick({



      arrows: false,



      dots: false,



      infinite: true,



      slidesToShow: 5,



      slidesToScroll: 1,



      speed: 1000,



      autoplaySpeed: 2000,



      autoplay: true,



      respondTo: 'window',



      mobileFirst: true,



      responsive: [



        {



          breakpoint: 1200,



          settings: {



            slidesToShow: 5,



            slidesToScroll: 1



          }



        },



        {



          breakpoint: 1080,



          settings: {



            slidesToShow: 4,



            slidesToScroll: 1



          }



        },



        {



          breakpoint: 991,



          settings: {



            slidesToShow: 4,



            slidesToScroll: 1



          }



        },

        {



          breakpoint: 820,



          settings: {



            slidesToShow: 3,



            slidesToScroll: 1



          }



        },



        {



          breakpoint: 769,



          settings: {



            slidesToShow: 3,



            slidesToScroll: 1



          }



        },



        {



          breakpoint: 690,



          settings: {



            slidesToShow: 3,



            slidesToScroll: 1



          }



        },



        {



          breakpoint: 620,



          settings: {



            slidesToShow: 3,



            slidesToScroll: 1



          }



        },



        {



          breakpoint: 480,



          settings: {



            slidesToShow: 2,



            slidesToScroll: 1



          }



        },



        {



          breakpoint: 300,



          settings: {



            slidesToShow: 1,



            slidesToScroll: 1



          }



        },

        {



          breakpoint: 277,



          settings: {



            slidesToShow: 1,



            slidesToScroll: 1



          }



        }



      ]



    })





/*------------------------------------------

  07. Testimonial Slick Carousel

-------------------------------------------*/

  $('.testimonial__activation--2').slick({

    slidesToShow: 2,

    slidesToScroll: 2,

    arrows: false,

    draggable: true,

    // fade: true,

    dots: true,

  });







/*-----------------------------

  08. CounterUp

-----------------------------*/

  $('.count').counterUp({

    delay: 60,

    time: 3000

  });













/*-----------------------------------------------

  15. Home Slider

-------------------------------------------------*/



  if ($('.slider__activation__wrap').length) {

    $('.slider__activation__wrap').owlCarousel({

      loop: true,

      margin:0,

      nav:true,

      autoplay: true,

      navText: [ '<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],

      autoplayTimeout: 10000,

      items:1,

      dots: false,

      lazyLoad: true,

      fluidSpeed:10000,

      animateIn: 'fadeIn',

      /*animateOut: 'fadeOut',*/

      responsive:{

        0:{

          items:1

        },

        600:{

          items:1

        }

      }      

    });

  }







/*-----------------------------------

  16. ScrollReveal Js Init

-------------------------------------- */



  window.sr = ScrollReveal({ duration: 800 , reset: false });

    sr.reveal('.foo');

    sr.reveal('.bar');













/*--------------------------------

  17. Magnific Popup

----------------------------------*/



$('.video-popup').magnificPopup({

  type: 'iframe',

  mainClass: 'mfp-fade',

  removalDelay: 160,

  preloader: false,

  zoom: {

      enabled: true,

  }

});



$('.image-popup').magnificPopup({

  type: 'image',

  mainClass: 'mfp-fade',

  removalDelay: 100,

  gallery:{

      enabled:true, 

  }

});













/*-----------------------------------------------

  16. Blog Slider

-------------------------------------------------*/



  if ($('.blog__activation').length) {

    $('.blog__activation').owlCarousel({

      loop: true,

      margin:0,

      nav:true,

      autoplay: false,

      navText: [ '<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],

      autoplayTimeout: 10000,

      items:1,

      dots: false,

      lazyLoad: true,

      responsive:{

        0:{

          items:1

        },

        600:{

          items:1

        }

      }

    });

  }

















})(jQuery);









