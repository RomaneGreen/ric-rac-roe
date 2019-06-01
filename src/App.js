import React,{ Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
        gameBoard: Array(9).fill(null),
        playerTurn: 'O',
        winner: null,
    }

   
  }
  markBoard = (i) => {
   

   const changeValue = this.state.gameBoard.slice(0,this.state.gameBoard.length) 

   if (!changeValue[i]){
   changeValue[i] = this.state.playerTurn
   }
   
  const whoTurn = this.state.playerTurn === 'O' ? "X" : "O"

      this.setState({
        gameBoard: changeValue,
        playerTurn: whoTurn,
        winner: null
      })
  }

  render() {
    let boxes = this.state.gameBoard.map((z,i) => <div onClick={ () => this.markBoard(i)} key={i} className="box">{this.state.gameBoard[i]}</div>)
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
