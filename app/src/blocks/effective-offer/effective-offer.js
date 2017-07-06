$('.square-profit').click(function () {
    $('.square-profit').removeClass('active');
    $(this).addClass('active');
    var target = $(this).attr('data-target');
    $('.effective-offer__tab').removeClass('visible');
    $(target).addClass('visible');
});
