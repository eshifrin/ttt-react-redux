import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import Board from './board'
import Turn from '../components/turn'
import NewGame from '../components/newGame'

export class App extends Component {
  constructor(props) {
    super()
  }

  componentWillMount() {
  }

  createMessage() {
    const { turn, winner, movesLeft } = this.props
    if (winner) {
      return `PLAYER ${winner} WINS`
    } else if (!movesLeft) {
      return `WE HAVE A TIE!`
    } else {
      return `PLAYER ${turn} TURN`
    }
  }

  render() {
    const { turn, winner, newGameClick } = this.props;

    return (
      <div className="app-container">
        <Board />
        <Turn className='turn' message={this.createMessage()} />
        <NewGame newClick={newGameClick} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newGameClick: (e) => dispatch(actions.newGame(e))
  }
}

const mapStateToProps = (state) => {
  const { turn, winner, movesLeft } = state.gameData;
  return { 
    turn, winner, movesLeft
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);

