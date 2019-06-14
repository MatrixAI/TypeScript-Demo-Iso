import * as React from 'react';
import { Route } from 'react-router-dom';
import * as queryString from 'query-string';
import Home from './Home';
import About from './About';
import QueryParams from '../contexts/QueryParams';

function Index (props) {
  const queryParams = queryString.parse(props.location.search);
  // the index controller represents the root routing
  // here we can decide what components are always present
  // every route here is an exact route
  // every route component can nest more routes
  return (
    <React.Fragment>
      <QueryParams.Provider value={queryParams}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </QueryParams.Provider>
    </React.Fragment>
  );
}

export default Index;
