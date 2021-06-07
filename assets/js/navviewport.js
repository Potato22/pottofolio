//$(document).ready(function() {
//
//    var $win = $(window);
//    var winH = $win.height();   // Get the window height.
//
//    $win.on("scroll", function () {
//        if ($(this).scrollTop() > winH ) {
//        console.log('ok')
//
//            $('.dynamicnav').css(
//                "background", "var(--alphabaseD)"
//            );
//        } else {
//            $('.dynamicnav').css(
//                "background", "var(--baseD)"
//            );
//        }
//    }).on("resize", function(){ // If the user resizes the window
//       winH = $(this).height(); // you'll need the new height value
//    });
//
//});