import React, { Component } from 'react';
import TicTacToe from "./TicTacToe"
import NavBar from "./NavBar"

class App extends Component {
  render() {
    return (
      <div className="TicTacToe">
        <NavBar />
        <TicTacToe />
      </div>
    );
  }
}

export default App;
