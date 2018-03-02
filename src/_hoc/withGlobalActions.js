import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GlobalActions from '../_utils/globalActions';

export default function withGlobalActions(Component) {
  const EnhancedComponent = props => <Component {...props} />;

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(GlobalActions, dispatch);
  }

  return connect(null, mapDispatchToProps)(EnhancedComponent);
}
