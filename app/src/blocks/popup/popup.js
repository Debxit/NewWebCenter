var  close_popup = function(){
    $('body').removeClass('shadow');
    $('.popup').fadeOut();
    console.log('close');
};

$(".js-btn_pop").click(function () {
    console.log('btn');
    var target = $(this).attr('data-target');

    $(target).fadeIn('slow');
    $('body').addClass('shadow');

    var left_offset = ($(window).width() - $(target).outerWidth()) / 2;
    $(target).css("left", left_offset + "px");

    $('.shadow').click( close_popup );
    return false;

});
