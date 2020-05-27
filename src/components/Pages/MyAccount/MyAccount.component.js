import React from 'react';
import { Popconfirm, message, Button, Divider } from 'antd';
import { sendEmailVerification, sendPasswordResetEmail } from '../../Auth/Auth.helper';

class MyAccountComponent extends React.Component {
  confirm = () => {
    sendEmailVerification(() => {
      message.success('Email Sent!');
    }, () => {
      message.success('There is an Error! Please Try again after sometime');
    });
  }
  sendPasswordResetEmail = () => {
    sendPasswordResetEmail(this.props.user.email, () => {
      message.success('Email Sent!');
    }, () => {
      message.success('There is an Error! Please Try again after sometime');
    });
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <h3>My Account</h3>
        <Divider/>
        {
          user.providerEmail && !user.emailVerified &&
          <div>
            <h4>Your email is not verified: </h4>
            <Popconfirm
              title="Are you sure?"
              onConfirm={this.confirm}
              okText="Yes"
              cancelText="No"
              placement="right"
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Button type="primary">Send Verification Email</Button>
            </Popconfirm>
            <Divider dashed/>
          </div>
        }
        {
          user.providerEmail &&
          <div>
            <h4>Reset Password: </h4>
            <Popconfirm
              title="Are you sure?"
              onConfirm={this.sendPasswordResetEmail}
              okText="Yes"
              cancelText="No"
              placement="right"
            >
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Button>Send email for Password Reset</Button>
            </Popconfirm>
          </div>
        }
      </div>
    );
  }
}


export default MyAccountComponent;


