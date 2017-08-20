import React from 'react';

class App extends React.Component {
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
          <h2>WhatToGet.Online</h2>
          <h4>great ideas hand picked from amazon</h4>
        </header>
        <section>
          Tech Gifts
        </section>
        <footer>
          <button onClick={this.onClickShowMe}>Show Me</button>
        </footer>
      </div>
    );
  }
}
export default App;
