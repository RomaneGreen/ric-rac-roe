import React,{ Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
        gameBoard: [],
        playerTurn: 'X',
        winner: null,
    }

  }
  render() {
  return (
        <div>
    <div style={{ }}className="App boxcontainer">
    
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div></div>
  );
}
}

export default App;
