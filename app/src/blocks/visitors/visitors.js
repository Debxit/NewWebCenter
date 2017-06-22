
$('.visitors__like .visitors__img,.visitors__viewed .visitors__img').on('click',function(){

    if (!$(this).hasClass('clicked')){

    $(this).velocity({scale : 1.3}, {duration: 200, easing: [100, 20]})
        .velocity('reverse')
        .addClass('clicked');

    }
});