console.log('working');

$(document).ready(function() {
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
      fontSize: `${15 + randomValue(30)}pts`,
      transform: `rotate(${randomValue(360)}deg)`
    });


    $('body').append($wordDiv);

    $wordDiv.fadeIn(2000).fadeOut(2000, function() {
      $(this).remove();
    });

  };

  setInterval(displayWord, 100);
});
