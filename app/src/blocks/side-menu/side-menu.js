// open and close side menu
$(".menu-icon").click(function () {
    $('.side-menu').toggleClass('open');
    $(".menu-icon").toggleClass('active');
    $('body').toggleClass('shadow');


    $('.nav__item_toggle>a').on('click',function(){
        $(this).parent().toggleClass('open').find('.nav').slideToggle();
        return false;
    });

    //close menu on body click
    $(document).on('click', function (e) {
        var target = e.target;

        if ($(target).hasClass("side-menu") || $(target).hasClass("bar") ||
            $(target).hasClass(".menu-icon") || $(target).hasClass("nav") || $(target).hasClass("nav__item")) {
            return false;
        }
        $('.menu-icon').removeClass("active");
        $('.side-menu').removeClass('open');
        $('body').removeClass("shadow");

    });

    return false;
});


