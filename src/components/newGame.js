import React from 'react';

const NewGame = ({ newClick }) => {
    return (
      <div className = 'newGame-container'>
        <div className='newGame' onClick={(e) => newClick(e)}>NEW GAME</div>
      </div>
    )
};

export default NewGame
