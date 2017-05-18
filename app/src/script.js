$(document).ready(function () {


    //background map infinite filling
    var dotsNumber = $("#svg-map path").length;

    function animate_map() {
        var currDotNumber = Math.floor((Math.random() * dotsNumber) + 1);

        var currDot = $("#svg-map path:nth-child(" + currDotNumber + ")");

        currDot.addClass('red');

        $('body').animate({}, 4000, function () {
            setTimeout(function () {
                animate_map();
            }, 3000);
        });

    }

    animate_map();

    // $("#svg-map path").click(function(){
    //     $(this).addClass('red');
    // });


    // open aor close side menu
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
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<div class="dot__item"> ' + thumb + '</div><div class="dot__circle"></div>';
        }
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

    $('.full-logo').click(function () {

        if ($('.page-slider').length) {
            $('.page-slider').slick('slickGoTo', 0);
            return false;
        }

    });

    $('.page-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        var logo_main = "web",
            logo_small = 'center',
            i = 0,
            j = 0;

        function write_web() {
            setInterval(function () {
                if (i < logo_main.length) {
                    $('.logo_main').text($('.logo_main').text() + logo_main[i]);
                    i++;
                }
            }, 150);
        }

        function write_center() {
            setInterval(function () {
                if (j < logo_small.length) {
                    $('.logo_small').text($('.logo_small').text() + logo_small[j]);
                    j++;
                }
            }, 150);
        }

        function delete_web() {
            var str = logo_main;
            setInterval(function () {
                if (i < logo_main.length) {
                    str = str.slice(0, -1);
                    $('.logo_main').text(str);
                    i++;
                }
            }, 150);
        }

        function delete_center() {
            var str = logo_small;
            setInterval(function () {
                if (j < logo_small.length) {
                    str = str.slice(0, -1);
                    $('.logo_small').text(str);
                    j++;
                }
            }, 150);
        }

        if ((currentSlide == 0) && (nextSlide != 0)) {
            $('.logo').addClass('full-logo');

            write_web();
            setTimeout(write_center, 450);

        }

        if (nextSlide == 0) {
            $('.logo').removeClass('full-logo');

            delete_center();
            setTimeout(delete_web, 900);
        }
    });


    /********************* animation *****************/

    var explode = function (el) {
        var i, j, left, top, mx, my,
            pieces = 4;
        rows = pieces;//? Math.round( Math.sqrt( pieces ) ) : 9,
        cells = rows,
            element = $(el),
            show = "fadeIn",

            // Show and then visibility:hidden the element before calculating offset
            offset = element.show().css("visibility", "hidden").offset(),

            // Width and height of a piece
            width = Math.ceil(element.outerWidth() / cells),
            height = Math.ceil(element.outerHeight() / rows),
            pieces = [];


        // Children animate complete:
        function childComplete(elem) {
            pieces.push(elem);
            if (pieces.length === rows * cells) {
                animComplete();
            }
        }

        // Clone the element for each row and cell.
        for (i = 0; i < rows; i++) { // ===>
            top = offset.top + i * height;
            my = i - ( rows - 1 ) / 2;

            for (j = 0; j < cells; j++) { // |||
                left = offset.left + j * width;
                mx = j - ( cells - 1 ) / 2;

                // Create a clone of the now hidden main element that will be absolute positioned
                // within a wrapper div off the -left and -top equal to size of our pieces
                element
                    .clone()
                    .appendTo("body")
                    .wrap("<div class='elem-part'></div>")
                    .css({
                        position: "absolute",
                        visibility: "visible",
                        left: -j * width,
                        top: -i * height
                    })

                    // Select the wrapper - make it overflow: hidden and absolute positioned based on
                    // where the original was located +left and +top equal to the size of pieces
                    .parent()
                    // .addClass( "effect-explode" )
                    .css({
                        position: "absolute",
                        overflow: "hidden",
                        width: width,
                        height: height,
                        left: left + ( show ? mx * width : 0 ),
                        top: top + ( show ? my * height : 0 ),
                        opacity: show ? 0 : 1
                    })
                    .velocity({

                        rotateY: "360deg",
                        rotateZ: "360deg",
                        left: left + ( show ? 0 : mx * width ),
                        top: top + ( show ? 0 : my * height ),
                        opacity: show ? 1 : 0
                    }, {
                        queue: false,
                        duration: 1500,
                        complete: function () {
                            // console.log(this);
                            childComplete(this);
                        }
                    });
                //   .animate( {
                //       left: left + ( show ? 0 : mx * width ),
                //       top: top + ( show ? 0 : my * height ),
                //       opacity: show ? 1 : 0
                //   }, 1500, childComplete );
            }
        }

        function animComplete() {
            element.css({
                visibility: "visible"
            });
            // console.log($(pieces));
            // $( pieces ).remove();
            $('.elem-part').remove();
        }
    };

    //
    // $('.test').click(
    //     function () {
    //         explode(this);
    //     }
    // );

    // $('.page').click(function () {
    //     console.log(this);
    //     explode(this);
    // });
});
