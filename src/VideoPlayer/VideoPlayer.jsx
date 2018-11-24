import React from "react";

import "./styles.css";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  render() {
    return (
      <div className="videoPlayer">
        <video
          ref={this.videoRef}
          src="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4"
        />
        <div className="controls">
          <button
            className="play button"
            onClick={e => this.videoRef.current.play()}
          >
            ▶
          </button>
          <button
            className="pause button"
            onClick={e => this.videoRef.current.pause()}
          >
            ❚❚
          </button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
