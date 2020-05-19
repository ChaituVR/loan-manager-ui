import React from 'react';
import { Redirect } from 'react-router-dom';
import { checkLogin, logout } from '../Auth.helper';
import HeaderComponent from '../../Header/Header.component';
import { Spin } from 'antd';
import SideBar from '../../SideBar';
import AccountsAlerts from '../../Common/AccountAlerts';

class RestricterPagesComponent extends React.Component {
  constructor(props){
    super(props);
    this.loginCallBack = this.loginCallBack.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  componentDidMount(){
    checkLogin(this.loginCallBack, async (error) =>{
      console.log(error);
      this.props.userSignedOut();
    });
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  async loginCallBack(user) {
    if (user) {
      console.log('Logged In: ', user);
      // User is signed in.
      await this.props.userLoggedIn(user);
    } else {
      // User is signed out.
      this.props.userSignedOut();
    }
  }
  handleLogout(){
    logout();
  }
  render(){
    const { loading, failed, user, children } = this.props;
    if (loading){
      return <Spin style={{ marginTop: '45vh' }} tip="Loading..." size="large"/>;
    }
    if (failed){
      return <Redirect to="/login"/>;
    }
    return (
      <div className="restricted-page">
        <HeaderComponent 
          user={user} 
          handleLogout={this.handleLogout} 
          toggleCollapsed={this.toggleCollapsed}
        />
        <SideBar 
          collapsed={this.state.collapsed} 
          toggleCollapsed={this.toggleCollapsed}
        >
          <AccountsAlerts />
          {children}
        </SideBar>
      </div>
    );
  }
}

export default RestricterPagesComponent;
