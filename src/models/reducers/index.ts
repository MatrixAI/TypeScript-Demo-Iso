import { combineReducers } from 'redux';
import dummies, { DummiesState } from './dummies';

interface AppState {
  dummies: DummiesState
}

const appReducer = combineReducers({
  dummies
});

export default appReducer;

export { AppState };
