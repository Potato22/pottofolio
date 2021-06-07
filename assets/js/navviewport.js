$(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance >= 600) {
        $('.dynamicnav').css(
            "background", "var(--alphabaseD)"
        );
    } else {
        $('.dynamicnav').css(
            "background", "var(--baseD)"
        );
    }
});