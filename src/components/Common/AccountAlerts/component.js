import React from 'react';
import { Alert } from 'antd';
import { Link } from 'react-router-dom';
import { routes } from '../../../config';

class AccountsAlertsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      //
    };
  }

  render() {
    const { user } = this.props;
    let message = null;
    if(user.providerEmail && !user.emailVerified){
      message = <div>
        Email not Verified. <Link to={routes.myAccount}>
          Go to My Account
        </Link> for more information
      </div>
    }

    if(!message){
      return null;
    }
    // Check https://ant.design/components/alert/
    return <Alert
      message={message}
      banner
      closable
      style={{marginBottom: 24}}
    />
  }
}

export default AccountsAlertsComponent;
