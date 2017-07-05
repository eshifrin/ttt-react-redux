const initialInputState = {
  board: [[null, null, null], [null, null, null], [null, null, null]],
  turn: 1,
  is_AI: false,
  winner: null,
  movesLeft: 9
};

const marks = {
  1: 'X',
  2: 'O'
} 


const checkWinner = (board, row, col, mark) => {
  let rowWon = board[row][0] === mark && board[row][1] === mark && board[row][2] === mark;
  let colWon = board[0][col] === mark && board[1][col] === mark && board[2][col] === mark;
  let majorDiagWon = board[0][0] === mark && board[1][1] === mark && board[2][2] === mark;
  let minorDiagWon = board[0][2] === mark && board[1][1] === mark && board[2][0] === mark;

  return rowWon || colWon || majorDiagWon || minorDiagWon;
}

export default function inputReducer(state = initialInputState, action) {
  switch (action.type) {

    case 'NEW_GAME':
      return {...initialInputState}
    case 'TOGGLE_SPOT':
      let boxNumber = action.payload;
      let column = boxNumber % 3;
      let row = (boxNumber - column) / 3;
      if (state.board[row][column]) {
        return state;
      }

      let newBoard = state.board.map(row => row.slice());
      newBoard[row][column] = marks[state.turn];
      let winner = checkWinner(newBoard, row, column, marks[state.turn]) ? state.turn : null;
      let movesLeft = state.movesLeft - 1;

      return { ...state, ...{ 
        board: newBoard, 
        turn: state.turn === 1 ? 2 : 1,
        winner: winner,
        movesLeft: movesLeft }
      }
    
    default:
      return state;
  }    
};