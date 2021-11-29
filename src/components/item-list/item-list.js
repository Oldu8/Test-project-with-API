import React from "react";
import "./item-list.css";
import Item from "../item/";
import GetInfo from "../get-info";

const getInfoService = new GetInfo();

const loadAllFilms = () => {
  getInfoService.getAllFilms().then((film) => {
    film.forEach((f) => console.log(f.title));
  });
};

// loadAllFilms();

const ItemList = () => {
  return (
    <div className="item__list">
      <h2 className="header__ItemList">Film information:</h2>
      <div className="film__list">
        <Item props={"Titel"} />
        <Item props={"Release date"} />
        <Item props={"Opening crawl"} />
      </div>
    </div>
  );
};

export default ItemList;
