var VideoPlayer = () => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe width="1147" height="645" src="https://www.youtube.com/embed/4UjNV9Fn76U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>Video Title</h3>
      <div>Video Description</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
