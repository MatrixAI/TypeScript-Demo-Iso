import * as React from 'react';
import styled from 'styled-components';
import { Dummy } from '../models/dummies';

interface DummyButtonsProps {
  onAdd: any,
}

interface DummiesProps {
  onAddDummy: any,
  dummies: any;
}

const Button = styled.button``;

const DummyButtons = styled(
  (props) => {
    return (
      <div className={props.className}>
        <Button onClick={props.onAdd}>Add Dummy</Button>
      </div>
    );
  }
)<DummyButtonsProps>``;

const DummiesList = styled((props) => {
  return (
    <ul className={props.className}>
      {props.dummies.map(([index, dummy]) => (
        <li key={index}>{dummy.name}</li>
      ))}
    </ul>
  );
})``;

const Dummies = styled(
  (props) => {
    return (
      <div className={props.className}>
        <DummiesList dummies={props.dummies} />
        <DummyButtons onAdd={props.onAddDummy} />
      </div>
    );
  }
)<DummiesProps>``;

export default Dummies;

export {
  DummiesProps
};
