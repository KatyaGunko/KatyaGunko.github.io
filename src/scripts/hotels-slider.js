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
