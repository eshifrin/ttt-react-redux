import React from 'react';

const Box = ({ index, mark, boxClick }) => {
  return (
    <div onClick={() => boxClick(index)} className={`box box-${index}`}> {mark ? mark : ''} </div>
  )
}

export default Box;