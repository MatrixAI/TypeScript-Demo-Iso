import * as React from 'react';
import { Route } from 'react-router-dom';
import * as queryString from 'query-string';
import Home from './Home';

const QueryContext = React.createContext({});

function Index (props) {
  const queryParameters = queryString.parse(props.location.search);
  return (
    <React.Fragment>
      <QueryContext.Provider value={queryParameters}>
        <Route exact path="/" component={Home} />
      </QueryContext.Provider>
    </React.Fragment>
  );
}

export default Index;
