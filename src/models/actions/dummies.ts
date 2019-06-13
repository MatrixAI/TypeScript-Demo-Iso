import { Action } from 'redux';
import { DummyId, DummyData, Dummy } from '../dummies';

const DUMMY_CREATE = 'DUMMY_CREATE';
const DUMMY_UPDATE = 'DUMMY_UPDATE';
const DUMMY_DELETE = 'DUMMY_DELETE';

interface DummyCreateAction extends Action<typeof DUMMY_CREATE> {
  id: DummyId;
  dummyData: DummyData;
}

interface DummyUpdateAction extends Action<typeof DUMMY_UPDATE> {
  id: DummyId;
  dummyData: Partial<DummyData>;
}

interface DummyDeleteAction extends Action<typeof DUMMY_DELETE> {
  id: DummyId;
}

// usually this id is provided by the source of truth
// here we are simulating it with an auto-incremented id
let dummyIdAuto: DummyId = 0;

function dummyCreate (dummyData: DummyData): DummyCreateAction {
  const action: DummyCreateAction = {
    type: DUMMY_CREATE,
    id: dummyIdAuto,
    dummyData
  };
  dummyIdAuto += 1;
  return action;
}

function dummyUpdate (id: DummyId, dummyData: Partial<DummyData>): DummyUpdateAction {
  return {
    type: DUMMY_UPDATE,
    id,
    dummyData
  };
}

function dummyDelete (id: DummyId): DummyDeleteAction {
  return {
    type: DUMMY_DELETE,
    id
  };
}

export {
  DUMMY_CREATE,
  DUMMY_UPDATE,
  DUMMY_DELETE,
  DummyCreateAction,
  DummyUpdateAction,
  DummyDeleteAction,
  dummyCreate,
  dummyUpdate,
  dummyDelete
};
