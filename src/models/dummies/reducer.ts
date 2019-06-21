import { AnyAction } from 'redux';
import { Map } from 'immutable';
import { DummyId, DummyData } from './types';
import actions from './actions';

type State = Map<number, Readonly<DummyData>>;

const stateInitial: State = Map();

function reducer (state: State = stateInitial, action: AnyAction): State {
  switch (action.type) {
    case actions.Create:
      return state.set(
        action.id,
        { ...action.dummyData }
      );
    case actions.Update:
      return state.update(action.id, dummyData => {
        if (dummyData === undefined) return undefined;
        return {
          ...dummyData,
          ...action.dummyData
        };
      });
    case actions.Remove:
      return state.delete(action.id);
    default:
      return state;
  }
}

export default reducer;

export { State };
