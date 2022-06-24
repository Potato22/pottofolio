document.getElementById("daImg").addEventListener("galleryLoaded", (function (e) {
    console.log('ready')
    $(".imgs").click((function () {
        $(".zoomincontent").attr("src", $(this).attr("src")), $(".zoomindimmer").fadeIn(200), $(".zoomin").show(), $(".dynamicnav").addClass("navHide")
    })), $(".zoomincontent,.zoomin").click((function () {
        $(".zoomincontent").attr("src", ""), $(".zoomindimmer").fadeOut(200), $(".zoomin").hide(), $(".dynamicnav").removeClass("navHide")
    }))
}));