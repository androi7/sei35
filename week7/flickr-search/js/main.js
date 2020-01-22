// https://www.flickr.com/services/rest/?method=flickr.photos.search&text=coral+ocean&api_key=2f5ac274ecfac5a455f38745704ad084&format=json&nojsoncallback=1 (edited)

const BASE_URL = 'https://www.flickr.com/services/rest/';
const API_KEY = '2f5ac274ecfac5a455f38745704ad084';

const searchFlickr = searchText => {
  $.getJSON(BASE_URL, {
    method: 'flickr.photos.search',
    text: searchText,
    api_key: API_KEY,
    format: 'json',
    nojsoncallback: 1
  })
  .done( displaySearchResults)
  .fail(console.warn);
};  // searchFlickr

const displaySearchResults = response => {
  $('#results').empty();
  response.photos.photo.forEach(photo => {
    const url = generatePhotoURL(photo);
    console.log(url);
    $('#results').append(`<img src="${url}">`);
  });  // forEach
};  // displaySearchResults()


const generatePhotoURL = photo => {
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
};


$(document).ready(() => {

  $('#searchForm').on('submit', () => {
    const query = $('#searchText').val();
    console.log('Form submitted!', query);
    searchFlickr(query);

    return false;  // do not actually submit the form
                   // which reloads the page
  });

});  // document ready
