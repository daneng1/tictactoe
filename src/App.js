import React, { useState } from 'react';
import Square from "./components/square";
import "./App.css";

function App() {
  const [move, setMove] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(move);
    return setMove(!move);
  }

  return (
    <div id='parentContainer'>
      <div className="squareContainer">
        <div className="row">
          <Square move={move} onSubmit={(e) => handleSubmit()}/>
          <Square move={move} onSubmit={(e) => handleSubmit()}/>
          <Square move={move} onSubmit={(e) => handleSubmit()}/>
        </div>
        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </div>
  );
}

export default App;
