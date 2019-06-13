import { connect } from 'react-redux';
import Dummies from '../components/Dummies';
import { dummyCreate } from '../models/actions/dummies';

const mapStateToProps = (state) => {
  // immutable map to array?
  // how to do this?
  const dummiesArray = [];
  state.dummies.forEach((v) => {
    dummiesArray.push(v);
  });
  return {
    dummies: dummiesArray
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddDummy: () => {
      dispatch(dummyCreate({
        name: 'dummy!'
      }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dummies);
