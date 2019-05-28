import { AnyAction } from 'redux';
import { Map } from 'immutable';
import { Dummy } from '../dummies';
import { DUMMY_CREATE, DUMMY_UPDATE } from '../actions/dummies';

type DummiesState = Map<number, Dummy>;

const dummiesState = Map();

function dummies (state = dummiesState, action: AnyAction) {
  switch (action.type) {
    case DUMMY_CREATE:
      return state.set(action.dummy.id, action.dummy);
    case DUMMY_UPDATE:
      return state.update(action.id, dummy => {
        if (dummy === undefined) return undefined;
        return { ...dummy, ...action.dummyData };
      });
    default:
      return state;
  }
}

export default dummies;

export { DummiesState };
