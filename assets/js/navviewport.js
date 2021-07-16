$(document).ready(function() {

    var $win = $(window);
    var winH = $win.height();   // Get the window height.

    $win.on("scroll", function () {
        if ($(this).scrollTop() > winH ) {
            //console.log('navOff')
            $('.dynamicnav').removeClass('navOff');
        } else {
            //console.log('navOn')
            $('.dynamicnav').addClass('navOff');
        }
    }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // you'll need the new heigt value
    });

});
function chapter() {

    // this gets the distance between the trigger element and the top of the window
    // a negative value means it has scroll up and off the screen
    var about = $('#about').offset().top - $(window).scrollTop();
    var illus = $('#illustration').offset().top - $(window).scrollTop();
    var anim = $('#anim').offset().top - $(window).scrollTop();


    // boolean : has the trigger element gone above the top? true/false
    var aboutbool;
    var illusbool;
    var animbool;
    var contactbool;

    if (about < 0) {
        aboutbool = true;
        console.log("about active")
    } else {
        aboutbool = false;
    }

    if (illus < 0) {
        illusbool = true;
        console.log("illus active")
    } else {
        illusbool = false;
    }

    if (anim < 0) {
        animbool = true;
        console.log("anim active")
    } else {
        animbool = false;
    }
}
chapter();
$(window).scroll(chapter);