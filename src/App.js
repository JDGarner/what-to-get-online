import React from "react";
import Category from "./components/category/category";
import './css/index.scss';

export default class App extends React.Component {
  onClickShowMe;

  constructor() {
    super();
  }

  onClickShowMe() {
    console.log("TODO: implement Show Me");
  }

  render() {
    return (
      <div>
        <header>
          <h2 className="">WhatToGet.Online</h2>
          <h4>Great ideas hand picked from amazon</h4>
        </header>
        <Category name="Tech" />
        <Category name="Food" />
        <Category name="Fun" />
        <Category name="Home" />
        <footer>
          <button onClick={this.onClickShowMe}>Show Me</button>
        </footer>
      </div>
    );
  }
}
