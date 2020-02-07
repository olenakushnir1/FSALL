$(document).ready(function () {

  // Scroll header


  $(function () {
    $(".wishlist-icon").click(function() {
      $(this).toggleClass('active');
      $('.js-dropdown').toggleClass('active');
    });
  })

  // Message close form
  $(function () {
    $('.wpcf7-response-output').prepend('<span class="close"></span>');
    $(".wpcf7-response-output").click(function() {
      $('.wpcf7-response-output').slideUp();
    })
  })

  // Scroll down
  $(function () {
    $('.js-scrolldown').on('click', function () {
      var tabNumber = $(this).data('scroll');
      $("html, body").stop().animate({
        scrollTop: $('section[id="' + tabNumber + '"]').offset().top - $(".header").height() - 30
      }, 400)
    });
  });

  // Custom message
  $(function () {
    $.extend( $.validator.messages, {
      required: "Це поле обов’язкове для заповнення",
      remote: "Пожалуйста, введите правильное значение.",
      email: "Пожалуйста, введите корректный адрес электронной почты",
      url: "Пожалуйста, введите корректный URL.",
      date: "Пожалуйста, введите корректную дату.",
      dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
      number: "Пожалуйста, введите число.",
      digits: "Пожалуйста, вводите только цифры.",
      creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
      equalTo: "Пожалуйста, введите такое же значение ещё раз.",
      extension: "Пожалуйста, выберите файл с правильным расширением.",
      maxlength: $.validator.format( "Пожалуйста, введите не больше {0} символов." ),
      minlength: $.validator.format( "Пожалуйста, введите не меньше {0} символов." ),
      rangelength: $.validator.format( "Пожалуйста, введите значение длиной от {0} до {1} символов." ),
      range: $.validator.format( "Пожалуйста, введите число от {0} до {1}." ),
      max: $.validator.format( "Пожалуйста, введите число, меньшее или равное {0}." ),
      min: $.validator.format( "Пожалуйста, введите число, большее или равное {0}." )
    });

    $.validator.addMethod("phone", function (value, element) {
      return this.optional(element) || /^((8|\+38)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i.test(value);
    }, "Пожалуйста, введите правильный номер телефона");

    // Init form
    function initForm($selector) {
      $selector.each(function() {
        var $form = $(this);

        var newTag = $('<form>')[0];
        $.each($form[0].attributes, function() {
            newTag.setAttribute(this.name, this.value);
        });
        $form.wrapAll(newTag);
        $form = $form.parent();
        $form.contents().contents().unwrap();

        $form.validate({})
      })
    }
    initForm($('[data-form]'));
  });

  // Tabs
  $(function () {
    $('ul.js-tab-index li').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('ul.js-tab-index li').removeClass('active');
      $('.tab-content').removeClass('active');

      $(this).addClass('active');
      $("#"+tab_id).addClass('active');
    });
  });
  
  // tabs accordion 
  $(function () {
    
    // var allPanels = $('.wrapper-our-services .tab-content');
      
    // $('.wrapper-our-services .js-accordion > span').click(function() {
    //   allPanels.slideUp();
    //   $(this).parent().addClass('active').siblings().removeClass('active');
    //   $(this).parent().next().slideDown();
    //   return false;
    // });
  });

  /*tabs-js*/
  $('.js-tabs-b-items').on('click', '.js-tabs-b-item:not(.active)', function () {
    $('.js-slider').slick('unslick');
    $(this).addClass('active').siblings().removeClass('active').closest('.js-tabs-b').find('.js-tabs-b-content').removeClass('active').hide();
    var tabNumber = $(this).data('tab');
    $(this).closest('.js-tabs-b').find('.js-tabs-b-content[data-tab="' + tabNumber + '"]').addClass('active').show();
  });

//  $('.js-accordion').on('click', function () {
//    $('.js-slider').slick('unslick');
//    if (!$(this).hasClass('active')) {
//        $(this).closest('.js-tabs-b').find('.js-accordion').removeClass('active').next('div').slideUp(200);
//        $(this).addClass('active');
//        $(this).next('div').addClass('active');
//        $(this).next('div').slideDown(200);
//    } else {
//        $(this).removeClass('active').next('div').slideUp(200);
//    }
//  });

  // Slick slider
  $(function() {
    $('.js-slider').each(function () {
      $(this).slick({
          //prevArrow: $(this).closest('section').find('.arrow__prev'),
          //nextArrow: $(this).closest('section').find('.arrow__next'),
          lazyLoad: 'ondemand'
      })
    });
  });

  // Slick slider 
  $(function() {
    $('.js-slider-first').each(function () {
      $(this).slick({
          prevArrow: $(this).closest('section').find('.arrow__prev'),
          nextArrow: $(this).closest('section').find('.arrow__next'),
          lazyLoad: 'ondemand'
      }).slickAnimation();
    });
  });

  // Slick slider
  $(function() {
    $('.js-slider-no-arrows').each(function () {
      $(this).slick({
          
      })
    });
  });

  // Img to svg
  $(function () {
    $('img[src$=".svg"]').each(function(){
      var $img = $(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
  
      $.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = $(data).find('svg');
  
          // Add replaced image's ID to the new SVG
          if(typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if(typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', imgClass+' replaced-svg');
          }
  
          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');
          
          // Check if the viewport is set, else we gonna set it if we can.
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
              $svg.attr('viewBox', '0 0 ' + $svg.attr('width') + ' ' + $svg.attr('height'))
          }
  
          // Replace image with new SVG
          $img.replaceWith($svg);
  
      }, 'xml');
    
    });
  });

  $(function() {
    $(".js-rating").each(function (index) {
      $(this).rateYo({
          rating: $(this).data("rating"),
          fullStar: true,
          starWidth: "13px",
          spacing: "5px",
          normalFill: "#e3e3e3",
          ratedFill: "#ee4165",
          starSvg: '<svg width="26" height="26" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26"><defs><path d="M653,866l-8.22899,4.32624l1.57159,-9.16312l-6.65739,-6.48936l9.20029,-1.33688l4.1145,-8.33688l4.1145,8.33688l9.20029,1.33688l-6.65739,6.48936l1.57159,9.16312z" id="Path-0"/></defs><g transform="matrix(1,0,0,1,-640,-845)"><g><use xlink:href="#Path-0" fill-opacity="1"/></g></g></svg>'
      })
      $(this).rateYo().on("rateyo.change", function (e, data) {
        var rating = data.rating;
        $(this).parent().find('.js-rating-result').val(rating);
        console.log(rating);
      });
    })
  })

  $(function() {

    if ($('#map').length) {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 50.606405,
            lng: 26.273091
        },
        zoom: 16,
        disableDefaultUI: true,
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#eef3f6"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]
      });
      var marker1 = new google.maps.Marker({
        icon: {
          url: '/wp-content/themes/professionaldc/assets/img/maps-filled-point.png',
          size: new google.maps.Size(46, 64),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(30, 44)
        },
        position: {
          lat: 50.606405,
          lng: 26.273091
        },
        map: map
      });
    }
  });

  $(function () {
    $(".js-toggler-mobilenav").click(function() {
      $(".header-nav-wrapper").toggleClass('active');
      //$(".main-nav").toggle( "slide" );
      $(this).toggleClass('active');
      $('header').toggleClass('active');
      if ($('body').hasClass('no-scroll')) {
        $("body").removeClass('no-scroll');
      }
      else {
        $("body").addClass('no-scroll');
      }
    });
  })

  $( function() {
    $(".js-gallery").each(function () {
      $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        callbacks: {
          elementParse: function(item) {
            console.log(item.el[0].className);
            if(item.el[0].className == 'video') {
              item.type = 'iframe',
              item.iframe = {
                 patterns: {
                   youtube: {
                     index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
      
                     id: 'v=', // String that splits URL in a two parts, second part should be %id%
                      // Or null - full URL will be returned
                      // Or a function that should return %id%, for example:
                      // id: function(url) { return 'parsed id'; } 
      
                     src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
                   },
                   vimeo: {
                     index: 'vimeo.com/',
                     id: '/',
                     src: '//player.vimeo.com/video/%id%?autoplay=1'
                   },
                   gmaps: {
                     index: '//maps.google.',
                     src: '%id%&output=embed'
                   }
                 }
              }
            } else {
               item.type = 'image',
               item.tLoading = 'Loading image #%curr%...',
               item.mainClass = 'mfp-with-zoom mfp-img-mobile',
               item.image = {
                 tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
               }
            }
          }
        }
      });
    })
  });

   // Magnific popup
   $(function() {
    $portfolio = $('.js-portfolio-items');
    if ($portfolio.length) {
      $portfolio.isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });


      // $('.filter-button-group').on('click', 'button', function(){
      //     var filterValue = $(this).attr('data-filter');
      //     $grid.isotope({filter: filterValue});
      // });

      $portfolio_selectors = $('.filter-button-group > li');
      $portfolio.isotope({ filter: '.all' });
      $portfolio_selectors.on('click', function(){
        $portfolio_selectors.removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $portfolio.isotope({ filter: selector });
        return false;
      });
    }
  });

  // Radio cahge
  $(function () {
    $(".wrapper-price-table input:checkbox").each(function (index) {
      $(this).click(function() {
        this.value
        if (this.value == 'cash-upon-receipt') {
          $(this).closest('.form-order').find('.js-cash-upon-receipt').slideDown();
          $(this).closest('.form-order').find('.js-through-privat').slideUp();
        }
        else if (this.value == 'through-privat') {
          $(this).closest('.form-order').find('.js-through-privat').slideDown();
          $(this).closest('.form-order').find('.js-cash-upon-receipt').slideUp();
        }
      });
    });
  });

  // Before/after gallery
  $(function () {
    $('.cocoen').cocoen();
  });

  // Before/after gallery
  $(function () {
    $.fn.BeerSlider = function( options ) {
      options = options || {};
      return this.each( function () {
        new BeerSlider( this, options );
      });
    };
    $( ".beer-slider" ).each( function( index, el ) {
      $( el ).BeerSlider( {start: $( el ).data( "start" ) } )
    });
  });

  // Price calculator
  $(function() {
    $('input:checkbox[name=price]').each(function () {
      
      valueprice = $(this).closest('.price-table__info').find('.info-wrapp').data('price');
      $(this).closest('.price-table__info').find('span.dataprice').html(valueprice);

      $(this).change(function(){
        var value = $(this).val();
        $(this).closest('.price-table__info').find('span.inputin').html($.trim(value));

        var valuepricespan1 = $(this).closest('.price-table__info').find('span.inputin').html();
        var valuepricespan2 = $(this).closest('.price-table__info').find('span.dataprice').html();
        var valuetotal = valuepricespan1 * valuepricespan2;
        
        $(this).closest('.price-table__info').find('span.totalprice').html(valuetotal);
        
        if($(this).is(":checked")) {
          $(this).closest('.price-table__info').find('.title, .price, .input').addClass("active");
          $(this).closest('.price-table__info').addClass("active").siblings().removeClass('active');
          $(this).closest('.price-table__info').find('.input').removeClass("disable");
          $(this).closest('.price-table__info').find('span.totalprice').removeClass("disable");
          $(this).closest('.price-table__info').find('.input input:text').focus()
        } else {
          $(this).closest('.price-table__info').find('.title, .price, .input').removeClass("active");
          $(this).closest('.price-table__info').find('.input').addClass("disable");
          $(this).closest('.price-table__info').find('span.totalprice').addClass("disable");
        }
        // SUMM
        var sum = 0;
        $('span.totalprice').not('.disable').each(function() {
          var val = $.trim( $(this).text() );
          if ( val ) {
            val = parseFloat( val.replace( /^\$/,''));
            sum += !isNaN( val ) ? val : 0;
          }
        });
        $('.wrapper-price-table .price-table-bottom .price span').html(String(sum).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));
      });
    });

    //var arrayInput = [];
    /*$('.input input:text').each(function (element) {
      $(this).focusin(function(){
        $(this).closest('.price-table__info').find('.title, .price, .input').addClass("active");
        $(this).closest('.price-table__info').addClass("active");
        $(this).closest('.price-table__info').find('input:checkbox[name=price]').prop('checked', true);
        $(this).closest('.price-table__info').find('.input').removeClass("disable");
        $(this).closest('.price-table__info').find('span.totalprice').removeClass("disable");
      });

      $(this).focusout(function(){
        if ($(this).val().length > 0) {
          $(this).closest('.price-table__info').find('.title, .price, .input').addClass("active");
          $(this).closest('.price-table__info').find('input:checkbox[name=price]').prop('checked', true);
        }
        else {
          $(this).closest('.price-table__info').find('.title, .price, .input').removeClass("active");
          $(this).closest('.price-table__info').find('input:checkbox[name=price]').prop('checked', false);
        }
        // SUMM
        var sum = 0;
        $('span.totalprice').not('.disable').each(function() {
          var val = $.trim( $(this).text() );
          if ( val ) {
            val = parseFloat( val.replace( /^\$/,''));
            sum += !isNaN( val ) ? val : 0;
          }
        });
        $('.wrapper-price-table .price-table-bottom .price span').html(String(sum).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));
      });

      
      valueprice = $(this).closest('.price-table__info').find('.info-wrapp').data('price');
      $(this).closest('.price-table__info').find('span.dataprice').html(valueprice);

      $(this).keyup(function(i, element) {

        var value = $(this).val();
        $(this).closest('.price-table__info').find('span.inputin').html($.trim(value));

        var valuepricespan1 = $(this).closest('.price-table__info').find('span.inputin').html();
        var valuepricespan2 = $(this).closest('.price-table__info').find('span.dataprice').html();
        var valuetotal = valuepricespan1 * valuepricespan2;
        
        $(this).closest('.price-table__info').find('span.totalprice').html(valuetotal);

        // SUMM
        pricetotalfun();
        function pricetotalfun() {
          var sum = 0;
          $('span.totalprice').not('.disable').each(function() {
            var val = $.trim( $(this).text() );
            if ( val ) {
              val = parseFloat( val.replace( /^\$/,''));
              sum += !isNaN( val ) ? val : 0;
            }
          });
          $('.wrapper-price-table .price-table-bottom .price span').html(String(sum).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));
        }
      })
    });*/
  });

  // Magnific popup
  $(function() {
    $('.js-popup-open').each(function() {
      $(this).magnificPopup({
        type: 'inline',
        removalDelay: 500,
        callbacks: {
          beforeOpen: function() {
            this.st.mainClass = this.st.el.attr('data-effect');
          },
          open: function() {
            initscroll();
          },
        },
        midClick: true
      });
      function initscroll() {
        $('.js-custom-scrollbar').mCustomScrollbar({
          theme: "dark-thin",
          mouseWheel: {
            enable: true
          },
          scrollInertia: 400,
        });
      }
    });
  });

  //Mask 
  $(function() {
    $('.js-mask').each(function () {
      new Cleave(this , {
        numericOnly: true,
        blocks: [0, 3, 0, 3, 4],
        delimiters: ["+38 (", ")", " ", "-"],
      });
    })
  });

  // Add 
  $(function() {
    $('.js-mask').each(function () {
      new Cleave(this , {
        numericOnly: true,
        blocks: [0, 3, 0, 3, 4],
        delimiters: ["+38 (", ")", " ", "-"],
      });
    })
  });

  // Select 
  $(function () {
    $('.js-select').each(function () {
      var placeholder = $(this).data('placeholder') || 'Default placeholder';
      $(this).select2({
        theme: 'default customselect',
        dropdownCssClass: "customselect-dropdown",
        minimumResultsForSearch: -1,
        placeholder: placeholder,
        width: '100%',
      });
    });

    $('select').on('select2:open', function (e) {
      $('.select2-results__options').mCustomScrollbar('destroy');
       setTimeout(function () {
         $('.select2-results__options').mCustomScrollbar();
       }, 0);
     });
  });

  // Select 
  $(function () {
    $('.js-toggle-portfolio').each(function () {
      $(this).click(function() {
        $(this).addClass('active');
        $('.portfolio-items-nav').addClass('active');
      });
    });

    $('.filter-button-group > li').each(function (e) {
      $(this).click(function() {
        $('body').scrollTop(300);
        $(this).addClass('active');
        $('.title-portfolio .title').text($(this).find('.title').text());
        $(this).find('img').clone(e).prependTo('.title-portfolio');
        $('.title-portfolio .title').text($(this).find('.title').text());
        $('.portfolio-items-nav').removeClass('active');
        $('.js-toggle-portfolio').removeClass('active');
      });
    });
  });
});

var spoilers = $(".spoiler");
spoilers.each(function () {
    var spoiler = $(this);
    spoiler.find(".spoiler-header").click(function () {
        if ($(this).hasClass("spoiler-open-btn")) {
            $(this).removeClass("spoiler-open-btn").addClass("spoiler-close-btn");
            spoiler.find(".spoiler-body").slideUp(500);
            spoiler.find(".spoiler-header").css("border-bottom", "2px solid black");
            spoiler.find(".wide_line_top").css("border-bottom", "1px solid green");
            spoiler.find(".vertical").css({"display": "block"});                 
        } else {
            $(this).removeClass("spoiler-close-btn").addClass("spoiler-open-btn");
            spoiler.find(".spoiler-body").slideDown(1000);
            spoiler.find(".spoiler-header").css("border", "none");
            spoiler.find(".vertical").css({"display": "none"});
        }
    });
});
$(".subMenuClick").click(function () {
    console.log('hello');
    $(this).find("i").toggleClass("fa-caret-down").toggleClass("fa-caret-up");
    $(".subMenu").fadeToggle();
});
