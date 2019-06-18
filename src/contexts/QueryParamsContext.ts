import * as React from 'react';

type QueryParams = {
  [key: string]: any;
};

const QueryParamsContext = React.createContext<QueryParams>({});

export default QueryParamsContext;
