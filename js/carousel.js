var currdeg = 0;

$(function(){
    $(".ui-loader").hide();
    initCarousel();

    //carousel swiping
    $(".container").on("swipeleft", carouselSwipeLeft);
    $(".container").on("swiperight", carouselSwipeRight);



});



/************ CUSTOM METHOD ***********/
var initCarousel = function(){
    $("item.focus").prevAll().each(function(e){
        $(this).css("transform", "rotateY(-45deg) translateX(-" + (e+2) * 100 + "px)");
    });
    $("item.focus").nextAll().each(function (e) {
        $(this).css("transform", "rotateY(45deg) translateX(" + (e + 2) * 100 + "px)");
    });
};

var carouselSwipeRight = function() {
    var curObj = $("item.focus");
    console.log("swiping right");
    if(curObj.prev().length > 0) {
        console.log('inside');

        curObj.removeClass("focus");
        curObj.prev().removeAttr('style');
        curObj.prev().addClass("focus");

        initCarousel();
    }
};

var carouselSwipeLeft = function() {
    var curObj = $("item.focus");
    console.log("swiping left");
    if(curObj.next().length > 0){
        console.log('inside');
        curObj.removeClass("focus");
        curObj.next().removeAttr('style');
        curObj.next().addClass("focus");

        initCarousel();
    }

};





