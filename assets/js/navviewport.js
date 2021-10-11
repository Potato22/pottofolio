$(function () {

    var $win = $(window);
    var winH = $win.height(); // window height

    $win.on("scroll", function () {
        if ($(this).scrollTop() > winH) {
            //console.log('navOff')
            $('.dynamicnav').removeClass('navOff');
        } else {
            //console.log('navOn')
            $('.dynamicnav').addClass('navOff');
        }
    }).on("resize", function () { // read window size change
        winH = $(this).height(); // update height value
    });

});
$(function () {
    $('.creation').click(function () {
        $('.dimmer').fadeIn(300);
        $('.creationdialog').addClass('cdactive');
    })
    $('.xcont, .cbutton').click(function () {
        $('.creationdialog').removeClass('cdactive');
        $('.dimmer').fadeOut(300);
    })
})

function chapter() {
    //calc offset
    var about = $('#about').offset().top - $(window).scrollTop();

    var create = $('#create').offset().top - $(window).scrollTop();
    var illus = $('#illus').offset().top - $(window).scrollTop();
    var anim = $('#anim').offset().top - $(window).scrollTop();
    var sket = $('#sket').offset().top - $(window).scrollTop();
    
    
    var contact = $('#contact').offset().top - $(window).scrollTop();

    //BOOL
    var aboutbool;
    var createbool;
    var contactbool;
    var illusbool;
    var animbool;
    var sketbool;

    if (about <= 0) {
        aboutbool = true;
        //console.log("about active")
    } else {
        aboutbool = false;
    }

    if (create <= 0) {
        createbool = true;
        aboutbool = false;
        //console.log("create active")
    } else {
        createbool = false;
    }
    if (illus <= 0) {
        illusbool = true;
        //console.log("create active")
    } else {
        illusbool = false;
    }
    if (anim <= 0) {
        animbool = true;
        illusbool = false;
        //console.log("create active")
    } else {
        animbool = false;
    }
    if (sket <= 0) {
        sketbool = true;
        animbool = false;
        //console.log("create active")
    } else {
        sketbool = false;
    }

    if (contact <= 0) {
        contactbool = true;
        creatbool = false;
        //console.log("anim active")
    } else {
        contactbool = false;
    }
    console.log('creatbool', createbool, '\n illusbool', illusbool, '\n animbool', animbool, '\n sketbool', sketbool )

    if (aboutbool == true) {
        $('.s1').addClass('activestrike')
    } else {
        $('.s1').removeClass('activestrike')
    }

    if (createbool == true) {
        $('.s2').addClass('activestrike')
    } else {
        $('.s2').removeClass('activestrike')
    }
    if (illusbool == true) {
        $('.s2-1').addClass('blockactive')
    } else {
        $('.s2-1').removeClass('blockactive')
    }

    if (animbool == true) {
        $('.s2-2').addClass('blockactive')
    } else {
        $('.s2-2').removeClass('blockactive')
    }

    if (sketbool == true) {
        $('.s2-3').addClass('blockactive')
    } else {
        $('.s2-3').removeClass('blockactive')
    }


    if (contactbool == true) {
        $('.s3').addClass('activestrike')
    } else {
        $('.s3').removeClass('activestrike')
    }
}
chapter();
$(window).scroll(chapter);