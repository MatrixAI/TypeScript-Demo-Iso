import { connect } from 'react-redux';
import Dummies from '../components/Dummies';
import { dummyCreate } from '../models/actions/dummies';

const mapStateToProps = (state) => {
  return {
    dummies: state.dummies.entrySeq()
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
