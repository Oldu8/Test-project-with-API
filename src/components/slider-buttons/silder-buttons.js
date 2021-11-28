import React from "react";
import "./slider-buttons.css";

const SliderButton = ({ direction, changeFilmFunc }) => {
  const btnClicked = () => {
    changeFilmFunc(direction);
  };

  return (
    <button className="slider__buton" onClick={btnClicked}>
      {direction}
    </button>
  );
};

export default SliderButton;
