import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions';

export const Counter = ({ count, increment, decrement }) => (
  <div>
    <button style={{ width: '50px' }} onClick={() => increment()}>
      +
    </button>
    <span style={{ paddingLeft: '50px', paddingRight: '50px' }}>
      {count}
    </span>
    <button style={{ width: '50px' }} onClick={() => decrement()}>
      -
    </button>
  </div>
)

function mapStateToProps(state, ownProps) {
  return {
    count: state.counter
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    increment: () => dispatch(actions.increment()),
    decrement: () => dispatch(actions.decrement())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
