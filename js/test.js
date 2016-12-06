$(function(){
    // Bind the swipeleftHandler callback function to the swipe event on div.box
    $( "div.box" ).on( "swipeleft", swipingleft );

    // Callback function references the event target and adds the 'swipeleft' class to it
    function swipingleft( e ){
        console.log("hello");
    }
});