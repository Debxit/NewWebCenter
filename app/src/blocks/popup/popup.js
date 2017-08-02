var close_popup = function () {
    $('body').removeClass('shadow');
    $('.popup').fadeOut();
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

        if ($(target).hasClass("popup") || $(target).parents('.popup').length) {
            return false;
        }
      close_popup();
    });

    return false;

});
