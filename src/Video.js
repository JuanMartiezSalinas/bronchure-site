/** @format */

import React from "react";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div id="video" className="video">
      <div className="wrapper">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=_N7adWvQDM4"
          className="react-player"
          // width="100%"
          // height="100%"
        />
      </div>
    </div>
  );
};
export default Video;
