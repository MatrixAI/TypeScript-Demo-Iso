import * as React from 'react';
import styled from 'styled-components';
import { Dummy } from '../models/dummies';

interface DummiesProps {
  dummies: Array<Dummy>;
  className?: string;
}

const Button = styled.button``;

const DummyButtons = styled((props) => {
  return (
    <div className={props.className}>
      <Button>Add Dummy</Button>
      <Button>Remove Dummy</Button>
    </div>
  );
})``;

const DummiesList = styled((props) => {
  return (
    <ul className={props.className}>
      {props.dummies.map((dummy, index) => (
        <li key={index}>{dummy}</li>
      ))}
    </ul>
  );
})``;

const Dummies = styled((props: DummiesProps) => {
  return (
    <div className={props.className}>
      <DummiesList dummies={props.dummies} />
      <DummyButtons />
    </div>
  );
})``;

export default Dummies;

export { DummiesProps };
