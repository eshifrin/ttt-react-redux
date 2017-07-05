import React from 'react';

const Turn = ({ turn, winner }) => {
  const text = `PLAYER ${winner ? `${winner} WON!` : `${turn} TURN`}`
  return (<div className='turn'> {text} </div>)
}

export default Turn;