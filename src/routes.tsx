import * as React from "react";
import { Route } from "react-router-dom";
import Index from './controllers/Index';

function Routes () {
  return (
    <div>
      <Route exact path="/" component={Index} />
    </div>
  );
}

export default Routes;
