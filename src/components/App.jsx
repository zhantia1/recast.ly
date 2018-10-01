import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div> <VideoPlayer />  </div>
      </div>
      <div className="col-md-5">
        <div><h5><VideoList videos={window.fakeVideoData}/> </h5></div>
      </div>
    </div>
  </div>
);



ReactDOM.render(<App />, document.getElementById("app"));
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
