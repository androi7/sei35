$(document).ready( function() {
  $('body').append($('<p id="newP">You pressed: </p>'));
  $('input[type=text]').on('keydown', function(e) {
    $(e.target).css('color','red');
  }).on('keyup', function(e) {
    $(this).css('color', 'green');
  }).on('keypress', function(e) {
    console.log('you pressed', String.fromCharCode(e.keyCode));
    let content = $('#newP').html();
    $('#newP').html(content + String.fromCharCode(e.keyCode));
  }).on('blur', function(ev) {
    console.log('blur', ev);
  }).on('change', function(ev) {
    console.log('change', ev);
  }).on('focus', function(ev) {
    console.log('focus', ev);
  }).on('input', function(ev) {
    const inputText = $(this).val();
    //console.log(inputText);

    if (inputText === 'chicken' ) {
      console.log('Chicken is the correct passoword!!');
      $('#features').slideDown();
    }
  });

  let blurFactor = 0;

  $('#kitty').on('click', function(ev) {
    console.log(ev);
    $(this).css({'filter': 'drop-shadow(16px 16px 20px red) invert(75%)'});
  }).on('mouseenter', function(ev) {
    blurFactor++;
    //$(this).css({'filter': `blur(${blurFactor/10}px)`});
    $(this).css({'filter': `blur(${blurFactor}px)`});
  });

  $('#toggle').on('click', function() {
    $('.triple-kitty1').toggle();

  });

  $('#fade').on('click', function() {
    $('#features').fadeToggle(2000);
  });

  $('#show h2').on('mousedown', function() {
    $('.triple-kitty3').show();
  });

  $('#show h2').on('mouseup', function() {
    $('.triple-kitty3').hide();
  });


  // Attach a click handler to every element on the page
  // shows the propagation bubbling up structure
  $('*').on('click', function() {
    console.log(this);
  });


/*
  $('#kitty').css({
    position: 'relative',
    left: 0
  }, 3000);

  $('#kitty').animate({
      left: '100px', //window.innerWidth,
      width: '70vw'
    },
    3000,
    function() {
      console.log('animation complete!');
  });
*/
});
