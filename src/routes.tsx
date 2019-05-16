import * as React from "react";
import { Route } from "react-router-dom";
import Index from './controllers/Index';

function Routes () {
  return (
    <React.Fragment>
      <Route exact path="/" component={Index} />
    </React.Fragment>
  );
}

export default Routes;
