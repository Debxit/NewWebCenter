$(document).ready(function(){

    //background map infinite filling

    var dotsNumber = $("#svg-map path").length;

    function animate_map() {
        var currDotNumber = Math.floor((Math.random() * dotsNumber) + 1);

        var currDot = $("#svg-map path:nth-child("+currDotNumber+")");

        currDot.addClass('red');

        $('body').animate({},4000,  function(){
            setTimeout(function(){
                animate_map();
            }, 3000);
        });

    }
    animate_map();

    // $("#svg-map path").click(function(){
    //     $(this).addClass('red');
    // });

   $(".menu-icon").click(function(){
       $('.side-menu').toggleClass('open');
       $(".menu-icon").toggleClass('active');
       $('body').toggleClass('shadow');
       return false;
   });

    //close menu on body click
    $(document).on('click', function(e) {
        var target = e.target;

        if ($(target).hasClass("side-menu")||$(target).hasClass("bar")||$(target).hasClass(".menu-icon")||$(target).hasClass("nav")||$(target).hasClass("nav__item")){
            return false;
        }
        $('.menu-icon').removeClass("active");
        $('.side-menu').removeClass('open');
        $('body').removeClass("shadow");

    });


//main-page slider initialize

    $('.page-slider').slick({
        infinite: false,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<div class="dot__item"> '+thumb+'</div><div class="dot__circle"></div>';
        }
    });


    $('.page-slider').mousewheel(function(e) {
        e.preventDefault();

        if (e.deltaY < 0) {
            $(this).slick('slickNext');
        }
        else {
            $(this).slick('slickPrev');
        }
    });

    $('.full-logo').click(function(){

        if( $('.page-slider').length ){

        $('.page-slider').slick('slickGoTo',0);
        return false;

        }

    });

    $('.page-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(nextSlide);

        if ( currentSlide == 0){
            $('.logo .empty-logo').addClass('hidden');
            $('.logo .full-logo').removeClass('hidden');
        }

        if( nextSlide == 0 ){
            $('.logo .empty-logo').removeClass('hidden');
            $('.logo .full-logo').addClass('hidden');
        }
    });

});
