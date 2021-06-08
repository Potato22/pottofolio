document.getElementById('daImg').addEventListener('finish', function (e) {
    $('.imgs').click(function () {
        console.log(this.src);
        $(".zoomincontent").attr("src",$(this).attr('src'));
        $(".zoomindimmer").fadeIn(200);
        $(".zoomin").show();
    });
});
$(function() {
    $(".imgsample").click(function(){
        $(".zoomincontent").attr("src",$(this).attr('src'));
        $(".zoomindimmer").fadeIn(200);
        $(".zoomin").show();
    });

    $(".zoomincontent,.zoomin").click(function(){
        $(".zoomincontent").attr("src", "");
        $(".zoomindimmer").fadeOut(200);
        $(".zoomin").hide();
    });
});