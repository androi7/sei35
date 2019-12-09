const textList1 = $('p').text().split(' ');
const textList2 = [];
textList1.filter(function(elem, id) {
  if (!textList2.includes(elem) && elem.length > 1) {
    textList2.push(elem);
  }
});

const screenWidth = $(document).width();
const screenHeight = $(document).height();

// function map(value, minAfter, maxAfter, minBefore, maxBefore) {
//   return (value - minAfter) * (maxBefore - minBefore) / (maxAfter - minAfter) + minBefore;
// }

let hue = 0;
const randomPosition = function(length, height, innerSpace) {
  // length = Math.floor(Math.random()*(length));
  // length = map(length, length + innerSpace, height ? screenHeight - innerSpace : screenWidth - innerSpace, 0, height ? screenHeight: screenWidth);
  // console.log(length);
  return Math.floor(Math.random()*(length)); //length;
}


window.setInterval(function() {
  const randomWord = textList2[Math.floor(Math.random()*textList2.length)];
  hue = hue % 360;
  const $word = $('<p></p>').css({
    position: 'absolute',
    left: `${randomPosition(screenWidth, false, 400)}px`,
    top: `${randomPosition(screenHeight, true, 400)}px`,
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
}, 500);
