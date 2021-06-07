const toggleSwitch = document.querySelector('#ttogle');
toggleSwitch.addEventListener('click', switchTheme);

function switchTheme(e) {
    console.log('ok')
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        $('.videobanner').attr('src', 'assets/video/pottogravity.webm');
        $('.splash').addClass("splashanim"); console.log('splash')
        setTimeout(function(){
            $('.splash').removeClass("splashanim"); console.log('reset')
        }, 400);
        $('.icon').text('dark_mode');

    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        $('.videobanner').attr('src', 'assets/video/pottogravitydark.webm');
        $('.splash').addClass("splashanim"); console.log('splash')
        setTimeout(function(){
            $('.splash').removeClass("splashanim"); console.log('reset')
        }, 400);
        $('.icon').text('light_mode');
    }    
}
