import * as React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

interface NavigationProps {
  className?: string;
}

const Navigation = styled((props: NavigationProps) => {
  return (
    <nav className={props.className}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
})``;

export default Navigation;

export { NavigationProps };
