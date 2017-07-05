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

  render() {
    const { turn, winner, newGameClick } = this.props;
    const turnProps = { turn, winner }

    return (
      <div className="app-container">
        <Board />
        <Turn className='turn' { ...turnProps } />
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
  const { turn, winner } = state.gameData;
  return { 
    turn, winner
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);

