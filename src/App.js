import React,{ Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
        gameBoard: Array(9).fill("X"),
        playerTurn: 'O',
        winner: null,
    }

   
  }
  markBoard = () => {
     alert("you clicked me") 
  const whoTurn = this.state.playerTurn === 'O' ? "X" : "O"
      this.setState({
        playerTurn: whoTurn
      })
  }

  render() {
    let boxes = this.state.gameBoard.map((x,i) => <div onClick={this.markBoard} key={i} className="box">{this.state.playerTurn}</div>)
  return (
        <div>
    <div style={{ }}className="App boxcontainer">
          {boxes}




      {/* <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div> */}
    </div></div>
  );
}
}

export default App;
