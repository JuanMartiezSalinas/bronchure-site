/** @format */

import React from "react";
import ReactPlayer from "react-player";
// import Iframe from "react-iframe";

const Video = () => {
  // if (window.screen.width > 600) {
  //   width = 50;
  //   height = 50;
  // }

  return (
    <div id="video" className="video">
      <div className="wrapper">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=_N7adWvQDM4"
          className="react-player"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};
export default Video;
