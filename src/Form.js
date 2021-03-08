/** @format */

import React from "react";

const Form = () => {
  return (
    <section className="form-container">
      <h2>High Quality,Handcrafted-made keyboards</h2>
      <form className="form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit" className="btn">
          Get started
        </button>
      </form>
    </section>
  );
};
export default Form;
