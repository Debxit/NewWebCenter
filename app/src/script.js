@@include('blocks/map/map.js')

$(document).ready(function () {
	@@include('blocks/file-input/file-input.js')
	@@include('blocks/cont-panel/cont-panel.js')
	@@include('blocks/svg-wrap/svg-map.js')
	@@include('blocks/page-slider/page-slider.js')
	@@include('blocks/side-menu/side-menu.js')





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
             breakpoint: 1400,
             settings: {
                 slidesToShow: 1
             }
         },
         {
             breakpoint: 992,
             settings: {
                 unslick: true
             }
         }
     ]
 });


    $('a.full-logo').click(function (e) {

        if ($('.page-slider').length) {
            $('.page-slider').slick('slickGoTo', 0);
            return false;
        }

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
