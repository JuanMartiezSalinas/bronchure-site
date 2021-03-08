/** @format */

import React from "react";
import ReactPlayer from "react-player";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const Video = () => {
  return (
    <div id="video" className="video">
      <h1>still with doubts?</h1>
      <div className="wrapper">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=_N7adWvQDM4"
          className="react-player"
          // width="100%"
          // height="100%"
        />
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>Contact</h3>
        <div className="socials">
          <li>
            <a href="#" target="_blank" className="contact-details">
              <FiTwitter className="contact-icons" />
              Twitter
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="contact-details">
              <FaShoppingCart className="contact-icons" />
              Shop
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="contact-details">
              <AiOutlineMail className="contact-icons" />
              Mail
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="contact-details">
              <FiFacebook className="contact-icons" />
              Facebook
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};
export default Video;
