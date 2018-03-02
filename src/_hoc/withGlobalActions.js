import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GlobalActions from '../_utils/globalActions';

export default function withGlobalActions(Component) {
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(GlobalActions, dispatch);
  }

  return connect(null, mapDispatchToProps)(Component);
}
