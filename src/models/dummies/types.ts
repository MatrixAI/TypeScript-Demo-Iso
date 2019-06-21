type DummyId = number;

interface DummyData {
  name: string;
}

interface Dummy extends DummyData {
  id: DummyId;
}

export {
  DummyId,
  DummyData,
  Dummy
};
