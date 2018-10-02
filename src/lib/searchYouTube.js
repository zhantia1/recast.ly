var searchYouTube = (options, callback) => {

  var serverURL = 'https://www.googleapis.com/youtube/v3/search';
  
  $.ajax({
    url: serverURL,
    type: 'GET',
    data: {'maxResults': '5',
            'part': 'snippet',
            'q': options
            }
    
  });
};

export default searchYouTube;
