import React, { useState } from 'react';
import Square from "./components/square";
import CalculateWinner from './helpers/winner';
import "./App.css";

function App() {
  const [move, setMove] = useState(false);
  // const [isActive, setIsActive] = useState(false);
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
    setWinner(CalculateWinner(board)) ;
  }

  const renderSquare = (i) => {
    return (
      <Square
        value={board[i]}
        onClick={() => handleClick(i)}
        />
    )
  }

  return (
    <div id='parentContainer'>
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
    </div>
  );
}

export default App;
