const textList1 = $('p').text().split(' ');
const textList2 = [];
textList1.map(function(elem, id) {
  if (!textList2.includes(elem) && elem.length > 1) {
    textList2.push(elem);
  }
});

const screenWidth = $(document).width();
const screenHeight = $(document).height();


let hue = 0;
const randomPosition = function(length, innerSpace) {
  return Math.floor(Math.random()*length); //length;
}


window.setInterval(function() {
  const randomWord = textList2[Math.floor(Math.random()*textList2.length)];
  hue = hue % 360;
  const $word = $('<p></p>').css({
    position: 'absolute',
    left: `${randomPosition(screenWidth, 5)}px`,
    top: `${randomPosition(screenHeight, 5)}px`,
    color: `hsla(${hue}, 100%, 50%, 0.8)`,
    textShadow: '1px 1px 1px 4px',
    fontSize: '2rem',
    transform: `rotate(${Math.floor(Math.random()*360)}deg)`,
  }).text(randomWord);
  $('body').append($word);
  $word.fadeIn(1500).fadeOut(1100, function() {
    $(this).remove();
  });
  hue+=10;
}, 100);
