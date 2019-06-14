import { combineReducers } from 'redux';
import dummies, { DummiesState } from './dummies';

const appReducer = combineReducers({
  dummies
});

type AppState = ReturnType<typeof appReducer>

export { AppState };

export default appReducer;
