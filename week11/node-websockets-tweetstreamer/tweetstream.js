const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: 'P9lCe93DZgSvrMMYVW0N7mmZD',
  consumer_secret: 'TCekF7gbScLnGJMVbbBA2Uu5NjNE5Wx2ieD2Ue3ciiAGJKWg3M',
  access_token_key: '1196940384498118656-k49KETbIlZT6PJNl9aUVPlO16UXroi',
  access_token_secret: 'XVUST1p0F534VoGsKOhADoq0vyt4nXIA3bpXgf73qd0e6'
});


const stream = client.stream('statuses/filter', {track: 'javascript'});

// stream.on('data', function(event) {
//   console.log(event && event.text);
// });

stream.on('error', function(error) {
  throw error;
});

// Export the stream object so it can be require()'d anywhere
module.exports = stream;
