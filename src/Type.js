/** @format */

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const Type = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [over, setOver] = useState(false);
  const { type, description, switches } = data;
  return (
    <section
      className={`${shown ? "container container-open" : "container"}`}
      onClick={() => setShown(!shown)}>
      <div className="initial-info">
        {shown ? (
          <div className="icono-container">
            <FiChevronUp className="icono" />
          </div>
        ) : (
          <div className="icono-container">
            <FiChevronDown className="icono" />
          </div>
        )}
        <h1>{type}</h1>
        <p>{description}</p>
      </div>

      {shown &&
        switches.map((item, index) => {
          return (
            <div className="individualSwitch">
              <img src={item.image} className="image" />
              <div className="specifications">
                <p>
                  <strong>Name:</strong> {item.name}
                </p>
                <p>
                  <strong>Manufacturer:</strong> {item.manufacturer}
                </p>
                <p>
                  <strong>Auction Distance:</strong> {item.actuationDistance}
                </p>
                <p>
                  <strong>Auction Force:</strong> {item.actuationForce}
                </p>
              </div>
            </div>
          );
        })}
    </section>
  );
};
export default Type;
