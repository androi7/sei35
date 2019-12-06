
$('body').append($('<p id="newP">You pressed: </p>'));
$('input[type=text]').on('keydown', function(e) {
  $(e.target).css('color','gray');
}).on('keyup', function(e) {
  $(e.target).css('color', 'green');
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
});

let blurFactor = 0;

$('#kitty').on('click', function(ev) {
  console.log(ev);
  $(this).css({'filter': 'drop-shadow(16px 16px 20px red) invert(75%)'});
}).on('mousemove', function(ev) {
  blurFactor++;
  $(this).css({'filter': `blur(${blurFactor/10}px)`});
});

$('#toggle').on('click', function() {
  $('.triple-kitty1').toggle();
});

$('#fade').on('click', function() {
  $('.triple-kitty2').fadeToggle();
});

$('#show h2').on('mousedown', function() {
  $('.triple-kitty3').show();
});

$('#show h2').on('mouseup', function() {
  $('.triple-kitty3').hide();
});
