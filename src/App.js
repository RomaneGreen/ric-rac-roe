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
   
      console.log(i)
   const changeValue = this.state.gameBoard.slice(0,this.state.gameBoard.length) 

   if (!changeValue[i]){
   changeValue[i] = this.state.playerTurn
  
  
  const whoTurn = this.state.playerTurn === 'O' ? "X" : "O"

      this.setState({
        gameBoard: changeValue,
        playerTurn: whoTurn,
        winner: null
      })
    }
  }

  calculateWinner = () => {

    if (this.state.gameBoard[0] === this.state.gameBoard[1] && this.state.gameBoard[2]){

    alert("Game over "+this.state.playerTurn + " wins")
    this.setState({
        gameBoard: Array(9).fill(null),
    })
    }else {
          
      if (!this.state.gameBoard.includes(null)) {

        alert("draw")
      }
        
    }

  }

  render() {
    let calcWinner = this.calculateWinner
    let boxes = this.state.gameBoard.map((z,i) => <div onClick={ () => this.markBoard(i)} key={i} className="box">{this.state.gameBoard[i]}</div>)
  return (
        <div>
    <div style={{ }}className="App boxcontainer">
          {boxes}
            {calcWinner()}



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
