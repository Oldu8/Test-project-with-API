import React from "react";
import "./slider.css";
import SliderButton from "../slider-buttons/";

const Header = () => {
  const nextFilm = () => {
    console.log("Next film");
  };
  const prevFilm = () => {
    console.log("Prev film");
  };

  return (
    <div className="slider__block">
      <SliderButton
        // func={() => prevFilm}
        direction={"prev"}
      />
      <div className="slider__content"></div>
      <SliderButton
        //  func={() => nextFilm}
        direction={"next"}
      />
    </div>
  );
};

export default Header;
