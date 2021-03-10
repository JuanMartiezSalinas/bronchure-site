/** @format */

import React from "react";
import { FaTools } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";

const info = [
  {
    title: "Fully customizable",
    text:
      "Select between various cases and switches to make it your own style and comfort.",
    icon: <FaTools className="icon" size={50} />,
  },
  {
    title: "Fast and Safe Shipping",
    text:
      "As soon as your keyboard is finished, it is shipped and taken to the door of your home. You can be sure that it will arrive intact and without any damage.",
    icon: <FiPackage className="icon" size={50} />,
  },
  {
    title: "Warranty",
    text:
      "Your keyboard has a 1 year warranty against any defect in the assembly or components. In case of damage, we will give you a new keyboard with the same specifications!!!.",
    icon: <GiCheckMark className="icon" size={50} />,
  },
];
const Info = () => {
  return (
    <section id="info" className="info">
      {info.map((item) => {
        return (
          <article className="info-grid">
            <div className="a">{item.icon}</div>
            <article className="b">
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </article>
          </article>
        );
      })}
    </section>
  );
};

export default Info;
