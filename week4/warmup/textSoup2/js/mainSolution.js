console.log('working');

$(document).ready(function() {

  let timerID = null;

  const controls = {
    fadeIn: 2000,
    fadeOut: 2000,
    fontSize: 30,
    wordTimerInterval: 100
  };

  const gui = new dat.GUI();

  gui.add(controls, 'fadeIn', 0, 5000);
  gui.add(controls, 'fadeOut', 0, 5000);
  gui.add(controls, 'fontSize', 10, 200);
  gui.add(controls, 'wordTimerInterval', 1, 1000)
  .onFinishChange(function(newValue) {
      window.clearInterval(timerID);
      timerID = window.setInterval( displayWord, newValue );
    });


  const divContents = $('#book').text().split(/\W+/);
  console.log(divContents);

  const randomValue = function( max ) {
    return Math.floor(Math.random() * max);
  };

  const displayWord = function() {
    const randomIndex = randomValue( divContents.length );

    const randomWord = divContents[randomIndex];

    const $wordDiv = $('<div class="word"></div>');
    $wordDiv.text(randomWord);

    const xRand = randomValue( window.innerWidth ) + 'px';
    const yRand = randomValue( window.innerHeight ) + 'px';

    const colorRand = `rgb(${randomValue(255)}, ${randomValue(255)}, ${randomValue(255)})`;

    $wordDiv.css({
      top: yRand,
      left: xRand,
      color: colorRand,
      fontSize: `${controls.fontSize}px`,
      transform: `rotate(${randomValue(360)}deg)`
    });


    $('body').append($wordDiv);

    $wordDiv.fadeIn(controls.fadeIn).fadeOut(controls.fadeOut, function() {
      $(this).remove();
    });

  };

  timerID = setInterval(displayWord, 100);
});
