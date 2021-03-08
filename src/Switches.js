/** @format */

import React from "react";
import { switches } from "./data";
import Type from "./Type";

const Switches = () => {
  return (
    <div id="switches" className="switches">
      {switches.map((item, index) => {
        return <Type data={item} key={index} />;
      })}
    </div>
  );
};
export default Switches;
