import * as React from 'react';
import styled from 'styled-components';
import { Seq } from 'immutable';
import { DummyId, Dummy } from '@matrixai/models/dummies';

interface DummiesProps {
  onAddDummy: () => void,
  onRemoveDummy: (DummyId) => void,
  dummies: Seq.Indexed<[DummyId, Dummy]>;
}

const DummyButtons = styled(
  ({ onAddDummy, className }) => {
    return (
      <div className={className}>
        <button onClick={onAddDummy}>Add Dummy</button>
      </div>
    );
  }
)``;

const DummiesList = styled(({ dummies, onRemoveDummy, className }) => {
  return (
    <ul className={className}>
      {dummies.map(([index, dummy]) => (
        <li key={index}>{index} {dummy.name} <button onClick={() => onRemoveDummy(index)}>Delete Dummy</button></li>
      ))}
    </ul>
  );
})``;

const Dummies = styled(
  ({ dummies, onAddDummy, onRemoveDummy, className }) => {
    return (
      <div className={className}>
        <DummiesList dummies={dummies} onRemoveDummy={onRemoveDummy} />
        <DummyButtons onAddDummy={onAddDummy} />
      </div>
    );
  }
)<DummiesProps>``;

export default Dummies;

export {
  DummiesProps
};
