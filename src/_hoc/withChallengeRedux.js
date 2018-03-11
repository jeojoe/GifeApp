// @flow
import type { Node, ComponentType } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ChallengeActions } from '../Challenge';

export default function withChallengeRedux(Component: Node | ComponentType<*>) {
  function mapStateToProps(state) {
    return {
      isDoChallengeModalVisible: state.isDoChallengeModalVisible,
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(ChallengeActions, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps)(Component);
}
