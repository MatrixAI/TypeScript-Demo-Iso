import {
  DummyCreateAction,
  DummyUpdateAction,
  DummyDeleteAction
} from './dummies';

type AppAction = (
  DummyCreateAction |
  DummyUpdateAction |
  DummyDeleteAction
);

export { AppAction };
