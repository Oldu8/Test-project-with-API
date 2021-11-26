import React from "react";
import Slider from "../slider/";
import Header from "../header/";
import ItemList from "../item-list/";
import "./app.css";

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ItemList />
    </div>
  );
};

export default App;
