import { connect } from 'react-redux';
import AccountsAlertsComponent from './component';

const mapStateToProps = (state, props) => {
  return {
    user: state.auth.user ? state.auth.user : {}
  };
};

const mapDispatchToProps = {
  // Placeholder
};

const AccountsAlerts = connect(mapStateToProps, mapDispatchToProps)(AccountsAlertsComponent);
export default AccountsAlerts;