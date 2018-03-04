import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GlobalActions } from '../_utils';

export default function withGlobalActions(Component) {
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(GlobalActions, dispatch);
  }

  return connect(null, mapDispatchToProps)(Component);
}
