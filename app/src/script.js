@@include('blocks/map/map.js')

$(document).ready(function () {
	@@include('blocks/file-input/file-input.js')
	@@include('blocks/cont-panel/cont-panel.js')

    //background map infinite dot blinking
    var dotsNumber = $("#svg-map path").length;
    var countInterval = 0;

    function random(min, max) {
        return (Math.random() * (max - min)) + min;
    }

    function animate_map() {
        var currDotNumber = Math.floor((Math.random() * dotsNumber) + 1);
        var dots = $("#svg-map path");
        var currDot = $("#svg-map path:nth-child(" + currDotNumber + ")");
        dots.removeClass('red');
        currDot.addClass('red');
    }

    setInterval(function () {
        animate_map();
    }, 2500);


    // open and close side menu
    $(".menu-icon").click(function () {
        $('.side-menu').toggleClass('open');
        $(".menu-icon").toggleClass('active');
        $('body').toggleClass('shadow');
        return false;
    });

    //close menu on body click
    $(document).on('click', function (e) {
        var target = e.target;

        if ($(target).hasClass("side-menu") || $(target).hasClass("bar") || $(target).hasClass(".menu-icon") || $(target).hasClass("nav") || $(target).hasClass("nav__item")) {
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
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<div class="dot__item"> ' + thumb + '</div><div class="dot__circle"><div class="circle__line"></div></div>';
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    adaptiveHeight: true
                }
            }
        ]
    });

 $('.portfolio-slider').slick({
     infinite: false,
     dots: true,
     arrows: false,
     fade: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     customPaging: function (slider, i) {
       //  var thumb = $(slider.$slides[i]).data('thumb');
         return '<div class="portfolio-nav-item"> </div>';
     },
     responsive: [
         {
             breakpoint: 768,
             settings: {
                 unslick: true
             }
         }
     ]
 });

    $('.page-slider').mousewheel(function (e) {
        e.preventDefault();

        if (e.deltaY < 0) {
            $(this).slick('slickNext');
        }
        else {
            $(this).slick('slickPrev');
        }
    });

    $('a.full-logo').click(function (e) {

        if ($('.page-slider').length) {
            $('.page-slider').slick('slickGoTo', 0);
            return false;
        }

    });

    $('.page-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        var logo__main = "web",
            logo__small = 'center',
            i = 0,
            j = 0;

        function write_web() {
            $('.logo__main').addClass("cursor");
            setInterval(function () {
                if (i < logo__main.length) {
                    $('.logo__main').text($('.logo__main').text() + logo__main[i]);
                    i++;
                }

            }, 150);
        }

        function write_center() {
            $('.logo__main').removeClass("cursor");
            $('.logo__small').addClass("cursor");

            setInterval(function () {
                if (j < logo__small.length) {
                    $('.logo__small').text($('.logo__small').text() + logo__small[j]);
                    j++;
                }
            }, 150);
            $('.logo a').addClass('full-logo');

            setTimeout(function () {
                $('.logo__small').removeClass("cursor");
            }, 2000);
        }

        function delete_web() {
            var str = logo__main;
            $('.logo__small').removeClass("cursor");
            $('.logo__main').addClass("cursor");

            setInterval(function () {
                if (i < logo__main.length) {
                    str = str.slice(0, -1);
                    $('.logo__main').text(str);
                    i++;
                }
            }, 150);
            setTimeout(function () {
                $('.logo a').removeClass('full-logo');
            }, 150);
            setTimeout(function () {
                $('.logo__main').removeClass("cursor");
            }, 600);
        }

        function delete_center() {
            $('.logo__small').addClass("cursor");
            var str = logo__small;
            setInterval(function () {
                if (j < logo__small.length) {
                    str = str.slice(0, -1);
                    $('.logo__small').text(str);
                    j++;
                }
            }, 150);
        }

        if ((currentSlide == 0) && (nextSlide != 0)) {

            write_web();
            setTimeout(write_center, 450);

            $('.svg-wrap').addClass('light');
        }

        if ((currentSlide != 0) && (nextSlide == 0)) {

            delete_center();
            setTimeout(delete_web, 900);

            $('.svg-wrap').removeClass('light');
        }

        var $animateCurrent = $('.slick-slide[data-slick-index="' + currentSlide + '"]>div');


        if (nextSlide > currentSlide){

            $animateCurrent.velocity({
                opacity: "0",
                scale: "0.5",
                translateZ: "-1000px"
            }, 500);
        }
        else{
            $animateCurrent.velocity({
                opacity: "0",
                scale: "1.5",
                translateZ: "1000px"
            }, 500);
        }
        //end BeforeChange()
    });

     $('.page-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {

            var $animateNext = $('.slick-slide[data-slick-index="' + currentSlide + '"]>div');

            $animateNext.velocity({
                opacity: "1",
                scale: "1",
                translateZ: "0"
            }, 500, function () {
            })
        });

        /********************* animation *****************/

        //animate logo at the first screen
        $('.logo-container').velocity({
            opacity: "1",
            scale: "1"
        }, 700, function () {
            $('.logo-center').velocity({
                opacity: "1",
                translateX: "0"
            }, 500, "ease", function () {
                $('.logo-container .brace-left,.logo-container .brace-right').velocity({
                    opacity: "1",
                    translateX: "0"
                }, 500, "ease");
            });
        });

    });
