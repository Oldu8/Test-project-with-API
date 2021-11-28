import React, { Component } from "react";
import "./slider.css";
import SliderButton from "../slider-buttons/";
import GetInfo from "../get-info";

export default class Header extends Component {
  getInfoService = new GetInfo();

  state = {
    currentFilmName: null,
    filmID: null,
    sliderClassName: "slider__content",
  };

  constructor() {
    super();
    this.updateFilm();
  }

  updateFilm() {
    this.getInfoService.getFilm(2).then((film) => {
      this.setState({
        currentFilmName: film.title,
        filmID: film.episode_id,
      });
    });
  }

  render() {
    const { currentFilmName, filmID, sliderClassName } = this.state;

    const changeFilm = (dir) => {
      console.log(dir);
      if (dir === "next") {
        this.setState({
          filmID: parseInt(this.setState.filmID) + 1,
        });
      } else {
        this.setState({
          filmID: parseInt(this.setState.filmID) - 1,
        });
      }
    };

    return (
      <div className="slider__block">
        <SliderButton
          changeFilmFunc={(i) => changeFilm(i)}
          direction={"prev"}
        />
        <div className={sliderClassName}>
          {currentFilmName} {filmID}
        </div>
        <SliderButton
          changeFilmFunc={(i) => changeFilm(i)}
          direction={"next"}
        />
      </div>
    );
  }
}
