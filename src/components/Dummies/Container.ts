import { connect } from 'react-redux';
import { create, remove, DummyId } from '@matrixai/models/dummies';
import Dummies from './Component';

let dummyIdAuto: DummyId = 0;

const mapStateToProps = (state) => {
  return {
    dummies: state.dummies.entrySeq()
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddDummy: () => {
      dummyIdAuto += 1;
      dispatch(create({
        name: 'dummy!',
        id: dummyIdAuto
      }));
    },
    onRemoveDummy: (id) => {
      dispatch(remove(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dummies);
