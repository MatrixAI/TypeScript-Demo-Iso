import { combineReducers } from 'redux';
import dummies, { Action as DummiesAction } from './dummies';

const reducer = combineReducers({
  dummies
});

type State = ReturnType<typeof reducer>;

type Action = DummiesAction;

export default reducer;

export { State, Action };
