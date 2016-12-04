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
