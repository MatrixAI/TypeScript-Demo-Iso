import { DummyCreateAction, DummyUpdateAction } from './dummies';

type AppAction = (DummyCreateAction | DummyUpdateAction);

export { AppAction };
