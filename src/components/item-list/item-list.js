import React from "react";
import "./item-list.css";
import Item from "../item/";

const ItemList = () => {
  return (
    <div className="item__list">
      <h2 className="header__ItemList">This is our list of films:</h2>
      <div className="film__list">
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default ItemList;
