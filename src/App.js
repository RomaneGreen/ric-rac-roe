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

    const winningCombos = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ]

      for( let y = 0; y < winningCombos.length; y++) {
        console.log(y)
       // console.log(winningCombos[1][2])
      }

    if (this.state.gameBoard[0] === this.state.gameBoard[1] && this.state.gameBoard[0] === this.state.gameBoard[2] && !this.state.gameBoard.includes(null)){
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
     this.calculateWinner()
    let boxes = this.state.gameBoard.map((z,i) => <div  onClick={() => this.markBoard(i)} key={i} className="box">{this.state.gameBoard[i]}</div>)
  return (
        <div>

          <h2>Tic-Tac-Toe</h2> <h2>Player {this.state.playerTurn}'s turn</h2>

        <div style={{ }}className="App boxcontainer">

          {boxes}
           
      
    </div></div>
  );
}
}

export default App;
