import React from 'react';
import { Spin } from 'antd';
import { Redirect } from 'react-router-dom';
import { showLogin, checkLogin } from '../Auth.helper';
import { Logo } from '../../Common/Image';

class NormalLoginForm extends React.Component {
  constructor(props){
    super(props);
    this.loginCallBack = this.loginCallBack.bind(this);
    this.state = {
      loading: true,
      loggedIn: false,
    };
  }
  componentDidMount(){
    checkLogin(this.loginCallBack, async (error) =>{
      showLogin(() => {
        this.setState({
          loading: false,
          loggedIn: false,
        });
      });
    });
  }
  loginCallBack(user) {
    if (user) {
      console.log('Logged In: ', user);
      this.setState({
        loggedIn: true,
      });
    } else {
      // User is signed out.
      showLogin(() => {
        this.setState({
          loading: false,
          loggedIn: false,
        });
      });
    }
  }
  render() {
    if (this.state.loggedIn){
      return <Redirect to="/dashboard"/>;
    }
    const logo = <Logo 
      type="logo-main-white-background"
      style={{
        width: '100%', 
        padding: 18,
        maxWidth: this.state.loading ? 'none' : 256,
      }}
    />;
    return (
      <div style={{
        paddingTop: 50,
        textAlign: 'center',
      }}>
        {
          this.state.loading ? 
            <Spin 
              style={{ marginTop: '45vh' }} 
              tip={logo} 
              size="large"
            /> :
            logo
        }
        <div id="firebaseui-auth-container" style={{ padding: 40 }}></div>
      </div>
    );
  }
}
  
export default NormalLoginForm;
