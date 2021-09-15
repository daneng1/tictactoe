import { useState } from 'react';
import './square.css';

export default function Square(props) {
  const [shape, setShape] = useState();

  const fillSquare = () => {
    if(props.move) {
      setShape('X');
    } else (
      setShape('O')
    )
  }

  return (
    <div className='square'onClick={() => fillSquare()}>{shape}</div>
  )
}