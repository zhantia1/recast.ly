import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {

  var serverURL = 'https://www.googleapis.com/youtube/v3/search';
  
  var finalURL = `${serverURL}`;
  $.ajax({
    url: serverURL,
    type: 'GET',
    data: {'maxResults': options.max,
      'part': 'snippet',
      'q': options.query,
      'key': options.key,
      'type': 'video',
      'videoEmbeddable': 'true'
    },
    success: function(data) {
      callback(data.items);
      //console.log('Youtube request: Success');
    },
    error: function (error) {
      console.error('Youtube request: Error', error);
    }
  });
  
  
};


export default searchYouTube;
