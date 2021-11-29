import React, { Component } from "react";
import "./slider.css";
import SliderButton from "../slider-buttons/";
import GetInfo from "../get-info";

export default class Header extends Component {
  getInfoService = new GetInfo();

  state = {
    currentFilmName: null,
    filmID: null,
  };

  constructor() {
    super();
    this.updateFilm();
  }

  updateFilm() {
    this.getInfoService.getFilm(1).then((film) => {
      this.setState({
        currentFilmName: film.title,
        filmID: film.episode_id,
      });
    });
  }

  render() {
    const { currentFilmName, filmID } = this.state;

    const changeFilm = (dir) => {
      if (filmID === 0) {
        console.log("id < 0");
        this.setState({
          filmID: 9,
        });
      }
      if (filmID === 10) {
        console.log("id > 9");
        this.setState({
          filmID: 5,
        });
      }
      if (dir === "next") {
        this.setState(function (state) {
          return {
            filmID: state.filmID + 1,
          };
        });
      } else {
        this.setState(function (state) {
          return {
            filmID: state.filmID - 1,
          };
        });
      }
    };

    return (
      <div className="slider__block">
        <SliderButton
          changeFilmFunc={(i) => changeFilm(i)}
          direction={"prev"}
        />
        <div
          className="slider__content"
          style={{
            backgroundImage: `url('http://localhost:3000//images/${filmID}.jpg')`,
          }}
        >
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
