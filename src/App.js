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
    <div style={{ textAlign:'center',margin: '20%'}}className="App">
      <h3>Im a react appp</h3>
    </div>
  );
}
}

export default App;
