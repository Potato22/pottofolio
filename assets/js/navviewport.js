$(function () {

    var $win = $(window);
    var winH = $win.height(); // Get the window height.

    $win.on("scroll", function () {
        if ($(this).scrollTop() > winH) {
            //console.log('navOff')
            $('.dynamicnav').removeClass('navOff');
        } else {
            //console.log('navOn')
            $('.dynamicnav').addClass('navOff');
        }
    }).on("resize", function () { // If the user resizes the window
        winH = $(this).height(); // you'll need the new heigt value
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
    var web = $('#web').offset().top - $(window).scrollTop();
    
    
    var contact = $('#contact').offset().top - $(window).scrollTop();

    //BOOL
    var aboutbool;
    var createbool;
    var contactbool;
    var illusbool;
    var animbool;
    var webbool;

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
    if (web <= 0) {
        webbool = true;
        animbool = false;
        //console.log("create active")
    } else {
        webbool = false;
    }

    if (contact <= 0) {
        contactbool = true;
        creatbool = false;
        //console.log("anim active")
    } else {
        contactbool = false;
    }
    console.log('creatbool', createbool, '\n illusbool', illusbool, '\n animbool', animbool, '\n webbool', webbool )

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

    if (webbool == true) {
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