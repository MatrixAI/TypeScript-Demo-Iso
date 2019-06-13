import { AnyAction } from 'redux';
import { Map } from 'immutable';
import { Dummy } from '../dummies';
import {
  DUMMY_CREATE,
  DUMMY_UPDATE,
  DUMMY_DELETE
} from '../actions/dummies';

type DummiesState = Map<number, Dummy>;

const dummiesState = Map();

function dummies (state = dummiesState, action: AnyAction) {
  switch (action.type) {
    case DUMMY_CREATE:
    return state.set(
      action.id,
      {
        ...action.dummyData,
        id: action.id
      }
    );
    case DUMMY_UPDATE:
      return state.update(action.id, dummy => {
        if (dummy === undefined) return undefined;
        return { ...dummy, ...action.dummyData };
      });
    case DUMMY_DELETE:
      return state.delete(action.id);
    default:
      return state;
  }
}

export default dummies;

export { DummiesState };
