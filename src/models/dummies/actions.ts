import { Action as ReduxAction } from 'redux';
import { DummyId, DummyData, Dummy } from './types';

const enum actions {
  Create = 'Create',
  Update = 'Update',
  Remove = 'Remove'
}

interface ActionCreate extends ReduxAction<actions.Create> {
  id: DummyId;
  dummyData: DummyData;
}

interface ActionUpdate extends ReduxAction<actions.Update> {
  id: DummyId;
  dummyData: Partial<DummyData>;
}

interface ActionRemove extends ReduxAction<actions.Remove> {
  id: DummyId;
}

type Action = ActionCreate | ActionUpdate | ActionRemove;

function create (dummy: Dummy): ActionCreate {
  const { id, ...dummyData } = dummy;
  return {
    type: actions.Create,
    id: id,
    dummyData
  };
}

function update (id: DummyId, dummyData: Partial<DummyData>): ActionUpdate {
  return {
    type: actions.Update,
    id,
    dummyData
  };
}

function remove (id: DummyId): ActionRemove {
  return {
    type: actions.Remove,
    id
  };
}

export default actions;

export {
  ActionCreate,
  ActionUpdate,
  ActionRemove,
  Action,
  create,
  update,
  remove
};
