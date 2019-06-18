import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QueryParamsContext from '../contexts/QueryParamsContext';

function Home (props) {
  const queryParams = React.useContext(QueryParamsContext);
  return (
    <React.Fragment>
      <Header />
      <p>Home Page</p>
      <p>Query Parameters:</p>
      <code>{JSON.stringify(queryParams)}</code>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
