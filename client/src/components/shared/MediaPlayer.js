import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const MediaPlayer = () => {
  return (
    <AudioPlayer
      autoPlay
      src="http://example.com/audio.mp3"
      onPlay={(e) => console.log("onPlay")}
      style={{
        width: '300px'
      }}
      // other props here
    />
  );
};

export default MediaPlayer;
