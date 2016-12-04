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
