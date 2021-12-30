import React, { Component } from "react";
import "./App.css";
import Lottery from "./Lottery";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Lottery title="Lotto" numBalls={6} maxNum={40} />
        <Lottery title="Daly" numBalls={4} maxNum={10} />
      </div>
    );
  }
}

export default App;
