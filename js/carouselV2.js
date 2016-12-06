var carousel = $(".carousel"),
    currdeg  = 0, imageCounter=1;

$(function(){
    $(".ui-loader").hide();



    initCarousel();

    //carousel swiping
    $(".container > *").on("swipeleft", carouselSwipeLeft);
    $(".container > *").on("swiperight", carouselSwipeRight);

    $(".next").on("click", { d: "n" }, rotate);
    $(".prev").on("click", { d: "p" }, rotate);

});





/************ CUSTOM METHOD ***********/
var initCarousel = function(){
    $("item").each(function(e){
        $(this).css("transform", "rotateY(" + imageCounter * 60 + "deg) translateZ(250px)");
        imageCounter++;
    });
};


var carouselSwipeRight = function() {
    currdeg = currdeg + 60;
    carousel.css({
        "-webkit-transform": "rotateY("+currdeg+"deg)",
        "-moz-transform": "rotateY("+currdeg+"deg)",
        "-o-transform": "rotateY("+currdeg+"deg)",
        "transform": "rotateY("+currdeg+"deg)"
    });
};

var carouselSwipeLeft = function() {


    currdeg = currdeg - 60;
    carousel.css({
        "-webkit-transform": "rotateY("+currdeg+"deg)",
        "-moz-transform": "rotateY("+currdeg+"deg)",
        "-o-transform": "rotateY("+currdeg+"deg)",
        "transform": "rotateY("+currdeg+"deg)"
    });
};

function rotate(e){
    if(e.data.d=="n"){
        currdeg = currdeg - 60;
    }
    if(e.data.d=="p"){
        currdeg = currdeg + 60;
    }
    carousel.css({
        "-webkit-transform": "rotateY("+currdeg+"deg)",
        "-moz-transform": "rotateY("+currdeg+"deg)",
        "-o-transform": "rotateY("+currdeg+"deg)",
        "transform": "rotateY("+currdeg+"deg)"
    });
}



