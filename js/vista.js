$(document).ready(function () {

    $('.switch').click(function (e) {
        e.preventDefault();

        clase = this.classList;        

        $('.sect-view').removeClass('list');
        $('.sect-view').removeClass('grid');
        $('.grid.switch').removeClass('active');
        $('.list.switch').removeClass('active');
        $('.sect-view').addClass(clase[0]);
        $(this).addClass('active');        

        localStorage.setItem('ver', clase[0]);

    });

    $(window).load(function () {

        let view = localStorage.getItem('ver');

        $('.sect-view').removeClass('list');
        $('.sect-view').removeClass('grid');
        $('.sect-view').addClass(view);

        if (view == null) {
            $('.sect-view').addClass('grid');
        } else if (view == 'list' && $(window).width() >= 768) {
            $('.list.switch').addClass('active');
            $('.grid.switch').removeClass('active');
        } else if (view == 'grid') {
            $('.grid.switch').addClass('active');
            $('.list.switch').removeClass('active');
        }

        if ($(window).width() <= 767.98) {
            $('.recents').removeClass('list');
            $('.recents').addClass('grid');            
            $('.grid.switch').addClass('active');
        }
    });

    $(window).resize(function () {
        if ($(window).width() <= 767.98) {
            $('.sect-view').removeClass('list');
            $('.sect-view').addClass('grid')            
            $('.grid.switch').addClass('active');
        }
    });

});