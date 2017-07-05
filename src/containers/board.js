import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import Box from '../components/Box'

export class Board extends Component {
  constructor(props) {
    super()

    this.boxClick = this.boxClick.bind(this);
  }

  boxClick(idx) {
    const winner = this.props.winner;
    if (!winner) {
      this.props.toggleSpot(idx);
    } else {
      return;
    }    
  }


  render() {
    const { board, turn, winner } = this.props;
    const { boxClick } = this;
    const createRow = (row, rowIdx) => {
      return row.map((mark, colIdx) => {
        return <Box 
                  key={colIdx} 
                  index={rowIdx * 3 + colIdx}
                  mark={mark}
                  boxClick={boxClick} />
      });
    }

    return (
      <div className="board-container">
        <div className="board">
        {
          board.map((row, rowIdx) => {
            return (
            <div className="board-row" key={rowIdx}>
              { createRow(row, rowIdx) }
            </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newGame: () => dispatch(actions.newGame()),
    toggleSpot: (idx) => dispatch(actions.toggleSpot(idx))
  }
}

const mapStateToProps = (state) => {
  let { board, turn, winner} = state.gameData

  return {
    board, turn, winner
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Board);

