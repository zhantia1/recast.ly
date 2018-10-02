import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
    
    this.onHandleClick = this.onHandleClick.bind(this);
  }
  
  onHandleClick(selectedVideo) {       
    this.setState({
      currentVideo: selectedVideo
    });   
  }
  
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div> <VideoPlayer video={this.state.currentVideo}/>  </div>
          </div>
          <div className="col-md-5">
            <div><h5><VideoList onClick={this.onHandleClick} videos={exampleVideoData}/> </h5></div>
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
