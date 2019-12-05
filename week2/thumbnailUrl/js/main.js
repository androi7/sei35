const linkArr = document.querySelectorAll('a');


for( let element of linkArr ) {
  const aHref = element.href;
  const thumbnail = youtube.generateThumbnailUrl(aHref);
  const img = document.createElement('img');
  img.src = thumbnail;
  element.appendChild(img);
}
