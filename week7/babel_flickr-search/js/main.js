'use strict';

// https://www.flickr.com/services/rest/?method=flickr.photos.search&text=coral+ocean&api_key=2f5ac274ecfac5a455f38745704ad084&format=json&nojsoncallback=1 (edited)

var BASE_URL = 'https://www.flickr.com/services/rest/';
var API_KEY = '2f5ac274ecfac5a455f38745704ad084';

var searchQuery = ''; // this will contain the search text, later!
var currentPage = 0; // keep track of the page results we're up to

var searchFlickr = function searchFlickr(searchText) {

  currentPage++; // always increment the page counter (TODO: use an argument instead?)

  $.getJSON(BASE_URL, {
    method: 'flickr.photos.search',
    text: searchText,
    api_key: API_KEY,
    format: 'json',
    nojsoncallback: 1,
    page: currentPage
  }).done(displaySearchResults).fail(console.warn);
}; // searchFlickr

// Generate a new version of our searchFlickr function, which is
// guaranteed to run no more often than every 5 seconds.
// The new function takes the same arguments as our original function!
// NOTE: This is functions as "first-class" in JS:
// - they can be passed in as arguments to other functions
// - they can be returned by other functions
// - i.e. the're just *values*, like anything else you can put in a variable
var throttledSearchFlickr = _.throttle(searchFlickr, 5000);

var displaySearchResults = function displaySearchResults(response) {
  // $('#results').empty();
  response.photos.photo.forEach(function (photo) {
    var url = generatePhotoURL(photo);
    console.log(url);
    var $img = $('<img src="' + url + '">').on('click', function () {
      return displayFullscreenImage(photo);
    });
    $('#results').append($img);
  }); // forEach
}; // displaySearchResults()


var generatePhotoURL = function generatePhotoURL(photo) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'q';

  return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_' + size + '.jpg';
};

var displayFullscreenImage = function displayFullscreenImage(photoObj) {
  console.log(photoObj);
  var fullsizeURL = generatePhotoURL(photoObj, 'c');
  console.log('fullsizeURL', fullsizeURL);
  $('#fullscreen').css('background-image', 'url(' + fullsizeURL + ')').show();
};

$(document).ready(function () {

  $('#searchText').focus(); // cursor focus

  // Hide the fullscreen
  $(document).on('keydown', function (ev) {
    if (ev.key === 'Escape') {
      $('#fullscreen').fadeOut(500);
    }
  });

  // Handle a click on an thumbnail image to show a larger version
  // BECAUSE there are no images on the page yet, when we attach this handler to the query results,
  // we need a different way of attaching the handler to images - it needs to be able to respond
  // to ANY images on the page that are added at ANY time (dynamically)

  // $('#results > img').on('click', () => {
  // 'Event delegation' style:
  // $(document).on('clicked', '#results > img', () => {
  //   console.log('clicked!');
  // });

  $('#searchForm').on('submit', function () {
    // save into a global variable (infinite scroll needs it)
    searchQuery = $('#searchText').val();
    console.log('Form submitted!', searchQuery);

    // Clear the previous results
    $('#results').empty();

    // Reset the page counter for this new search
    currentPage = 0;

    // call our search function, passing in the query text
    searchFlickr(searchQuery);

    // do not actually submit the form which reloads the page
    return false;
  }); // form submit handler

  // Attach an event handler to scroll events on the whole window
  $(window).on('scroll', function () {

    // Have we scrolled to the bottom of the document yet?
    console.log('scroll');
    console.log('document height:', $(document).height());
    console.log('document height:', $(window).height());
    console.log('scrollTop:', $(window).scrollTop(), window.pageYOffset);

    // What is the distance of the window bottom from the TOP of the document?
    // (This will be an increasing number, with a max value of the document height)
    var scrollBottom = $(window).scrollTop() + $(window).height();
    console.log('scrollBottom', scrollBottom);

    // What is the distance of the window bottom from the END of the document?
    // (This will be a decreasing number (as we scroll down), with a min value of 0)
    var windowBottomToEnd = $(document).height() - scrollBottom;
    console.log('windowBottomToEnd:', windowBottomToEnd);

    if (windowBottomToEnd < 200) {
      // Load next page of results!
      console.log('%cLoad next page!', 'font-size: 18pt');

      // use the global variable containing the query, only changed when form submits
      throttledSearchFlickr(searchQuery);
    }
  }); // scroll handler
}); // document ready