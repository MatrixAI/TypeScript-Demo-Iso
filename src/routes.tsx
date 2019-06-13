import * as React from 'react';
import { Route } from 'react-router-dom';
import * as queryString from 'query-string';
import Index from './controllers';

function Routes () {
  return <Route component={Index} />;
}

export default Routes;
