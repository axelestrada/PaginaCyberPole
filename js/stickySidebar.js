let WindowHeight = $(window).width();

$(window).resize(function () {
    WindowHeight = $(window).width();

    if (WindowHeight >= 992) {
        Sticky();
    } else {
        $('.sidebar').removeClass('fixed');
        $('.sidebar').removeClass('stop');
    }
});

$(window).on("scroll", function () {

    if (WindowHeight >= 992) {
        Sticky();
    } else {
        $('.sidebar').removeClass('fixed');
        $('.sidebar').removeClass('stop');
    }

});

$(window).on("load", function () {
    WindowHeight = $(window).width();

    if (WindowHeight >= 992) {
        Sticky();
    } else {
        $('.sidebar').removeClass('fixed');
        $('.sidebar').removeClass('stop');
    }
});

function Sticky() {

    let Sidebarheight = $('.sidebar').height();
    let bodyHeight = $('body').height();
    let desplazamientoActual = window.pageYOffset;       

    if (desplazamientoActual >= Sidebarheight - 100 && desplazamientoActual < bodyHeight - 1000) {
        $('.sidebar').addClass('fixed');
        $('.sidebar').removeClass('stop');
    } else if (desplazamientoActual >= bodyHeight - 1000) {
        $('.sidebar').addClass('fixed');
        $('.sidebar').addClass('stop');
    } else {
        $('.sidebar').removeClass('stop');
        $('.sidebar').removeClass('fixed');
    }

};