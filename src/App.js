import React, { useState } from 'react';
import Square from "./components/square";
import CalculateWinner from './helpers/winner';
import "./App.css";

function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [move, setMove] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState();

  const handleClick = (val) => {
    let newBoard = board;
    if(move) {
      newBoard.splice(val, 1, 'X')
    } else {
      newBoard.splice(val, 1, 'O')
    }
    setBoard(newBoard);
    console.log(val, board);
    setMove(!move);
    setWinner(CalculateWinner(board));
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsActive(true);
    console.log(player1, player2);
  }

  const renderSquare = (i) => {
    return (
      <Square
        value={board[i]}
        onClick={() => handleClick(i)}
        />
    )
  }

  const playAgain = () => {
    setPlayer1([]);
    setPlayer2([]);
    setMove(false);
    setIsActive(false);
    setBoard(Array(9).fill(null));
    setWinner();
  }

  return (
    <>
    {isActive ? 
    <div id='parentContainer'>
      <h1>{player1.toUpperCase()} vs {player2.toUpperCase()}</h1>
      {winner ? 
      <h1>Winner is {winner}</h1> :  
      <h1>Next Move - {move ? "X" : "O"}</h1>
    }
      <div className="squareContainer">
        <div className="row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          </div>
          <div className="row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          </div>
          <div className="row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
          </div>
      </div>
      <button onClick={() => playAgain()}>Play Again</button>
    </div>
    : 
    <div className='inputForm'>
      <h1>TiC TaC ToE</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' placeholder='player1' onChange={(e) => setPlayer2(e.target.value)}></input>
        <input type='text' placeholder='player2' onChange={(e) => setPlayer1(e.target.value)}></input>
        <button>Lets Play</button>
      </form>
    </div>
    }
    </>
  );
}

export default App;
