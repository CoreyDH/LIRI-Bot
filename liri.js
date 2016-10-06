// Vendor
var fs = require('fs');
var Twitter = require('twitter');
var spotify = require('spotify');

// My Scripts
var keys = require('./keys.js');

var app = {
  "my-tweets": function() {
    var client = new Twitter(keys);
    client.get('statuses/user_timeline', function(error, tweetData, response) {
      if (!error) {
        console.log(' ');
        console.log('================ My Tweets ================');
        tweetData.forEach(function(obj) {
          console.log('--------------------------');
          console.log('Time: ' + obj.created_at);
          console.log('Tweet: ' + obj.text);
          console.log('--------------------------');
          console.log(' ');
        });
        console.log('===========================================');
        console.log(' ');
        // console.log(tweets);

      } else {
        console.log(error);
      }
    });
  },
  "spotify-this-song": function() {
    spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

        // Do something with 'data'
    });
  },
  logData: function(data) {
    fs.writeFile('log.txt', JSON.stringify(data, null, 2), function(err) {
      if(err) {
        console.log(err);
      }
    });
  }
};


app[process.argv[2]]();
