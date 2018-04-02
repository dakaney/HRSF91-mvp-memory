import React from 'react';
import Rows from './Rows';

const Table = ({ col, cards, click }) => {
  let columns = [];

  for (let i = 0; i < col; i++) {
    let chosen = Math.floor(Math.random() * cards.length);
    let letter = cards[chosen];
    cards.splice(chosen, 1);
    columns.push(<Rows key={i} value={letter} click={click}/>)
  }
  return (
    <tr>{columns}</tr>

  )
}

export default Table;