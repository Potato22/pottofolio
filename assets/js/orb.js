$('body').mouseenter(function(){
    $('.orbcursor').removeClass('animoff')
    $('.orbcursor').addClass('animactive')
    $('.orbcursor').stop().fadeIn('fast')
  })
  $('body').mouseleave(function(){
    $('.orbcursor').removeClass('hoveringattr')
    $('.orbcursor').removeClass('idle')
    $('.orbcursor').removeClass('animactive')
    $('.orbcursor').addClass('animoff')
    $('.orbcursor').stop().fadeOut('fast')
  })
  $('a').mouseenter(function(){
    $('.orbcursor').removeClass('idle')
    $('.orbcursor').removeClass('animactive')
    $('.orbcursor').addClass('hoveringattr')
  })
  $('a').mouseleave(function(){
    $('.orbcursor').removeClass('hoveringattr')
    $('.orbcursor').addClass('animactive')
    $('.orbcursor').addClass('idle')
  })
  const cursor = document.querySelector('.orbcursor');

  let mouseX = 0;
  let mouseY = 0;
  
  let cursorX = 0;
  let cursorY = 0;
  
  let speed = .5; // change to increase the ease
  
  function animate() {
      let distX = mouseX - cursorX;
      let distY = mouseY - cursorY;
  
      cursorX = cursorX + (distX * speed);
      cursorY = cursorY + (distY * speed);
  
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
  
      requestAnimationFrame(animate);
  }
  
  
  animate();
  
  document.addEventListener('mousemove', (event) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
  })
  