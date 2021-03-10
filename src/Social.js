/** @format */

import React from "react";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import { FaShoppingCart, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const Social = () => {
  return (
    <div className="socials">
      <a href="#">
        <FiTwitter /> Twitter
      </a>
      <a href="#">
        <FiFacebook /> Facebook
      </a>
      <a href="#">
        <AiOutlineMail /> Mail
      </a>
      <a href="#">
        <FaShoppingCart /> Shop
      </a>
      <a href="#">
        <FaPhone /> Call us
      </a>
    </div>
  );
};

export default Social;
