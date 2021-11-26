import React from "react";
import "./slider-buttons.css";

const SliderButton = ({ direction }) => {
  return <button className="slider__buton">{direction}</button>;
};

export default SliderButton;
