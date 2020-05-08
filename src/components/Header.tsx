import * as React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

interface HeaderProps {
  className?: string;
}

const Header = styled((props) => {
  return (
    <header className={props.className}>
      <h1>Header</h1>
      <Navigation />
    </header>
  );
})``;

export default Header;

export { HeaderProps };
