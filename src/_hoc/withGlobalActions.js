// @flow
import type { Node } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GlobalActions } from '../_utils';

export default function withGlobalActions(Component: Node) {
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(GlobalActions, dispatch);
  }

  return connect(null, mapDispatchToProps)(Component);
}
