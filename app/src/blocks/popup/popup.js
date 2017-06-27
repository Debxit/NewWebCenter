var close_popup = function () {
    $('body').removeClass('shadow');
    $('.popup').fadeOut();
    return false;
};

$(".js-btn_pop").click(function () {
    var target = $(this).attr('data-target');

    $(target).fadeIn('slow');
    $('body').addClass('shadow');

    var left_offset = ($(window).width() - $(target).outerWidth()) / 2;
    $(target).css("left", left_offset + "px");

    $('.popup__close').on('click', close_popup);

    $(document).on('click', function (e) {
        var target = e.target;

        if ($(target).hasClass("popup") || $(target).hasClass("popup__title") || $(target).hasClass("form")
            || $(target).hasClass("form__input") || $(target).hasClass("form__btn")) {
            return false;
        }
      close_popup();

    });

    return false;

});
