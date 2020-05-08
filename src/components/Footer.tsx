import * as React from 'react';
import styled from 'styled-components';

interface FooterProps {
  className?: string;
}

const Footer = styled((props: FooterProps) => {
  return (
    <footer className={props.className}>
      <h1>Footer</h1>
    </footer>
  );
})``;

export default Footer;

export { FooterProps };
