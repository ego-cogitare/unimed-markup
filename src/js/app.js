$(document).ready(function() {
  $('.search-cart .fa-search').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('expanded')
      .parent().siblings('.menu').toggleClass('fadeout');
  });

  new Swiper('#home-slider-01', {
    direction: 'horizontal',
    slidesPerView: 1,
    nextButton: $(this).find('.btn-next'),
    prevButton: $(this).find('.btn-prev'),
    paginationClickable: true,
    autoplay: 5000,
    loop: true,
    spaceBetween: 0,
    mousewheelControl: false,
    speed: 1000
  });

  var $thumbnailsSlider = $('#product-thumbnails')
    , productSlider = new Swiper($thumbnailsSlider, {
        direction: 'vertical',
        slidesPerView: 4,
        nextButton: '#product-thumbnails ~ .button-next',
        prevButton: '#product-thumbnails ~ .button-prev',
        paginationClickable: true,
        // autoplay: 3000,
        // loop: true,
        spaceBetween: 5,
        mousewheelControl: true,
        speed: 300,
        onClick: function(swiper) {
          $thumbnailsSlider.find('.swiper-slide').removeClass('swiper-slide-active');
          $thumbnailsSlider.find('.swiper-slide:eq(' + swiper.clickedIndex + ')').addClass('swiper-slide-active');
        },
      });

  if ($('#brands-slider').length !== 0)
  {
    var brandSlider = new Swiper('#brands-slider', {
      direction: 'horizontal',
      slidesPerView: 6,
      nextButton: $(this).find('.btn-next'),
      prevButton: $(this).find('.btn-prev'),
      paginationClickable: true,
      loop: false,
      spaceBetween: 4,
      mousewheelControl: false,
      speed: 1000,
      autoResize: false,
      resizeReInit: true,
      onSlideChangeStart: function(swiper) {
        $(this).find('.slider-arrow').removeClass('hide');
        if (swiper.isBeginning) {
          $(this).find('.btn-prev').addClass('hide');
        }
        if (swiper.isEnd) {
          $(this).find('.btn-next').addClass('hide');
        }
      }.bind(this)
    });

    $(window).bind('resize', function() {
      var width = $('body').width();

      if (width >= 1680)                       brandSlider.params.slidesPerView = 6;
      else if (width >= 1280 && width < 1680)  brandSlider.params.slidesPerView = 5;
      else if (width >= 1024 && width < 1280)  brandSlider.params.slidesPerView = 4;
      else if (width >= 768 && width < 1024)   brandSlider.params.slidesPerView = 3;
      else if (width >= 500 && width < 768)    brandSlider.params.slidesPerView = 3;
      else                                     brandSlider.params.slidesPerView = 1;
      brandSlider.update();

      // if (width < 768) {
      //   $('.awards').appendTo($('.product-picture'));
      // }
      // if (width >= 768 && width < 1024) {
      //   $('.awards').insertBefore($('.general-info'));
      // }
    });
  }

  $('#price-range').jRange({
    from: 0,
    to: 900,
    step: 1,
    // scale: [0, 25, 50, 75, 100],
    scale: [],
    format: '%s',
    width: $('body').width() > 767 ? 'calc(100% - 25px)' : 'calc(100% - 10px)',
    showLabels: false,
    isRange : true,
    onstatechange: function(value) {
      var values = value.split(',');
      $('#price-range-from').text(values[0]);
      $('#price-range-to').text(values[1]);
    }
  });

  $('.burger-menu.right-menu').on('click', function() {
    $(this).toggleClass('opened');

    if ($(this).hasClass('opened'))
    {
      $('.menu.right').addClass('opened');
      $('html, body').addClass('no-scroll');
      $('.burger-menu.left-menu').removeClass('opened')
        .siblings('.menu.left').removeClass('opened');
    }
    else
    {
      $('.menu.right').removeClass('opened');
      $('html, body').removeClass('no-scroll');
    }
  });

  $('.burger-menu.left-menu').on('click', function() {
    $(this).toggleClass('opened');

    if ($(this).hasClass('opened'))
    {
      $(this).siblings('.menu.left').addClass('opened');
      $('html, body').addClass('no-scroll');
      $('.burger-menu.right-menu').removeClass('opened');
      $('.menu.right').removeClass('opened');
    }
    else
    {
      $(this).siblings('.menu.left').removeClass('opened');
      $('html, body').removeClass('no-scroll');
    }
  });

  $('#buy-in-click').on('click', function() {
    $('html, body').addClass('no-scroll');
    $('#buy-in-click-popup').addClass('opened');
  });


  $('#buy-in-click-popup').find('.close').on('click', function() {
    $(this).parent().removeClass('opened');
    $('html, body').removeClass('no-scroll');
  });

  $(window).bind('resize', function() {
    var width = $('body').width();

    if (width < 768) {
      $('.awards').appendTo($('.product-picture'));
    }
    if (width >= 768 && width < 1024) {
      $('.awards').insertBefore($('.general-info'));
    }
  })
  .trigger('resize');
});
