import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'styled-modern-normalize';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { AppAction } from './models/actions';
import appReducer, { AppState } from './models/reducers';
import Routes from './routes';

const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware
  )
);

const store = createStore(appReducer, middleware);

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
