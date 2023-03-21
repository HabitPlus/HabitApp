import React from 'react';
import YouTube from 'react-youtube';

function VideoId() {
  const videoId = 'https://www.youtube.com/watch?v=MlcH1TocMSA';
  const opts = {
    width: 560,
    height: 315,
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default VideoId;