import * as React from 'react';
import * as queryString from 'query-string';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dummies from '../components/Dummies';
import { connect } from 'react-redux';

const QueryContext = React.createContext({});

function Index (props) {
  const queryParameters = queryString.parse(props.location.search);
  return (
    <React.Fragment>
      <QueryContext.Provider value={queryParameters}>
        <Header />
        <p>Index Page</p>
        <Footer />
      </QueryContext.Provider>
    </React.Fragment>
  );
}

export default Index;
