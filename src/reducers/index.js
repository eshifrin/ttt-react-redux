import { combineReducers } from 'redux';
import gameData from './boardReducer';

const rootReducer = combineReducers({
  gameData
});

export default rootReducer;
