
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
}, 2500);/**
 * Created by Vasiliy Tsvetkov on 06.06.2017.
 */
