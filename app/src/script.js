$(document).ready(function(){


    var dotsNumber = $("#svg-map path").length;
    var color = "rgb(255, 0, 0)";
    // var startColor = "rgb(104, 104, 104)";

    function animate_map() {
        // $("#svg-map path").css({'fill': startColor});

        var currDotNumber = Math.floor((Math.random() * dotsNumber) + 1);

        var currDot = $("#svg-map path:nth-child("+currDotNumber+")");

        currDot.css({'fill': color});

        $('body').animate({},4000,  function(){
            setTimeout(function(){
                animate_map();
            }, 3000);
        });

    }

    animate_map();


    $("#svg-map path").click(function(){
        $(this).addClass('red');
    });

   $(".menu-icon").click(function(){
       $('.side-menu').toggleClass('open');
       $(this).toggleClass('active');
       $('body').toggleClass('shadow');
       return false;
   });

    //close menu on body click
    $(document).on('click', function(e) {
        var target = e.target;

        if ($(target).hasClass("side-menu")||$(target).hasClass("bar")||$(target).hasClass(".menu-icon")||$(target).hasClass("nav")||$(target).hasClass("nav__item")){
            console.log('don\'t close');
            return false;


        }

        $('.menu-icon').removeClass("active");
        $('.side-menu').removeClass('open');
        $('body').removeClass("shadow");

    });



});
