import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'styled-modern-normalize';
import Routes from './routes';

const GlobalStyle = createGlobalStyle`
  ${modernNormalize}
`;

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <Routes />
  </Router>,
  document.getElementById('root')
);
