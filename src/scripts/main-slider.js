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
