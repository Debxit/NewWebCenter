
var pathLength = function(el){
    var pathLen = $(el).get(0).getTotalLength();
    return pathLen;
};

var drawLine = function(line, length){
    $(line).velocity({
        'stroke-opacity': 1,
        'stroke-width': 5,
        'stroke-dasharray': length + ' ' + length,
        'stroke-dashoffset': length
    }, {
        duration: 0,
        delay: 500
    }).velocity({
        'stroke-dashoffset': 0
    }, 1500).velocity({
        'stroke-width': 1,
        'fill-opacity':1
    }, 200);
};

var cleanLine = function(line){
    $(line).velocity({
        'stroke-opacity': 0,
        'fill-opacity':0,
        'stroke-dasharray': 0,
        'stroke-width': 4
    }, 300 )
};

$('.portfolio-element').mouseenter(function(){
   var currSVG = $(this).find('.portfolio-element__hov-icon path');
   var length = pathLength(currSVG);
    drawLine(currSVG,length);
});
$('.portfolio-element').mouseleave(function(){
    var currSVG = $(this).find('.portfolio-element__hov-icon path');
    cleanLine(currSVG);
});