import * as React from 'react';
import styled from 'styled-components';
import { Dummy } from '../models/dummies';

interface DummyButtonProps {
  onAdd: any,
  className?: string;
}

interface DummiesProps {
  onAddDummy: any,
  dummies: Array<Dummy>;
  className?: string;
}

const Button = styled.button``;

const DummyButtons = styled((props: DummyButtonProps) => {
  return (
    <div className={props.className}>
      <Button onClick={props.onAdd}>Add Dummy</Button>
    </div>
  );
})``;

const DummiesList = styled((props) => {
  return (
    <ul className={props.className}>
      {props.dummies.map((dummy, index) => (
        <li key={index}>{dummy.name}</li>
      ))}
    </ul>
  );
})``;

const Dummies = styled((props: DummiesProps) => {
  return (
    <div className={props.className}>
      <DummiesList dummies={props.dummies} />
      <DummyButtons onAdd={props.onAddDummy} />
    </div>
  );
})``;

export default Dummies;

export { DummiesProps };
