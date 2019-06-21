import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'styled-modern-normalize';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer, { State } from './models';
import Routes from './routes';

const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    promiseMiddleware
  )
);

const store: Store<State> = createStore(reducer, middleware);

const GlobalStyle = createGlobalStyle`
  ${modernNormalize}
`;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
