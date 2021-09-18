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
    if(board[val] === null) {
      let newBoard = board;
      if(move) {
        newBoard.splice(val, 1, 'X')
      } else {
        newBoard.splice(val, 1, 'O')
      }
      setBoard(newBoard);
      setMove(!move);
      setWinner(CalculateWinner(board));
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(player1 && player2) {
      setIsActive(true);
    } 
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
      <h1>{player1} vs {player2}</h1>
      {winner ? 
      <h2>Congrats {winner === "O" ? player1 : player2 }, you are the winner!!</h2> :  
      <h2>Next Move - {move ? player2 : player1}</h2>
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
      <button className='btn-main' onClick={() => playAgain()}>Play Again</button>
    </div>
    : 
    <div className='inputForm'>
      <h1>TiC TaC ToE</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input title="input-field1" type='text' placeholder='player1' onChange={(e) => setPlayer1(e.target.value.toUpperCase())}></input>
        <input title="input-field2" type='text' placeholder='player2' onChange={(e) => setPlayer2(e.target.value.toUpperCase())}></input>
        <button title="submit_players" className='btn-main'>Lets Play</button>
      </form>
    </div>
    }
    </>
  );
}

export default App;
