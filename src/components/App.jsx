import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Search from './Search.js';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      value: '',
      submitClicked: false
    };
    
    this.findVideos = _.debounce(this.findVideos,500);
    this.onHandleClick = this.onHandleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  onHandleClick(selectedVideo) {      
    this.setState({
      currentVideo: selectedVideo
    });
  }
  
  findVideos(options) {
    searchYouTube(options, data => {
      this.setState({
        videos: data
      });
    });  
  }
  
  handleChange(value) {
    this.setState({value: value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    this.setState({
      submitClicked: true  
    });
    
    event.preventDefault();  
  }
  
  componentDidMount() {
    //console.log('this component just mounted');
    
    var options = {};
    options.query = 'cats';
    options.max = 6;
    options.key = YOUTUBE_API_KEY;
    
    searchYouTube(options, data => {
      this.setState({
        currentVideo: data[0],
        videos: data.slice(1)
      });
      
    }); 
  }
  
  componentDidUpdate() {
    //console.log('this component did update');
    var options = {};
    options.query = this.state.value;
    options.max = 5;
    options.key = YOUTUBE_API_KEY;
    
    this.findVideos(options);
        
    if (this.state.submitClicked) {
      var options = {};
      options.query = this.state.value;
      options.max = 6;
      options.key = YOUTUBE_API_KEY;   
      

      searchYouTube(options, data => {
        this.setState({
          currentVideo: data[0],
          videos: data.slice(1)
        });
      
      });
    
      this.setState({
        submitClicked: false
      });
    }
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search onHandleChange={this.handleChange} onHandleClick={this.handleSubmit} />
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div> <VideoPlayer video={this.state.currentVideo}/> </div>
          </div>
          <div className="col-md-5">
            <div><h5><VideoList onClick={this.onHandleClick} videos={this.state.videos}/> </h5></div>
          </div>
        </div>
      </div>
    );
  }
  
}



ReactDOM.render(<App />, document.getElementById('app'));
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
