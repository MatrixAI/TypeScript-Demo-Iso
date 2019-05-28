import { Action } from 'redux';
import { Dummy, DummyId } from '../dummies';

const DUMMY_CREATE = 'DUMMY_CREATE';
const DUMMY_UPDATE = 'DUMMY_UPDATE';

interface DummyCreateAction extends Action<typeof DUMMY_CREATE> {
  dummy: Dummy;
}

interface DummyUpdateAction extends Action<typeof DUMMY_UPDATE> {
  id: DummyId;
  dummyData: Partial<Dummy>;
}

function dummyCreate (dummy: Dummy): DummyCreateAction {
  return {
    type: DUMMY_CREATE,
    dummy
  };
}

function dummyUpdate (id: DummyId, dummyData: Partial<Dummy>): DummyUpdateAction {
  return {
    type: DUMMY_UPDATE,
    id,
    dummyData
  };
}

export {
  DUMMY_CREATE,
  DUMMY_UPDATE,
  DummyCreateAction,
  DummyUpdateAction,
  dummyCreate,
  dummyUpdate
};
