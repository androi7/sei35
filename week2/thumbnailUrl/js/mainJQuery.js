$('a').each(function() {
  const href = $(this).attr('href');
  const generatedSrc = youtube.generateThumbnailUrl(href);
  const img = $('<img>').attr('src', generatedSrc);
  $(this).append(img);
});
