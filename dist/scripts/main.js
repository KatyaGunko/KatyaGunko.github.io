jQuery(document).ready(function ($) {

    $(window).scroll(function (e) {
        var offset = $(document).scrollTop();

        if(offset >= 500) {
            $('header').css({background: 'rgba(142, 142, 142, 0.55)'})
        } else {
            $('header').css({background: 'transparent'})
        }
    });

    $('.mobile-menu .icon').click(function(e) {
        $('.header-nav ul').slideToggle();
        $('.header-nav')[0].style.background = ($('.header-nav')[0].style && $('.header-nav')[0].style.background) ? '' : 'rgba(43,42,42,.74)';
    });

});

jQuery(document).ready(function ($) {

    setInterval(function () { citiesMoveRight();
    }, 3000);


    var slideCount = $('.cities-slider .slider .slide').length;
    var slideWidth = $('.cities-slider .slider .slide').width() + 20;
    var slideHeight = $('.cities-slider .slider .slide').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('.cities-slider').css({ height: slideHeight });

    $('.cities-slider').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('.cities-slider .slider .slide:last-child').prependTo('.cities-slider .slider');

    function citiesMoveLeft() {
        $('.cities-slider .slider').animate({
            left: + slideWidth
        }, 700, function () {
            $('.cities-slider .slider .slide:last-child').prependTo('.cities-slider .slider');
            $('.cities-slider .slider').css('left', '');
        });
    };

    function citiesMoveRight() {
        $('.cities-slider .slider').animate({
            left: - slideWidth
        }, 700, function () {
            $('.cities-slider .slider .slide:first-child').appendTo('.cities-slider .slider');
            $('.cities-slider .slider').css('left', '');
        });
    };

    $('#cities-slider-container .left-arrow').click(function () {
        citiesMoveLeft();
    });

    $('#cities-slider-container .right-arrow').click(function () {
        citiesMoveRight();
    });

});

jQuery(document).ready(function ($) {

    setInterval(function () {
        hotelsMoveRight();
    }, 3000);


    var slides = $('#hotels-slider-container .slide-img');
    var currentHotelSlide = 4;

    function hotelsMoveLeft() {
        if(currentHotelSlide === 0) {
            slides.css({ opacity: 0 });
            slides[slides.length - 1].style.opacity = 1;
            currentHotelSlide = slides.length - 1;
        } else {
            slides.css({ opacity: 0 });
            slides[--currentHotelSlide].style.opacity = 1;
        }
    };

    function hotelsMoveRight() {
        if(currentHotelSlide === slides.length - 1) {
            slides.css({ opacity: 0 });
            slides[0].style.opacity = 1;
            currentHotelSlide = 0;
        } else {
            slides.css({ opacity: 0 });
            slides[++currentHotelSlide].style.opacity = 1;
        }
    };

    $('#hotels-slider-container .left-arrow').click(function () {
        hotelsMoveLeft();
    });

    $('#hotels-slider-container .right-arrow').click(function () {
        hotelsMoveRight();
    });

});

jQuery(document).ready(function ($) {

   setInterval(function () {
        moveRight();
    }, 3000);


    var slideCount = $('#main-slider ul li').length;
    var slideWidth = $('#main-slider ul li').width();
    var slideHeight = $('#main-slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#main-slider').css({ width: slideWidth, height: slideHeight });

    $('#main-slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#main-slider ul li:last-child').prependTo('#main-slider ul');

    function moveLeft() {
        $('#main-slider ul').animate({
            left: + slideWidth
        }, 700, function () {
            $('#main-slider ul li:last-child').prependTo('#main-slider ul');
            $('#main-slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#main-slider ul').animate({
            left: - slideWidth
        }, 700, function () {
            $('#main-slider ul li:first-child').appendTo('#main-slider ul');
            $('#main-slider ul').css('left', '');
        });
    };

    $('#main-slider .left-arrow').click(function () {
        moveLeft();
    });

    $('#main-slider .right-arrow').click(function () {
        moveRight();
    });

});
