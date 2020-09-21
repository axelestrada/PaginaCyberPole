AOS.init();

$(document).ready(function () {
  $('.active-cat-carusel').owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    nav: true,
    navText: ["<span class='fa fa-chevron-up'></span>", "<span class='fa fa-chevron-down'></span>"],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  });

  $('.active-recent-carusel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    dots: true,
    0: {
      items: 1
    },
    480: {
      items: 1
    },
    769: {
      items: 1
    }
  });

  /* ======= Fixed header when scrolled ======= */

  $(window).on('load', function () {
    if ($(window).scrollTop() > 0) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 0) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  /* ======= Scrollspy ======= */
  $('body').scrollspy({
    target: '#header',
    offset: 100
  });

  //Scroolto

  /* ======= ScrollTo ======= */
  $('a.scrollto').on('click', function (e) {

    //store hash
    var target = this.hash;

    e.preventDefault();

    $('body').scrollTo(target, 1000, {
      offset: -40,
      'axis': 'y'
    });
    //Collapse mobile menu after clicking
    if ($('.navbar-collapse').hasClass('show')) {
      $('.navbar-collapse').removeClass('show');
    }

  });

  //Enviar email

  $(document).ready(function () {
    var form = $('#contactForm'); // contact form
    var submit = $('.submit-btn'); // submit button    
    var alert = $('.alert-msg'); // alert div for show alert message

    // form submit event
    form.on('submit', function (e) {
      e.preventDefault(); // prevent default form submit

      $.ajax({
        url: '../correo.php', // form action url
        type: 'POST', // form submit method get/post
        dataType: 'html', // request type html/json/xml
        data: form.serialize(), // serialize form data
        beforeSend: function () {
          alert.fadeOut();
          submit.html('Enviando....'); // change submit button text
        },
        success: function (data) {
          alert.html(data).fadeIn(); // fade in response data
          form.trigger('reset'); // reset form
          submit.html('Enviar'); // reset submit button text
        },
        error: function (e) {
          console.log(e)
        }
      });
    });

  });
  
  $(document).ready(function () {
    $('#mc_embed_signup').find('form').ajaxChimp();
  });

  //Menu

  let enlaces = $('.enlaces-header');

  $('.hamburger').on('click', function () {       
    enlaces.toggleClass('menudos');
  });

  enlaces.on('click', function(){
    enlaces.toggleClass('menudos');
  });

  //loader

  var loader = function(){
    setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1000);
  };

  loader();

});